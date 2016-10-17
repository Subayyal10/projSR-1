<?php
session_start(); 
/**
 * PHPExcel
 *
 * Copyright (C) 2006 - 2014 PHPExcel
 *
 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 2.1 of the License, or (at your option) any later version.
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public
 * License along with this library; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301  USA
 *
 * @category   PHPExcel
 * @package    PHPExcel
 * @copyright  Copyright (c) 2006 - 2014 PHPExcel (http://www.codeplex.com/PHPExcel)
 * @license    http://www.gnu.org/licenses/old-licenses/lgpl-2.1.txt	LGPL
 * @version    1.8.0, 2014-03-02
 */

/** Error reporting */
error_reporting(E_ALL);
ini_set('display_errors', TRUE);
ini_set('display_startup_errors', TRUE);
date_default_timezone_set('Europe/London');

if (PHP_SAPI == 'cli')
	die('This example should only be run from a Web Browser');

/** Include PHPExcel */
require_once dirname(__FILE__) . '/PHPExcel.php';


// Create new PHPExcel object
$objPHPExcel = new PHPExcel();

$alpha = array();
$alpha[] = "A";
$alpha[] = "B";
$alpha[] = "C";
$alpha[] = "D";
$alpha[] = "E";
$alpha[] = "F";
$alpha[] = "G";
$alpha[] = "H";
$alpha[] = "I";
$alpha[] = "J";
$alpha[] = "K";
$alpha[] = "L";
$alpha[] = "M";
$alpha[] = "N";
// Set document properties
$objPHPExcel->getProperties()->setCreator("SweetReferrals")
							 ->setLastModifiedBy("SweetReferrals")
							 ->setTitle("SweetReferrals Export")
							 ->setSubject("SweetReferrals Export")
							 ->setDescription("This excel file was exported from SweetReferrals online dashboard")
							 ->setKeywords("office 2007")
							 ->setCategory("SweetReferrals Exports");

$dateee = $_SESSION['rep_date'];
$week = $_SESSION['rep_date'];
$proid = $_SESSION['CurrentProductID'];
$objPHPExcel->setActiveSheetIndex(0)
            ->setCellValue('B1', $dateee)
            ->setCellValue('A2', 'Hour')
            ;
$temp = 3;			
include "../../database/db.php";
$cities = array();
$query = "SELECT distinct(`re_day`) AS cities FROM `rep_engagement` WHERE `re_week` = '$week' AND `p_id` = $proid";
$stmt = $db->query($query);
while($row = $stmt->fetch_assoc()) {
      $cities[] = $row['cities']; //these are days
}

$persona = array();
$query = "SELECT distinct(`re_hour`) AS persona FROM `rep_engagement` WHERE `re_week` = '$week' AND `p_id` = $proid";
$stmt = $db->query($query);
while($row = $stmt->fetch_assoc()) {
      $persona[] = $row['persona'];
}

$values = array();
$query = "SELECT  `re_hour`, `re_day`, `re_val` FROM `rep_engagement` WHERE `re_week` = '$week' AND `p_id` = $proid";
$stmt = $db->query($query);
while($row = $stmt->fetch_assoc()) {
      $values[$row['re_day']][$row['re_hour']] = $row['re_val'];
}

$all = array();
for($i = 0 ; $i<count($cities) ; $i++){
    $objPHPExcel->setActiveSheetIndex(0)->setCellValue($alpha[$i+1].'2', $cities[$i]);
}

for($i = 0 ; $i<count($persona) ; $i++){
    $temp = $temp+1;
    $objPHPExcel->setActiveSheetIndex(0)->setCellValue('A'.$temp, $persona[$i]);
    for($j = 0 ; $j<count($cities) ; $j++){
        $objPHPExcel->setActiveSheetIndex(0)->setCellValue($alpha[$j+1].$temp,$values[$cities[$j]][$persona[$i]] );
    }
}



foreach(range('A','K') as $columnID) {
    $objPHPExcel->getActiveSheet()->getColumnDimension($columnID)
        ->setAutoSize(true);
}



// Rename worksheet
$objPHPExcel->getActiveSheet()->setTitle('Engagement');


// Set active sheet index to the first sheet, so Excel opens this as the first sheet
$objPHPExcel->setActiveSheetIndex(0);


// Redirect output to a client’s web browser (Excel2007)
header('Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
header('Content-Disposition: attachment;filename="Engagement.xlsx"');
header('Cache-Control: max-age=0');
// If you're serving to IE 9, then the following may be needed
header('Cache-Control: max-age=1');

// If you're serving to IE over SSL, then the following may be needed
header ('Expires: Mon, 26 Jul 1997 05:00:00 GMT'); // Date in the past
header ('Last-Modified: '.gmdate('D, d M Y H:i:s').' GMT'); // always modified
header ('Cache-Control: cache, must-revalidate'); // HTTP/1.1
header ('Pragma: public'); // HTTP/1.0

$objWriter = PHPExcel_IOFactory::createWriter($objPHPExcel, 'Excel2007');
$objWriter->save('php://output');
exit;
