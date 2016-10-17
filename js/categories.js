$("#category_button").trigger("click");

$('#productCategory').jstree({
		'core' : {
			'data' : [{"id":"3","parent":"#","text":"Beverages"},{"id":"4","parent":"3","text":"Coffee"},{"id":"5","parent":"4","text":"Ready to Drink Coffee"},{"id":"6","parent":"4","text":"Coffee Pods"},{"id":"7","parent":"4","text":"Ground &amp; Whole Bean Coffee"},{"id":"8","parent":"4","text":"Instant Coffee"},{"id":"9","parent":"4","text":"Creamers"},{"id":"10","parent":"4","text":"Sweeteners"},{"id":"11","parent":"3","text":"Fruit Flavored Drinks"},{"id":"12","parent":"3","text":"Hard Cider"},{"id":"13","parent":"3","text":"Hot Chocolate"},{"id":"14","parent":"3","text":"Juice"},{"id":"15","parent":"3","text":"Milk"},{"id":"16","parent":"15","text":"Powdered Milk"},{"id":"17","parent":"15","text":"Flavored Milk"},{"id":"18","parent":"3","text":"Non-Dairy Milk"},{"id":"19","parent":"18","text":"Almond Milk"},{"id":"20","parent":"18","text":"Coconut Milk"},{"id":"21","parent":"18","text":"Hemp Milk"},{"id":"22","parent":"18","text":"Oat Milk"},{"id":"23","parent":"18","text":"Rice Milk"},{"id":"24","parent":"18","text":"Soy Milk"},{"id":"25","parent":"3","text":"Powdered Beverage Mixes"},{"id":"26","parent":"3","text":"Soda"},{"id":"27","parent":"26","text":"Diet Soda"},{"id":"28","parent":"3","text":"Sports &amp; Energy Drinks"},{"id":"29","parent":"3","text":"Tea"},{"id":"30","parent":"29","text":"Bottled Tea Drinks"},{"id":"31","parent":"29","text":"Powdered Tea"},{"id":"32","parent":"29","text":"Tea Bags &amp; Loose Tea Leaves"},{"id":"33","parent":"3","text":"Water"},{"id":"34","parent":"33","text":"Bottled Water"},{"id":"35","parent":"33","text":"Carbonated Water"},{"id":"36","parent":"33","text":"Flavored Water"},{"id":"37","parent":"33","text":"Tonic Water"},{"id":"38","parent":"#","text":"Food"},{"id":"39","parent":"38","text":"Bakery"},{"id":"40","parent":"39","text":"Bagels"},{"id":"41","parent":"39","text":"Bakery Assortments"},{"id":"42","parent":"39","text":"Breads &amp; Buns"},{"id":"43","parent":"39","text":"Cakes &amp; Dessert Bars"},{"id":"44","parent":"39","text":"Coffee Cakes"},{"id":"45","parent":"39","text":"Cookies"},{"id":"46","parent":"39","text":"Cupcakes"},{"id":"47","parent":"39","text":"Donuts"},{"id":"48","parent":"39","text":"Fudge"},{"id":"49","parent":"39","text":"Ice Cream Cones"},{"id":"50","parent":"39","text":"Muffins"},{"id":"51","parent":"39","text":"Pastries &amp; Scones"},{"id":"52","parent":"39","text":"Pies &amp; Tarts"},{"id":"53","parent":"39","text":"Taco Shells &amp; Tostadas"},{"id":"54","parent":"39","text":"Tortillas &amp; Wraps"},{"id":"55","parent":"38","text":"Candy &amp; Gum"},{"id":"56","parent":"55","text":"Candy"},{"id":"57","parent":"56","text":"Candy Bars &amp; Pieces"},{"id":"58","parent":"56","text":"Candy Brittle"},{"id":"59","parent":"56","text":"Candy Canes"},{"id":"60","parent":"56","text":"Candy Corn"},{"id":"61","parent":"56","text":"Caramels"},{"id":"62","parent":"56","text":"Chocolate Assortments"},{"id":"63","parent":"56","text":"Chocolate Bars"},{"id":"64","parent":"56","text":"Chocolate Covered Fruit"},{"id":"65","parent":"56","text":"Chocolate Truffles"},{"id":"66","parent":"56","text":"Fruit Chews"},{"id":"67","parent":"56","text":"Gumdrops"},{"id":"68","parent":"56","text":"Gummy Candies"},{"id":"69","parent":"56","text":"Hard Candies"},{"id":"70","parent":"56","text":"Jelly Beans"},{"id":"71","parent":"56","text":"Licorice"},{"id":"72","parent":"56","text":"Lollipops &amp; Suckers"},{"id":"73","parent":"56","text":"Marshmallow Candies"},{"id":"74","parent":"56","text":"Mints"},{"id":"75","parent":"56","text":"Nougat"},{"id":"76","parent":"56","text":"Peanut Butter Cups"},{"id":"77","parent":"56","text":"Peppermint Patties"},{"id":"78","parent":"56","text":"Taffy"},{"id":"79","parent":"56","text":"Toffee"},{"id":"80","parent":"55","text":"Gum"},{"id":"81","parent":"38","text":"Condiments &amp; Sauces"},{"id":"82","parent":"81","text":"Barbecue Sauce"},{"id":"83","parent":"81","text":"Chutney"},{"id":"84","parent":"81","text":"Cocktail Sauce"},{"id":"85","parent":"81","text":"Curry Sauce"},{"id":"86","parent":"81","text":"Dessert Toppings"},{"id":"87","parent":"86","text":"Fruit Toppings"},{"id":"88","parent":"86","text":"Ice Cream Syrup"},{"id":"89","parent":"86","text":"Whipped Topping"},{"id":"90","parent":"81","text":"Fish Sauce"},{"id":"91","parent":"81","text":"Gravy"},{"id":"92","parent":"81","text":"Honey"},{"id":"93","parent":"81","text":"Horseradish Sauce"},{"id":"94","parent":"81","text":"Hot Sauce"},{"id":"95","parent":"81","text":"Ketchup"},{"id":"96","parent":"81","text":"Marinade"},{"id":"97","parent":"81","text":"Mayonnaise"},{"id":"98","parent":"81","text":"Mustard"},{"id":"99","parent":"81","text":"Olives &amp; Capers"},{"id":"100","parent":"81","text":"Pasta Sauce"},{"id":"101","parent":"81","text":"Pickles &amp; Relishes"},{"id":"102","parent":"81","text":"Pizza Sauce"},{"id":"103","parent":"81","text":"Salad Dressing"},{"id":"104","parent":"81","text":"Satay Sauce"},{"id":"105","parent":"81","text":"Soy Sauce"},{"id":"106","parent":"81","text":"Steak Sauce"},{"id":"107","parent":"81","text":"Syrup"},{"id":"108","parent":"107","text":"Agave Syrup"},{"id":"109","parent":"107","text":"Flavored Syrup"},{"id":"110","parent":"107","text":"Pancake &amp; Maple Syrup"},{"id":"111","parent":"107","text":"Snow Cone Syrup"},{"id":"112","parent":"81","text":"Tahini"},{"id":"113","parent":"81","text":"Tartar Sauce"},{"id":"114","parent":"81","text":"Vinegar"},{"id":"115","parent":"81","text":"Worcestershire Sauce"},{"id":"116","parent":"81","text":"Dips &amp; Spreads"},{"id":"117","parent":"116","text":"Apple Butter"},{"id":"118","parent":"116","text":"Cheese Spread"},{"id":"119","parent":"116","text":"Cream Cheese"},{"id":"120","parent":"116","text":"Guacamole"},{"id":"121","parent":"116","text":"Hummus"},{"id":"122","parent":"116","text":"Jams &amp; Jellies"},{"id":"123","parent":"116","text":"Nut Butters"},{"id":"124","parent":"123","text":"Almond Butter"},{"id":"125","parent":"123","text":"Hazelnut Butter"},{"id":"126","parent":"123","text":"Peanut Butter"},{"id":"127","parent":"116","text":"Salsa"},{"id":"128","parent":"116","text":"Tapenade"},{"id":"129","parent":"116","text":"Vegetable Dip"},{"id":"130","parent":"38","text":"Cooking &amp; Baking Ingredients"},{"id":"131","parent":"130","text":"Artificial Sweeteners"},{"id":"132","parent":"130","text":"Baking Chips"},{"id":"133","parent":"130","text":"Baking Chocolate"},{"id":"134","parent":"130","text":"Baking Extracts"},{"id":"135","parent":"134","text":"Almond Extract"},{"id":"136","parent":"134","text":"Vanilla Extract"},{"id":"137","parent":"130","text":"Baking Kits"},{"id":"138","parent":"130","text":"Baking Mixes"},{"id":"139","parent":"138","text":"Bread &amp; Muffin Mixes"},{"id":"852","parent":"139","text":"Bread Mixes"},{"id":"853","parent":"139","text":"Muffin Mixes"},{"id":"142","parent":"138","text":"Bread Pudding Mixes"},{"id":"143","parent":"138","text":"Cake &amp; Brownie Mixes"},{"id":"144","parent":"138","text":"Cookie Mixes"},{"id":"145","parent":"138","text":"Pretzel Mixes"},{"id":"146","parent":"138","text":"Waffle &amp; Pancake Mixes"},{"id":"147","parent":"130","text":"Baking Powder"},{"id":"148","parent":"130","text":"Baking Soda"},{"id":"149","parent":"130","text":"Batter &amp; Coating Mixes"},{"id":"150","parent":"130","text":"Bean Paste"},{"id":"151","parent":"130","text":"Bread Crumbs"},{"id":"152","parent":"130","text":"Condensed Milk"},{"id":"153","parent":"130","text":"Cooking Oil"},{"id":"154","parent":"153","text":"Canola Oil"},{"id":"155","parent":"153","text":"Chili Oil"},{"id":"156","parent":"153","text":"Coconut Oil"},{"id":"157","parent":"153","text":"Cooking Spray"},{"id":"158","parent":"153","text":"Corn Oil"},{"id":"159","parent":"153","text":"Hemp Oil"},{"id":"160","parent":"153","text":"Olive Oil"},{"id":"161","parent":"153","text":"Peanut Oil"},{"id":"162","parent":"153","text":"Rice Oil"},{"id":"163","parent":"153","text":"Sesame Oil"},{"id":"164","parent":"153","text":"Soybean Oil"},{"id":"165","parent":"153","text":"Vegetable Oil"},{"id":"166","parent":"153","text":"Walnut Oil"},{"id":"167","parent":"130","text":"Cooking Starch"},{"id":"168","parent":"130","text":"Cooking Wine"},{"id":"169","parent":"130","text":"Corn Syrup"},{"id":"170","parent":"130","text":"Dough"},{"id":"171","parent":"170","text":"Bread &amp; Pastry Dough"},{"id":"851","parent":"171","text":"Pizza Dough"},{"id":"173","parent":"170","text":"Cookie &amp; Brownie Dough"},{"id":"174","parent":"170","text":"Pie Crusts"},{"id":"175","parent":"130","text":"Edible Baking Decorations"},{"id":"176","parent":"175","text":"Colored Sugar"},{"id":"177","parent":"175","text":"Edible Baking Decoration Kits"},{"id":"178","parent":"175","text":"Sprinkles"},{"id":"179","parent":"175","text":"Sugar Pearls"},{"id":"180","parent":"130","text":"Evaporated Milk"},{"id":"181","parent":"130","text":"Floss Sugar"},{"id":"182","parent":"130","text":"Flour"},{"id":"183","parent":"130","text":"Food Coloring"},{"id":"184","parent":"130","text":"Frosting &amp; Icing"},{"id":"185","parent":"130","text":"Marshmallows"},{"id":"186","parent":"130","text":"Molasses"},{"id":"187","parent":"130","text":"Pie Fillings"},{"id":"188","parent":"130","text":"Shortening &amp; Lard"},{"id":"189","parent":"130","text":"Shredded Coconut"},{"id":"190","parent":"130","text":"Starter Cultures"},{"id":"191","parent":"130","text":"Sugar"},{"id":"192","parent":"130","text":"Tomato Paste"},{"id":"193","parent":"130","text":"Unflavored Gelatin"},{"id":"194","parent":"130","text":"Yeast"},{"id":"195","parent":"38","text":"Dairy Products"},{"id":"196","parent":"195","text":"Butter &amp; Margarine"},{"id":"197","parent":"195","text":"Cheese"},{"id":"198","parent":"195","text":"Cottage Cheese"},{"id":"199","parent":"195","text":"Cream"},{"id":"200","parent":"195","text":"Sour Cream"},{"id":"201","parent":"195","text":"Whipped Cream"},{"id":"202","parent":"195","text":"Yogurt"},{"id":"203","parent":"38","text":"Food Gift Baskets"},{"id":"204","parent":"38","text":"Frozen Desserts &amp; Novelties"},{"id":"205","parent":"204","text":"Frozen Yogurt"},{"id":"206","parent":"204","text":"Ice Cream"},{"id":"207","parent":"204","text":"Nondairy Frozen Desserts"},{"id":"208","parent":"204","text":"Popsicles"},{"id":"209","parent":"204","text":"Sherbet"},{"id":"210","parent":"204","text":"Sorbet"},{"id":"211","parent":"204","text":"Sundae Cones"},{"id":"212","parent":"38","text":"Snack Foods"},{"id":"213","parent":"212","text":"Breadsticks"},{"id":"214","parent":"212","text":"Cereal &amp; Granola Bars"},{"id":"215","parent":"212","text":"Chips"},{"id":"216","parent":"215","text":"Bagel Chips"},{"id":"217","parent":"215","text":"Corn &amp; Tortilla Chips"},{"id":"218","parent":"215","text":"Pita Chips"},{"id":"219","parent":"215","text":"Cheese Puffs"},{"id":"220","parent":"215","text":"Potato Chips"},{"id":"221","parent":"212","text":"Crackers"},{"id":"222","parent":"221","text":"Cheese Crackers"},{"id":"223","parent":"221","text":"Cracker Assortments"},{"id":"224","parent":"221","text":"Flatbread Crackers"},{"id":"225","parent":"221","text":"Graham Crackers"},{"id":"226","parent":"221","text":"Matzo Crackers"},{"id":"227","parent":"221","text":"Oyster Crackers"},{"id":"228","parent":"221","text":"Saltine Crackers"},{"id":"229","parent":"221","text":"Sandwich Crackers"},{"id":"230","parent":"221","text":"Water Crackers"},{"id":"231","parent":"212","text":"Croutons"},{"id":"232","parent":"212","text":"Fruit Snacks"},{"id":"233","parent":"212","text":"Jerky"},{"id":"234","parent":"233","text":"Beef Jerky"},{"id":"235","parent":"233","text":"Pork Jerky"},{"id":"236","parent":"233","text":"Turkey Jerky"},{"id":"237","parent":"212","text":"Popcorn"},{"id":"238","parent":"212","text":"Pork Rinds"},{"id":"239","parent":"212","text":"Pretzels"},{"id":"240","parent":"212","text":"Pudding &amp; Gelatin Snacks"},{"id":"241","parent":"212","text":"Puffed Rice Cakes"},{"id":"242","parent":"212","text":"Salad Toppings"},{"id":"243","parent":"212","text":"Sesame Sticks"},{"id":"244","parent":"212","text":"Snack Cakes"},{"id":"245","parent":"212","text":"Sticky Rice Cakes"},{"id":"246","parent":"212","text":"Trail &amp; Snack Mixes"},{"id":"247","parent":"#","text":"Household Supplies"},{"id":"248","parent":"247","text":"Household Cleaning Products"},{"id":"249","parent":"248","text":"All-Purpose Cleaners"},{"id":"250","parent":"248","text":"Carpet Cleaners"},{"id":"251","parent":"248","text":"Dish Detergent &amp; Soap"},{"id":"252","parent":"248","text":"Dishwasher Cleaners"},{"id":"253","parent":"248","text":"Fabric &amp; Upholstery Cleaners"},{"id":"254","parent":"248","text":"Furniture Cleaners &amp; Polish"},{"id":"255","parent":"248","text":"Glass &amp; Surface Cleaners"},{"id":"256","parent":"248","text":"Hardwood Floor Cleaners"},{"id":"257","parent":"248","text":"Household Disinfectants"},{"id":"258","parent":"248","text":"Leather Care &amp; Dyes"},{"id":"259","parent":"248","text":"Oven &amp; Grill Cleaners"},{"id":"260","parent":"248","text":"Pet Odor &amp; Stain Removers"},{"id":"261","parent":"248","text":"Rinse Aids"},{"id":"262","parent":"248","text":"Stainless Steel Cleaners &amp; Polishes"},{"id":"263","parent":"248","text":"Stone Cleaners"},{"id":"264","parent":"248","text":"Toilet Bowl Cleaners"},{"id":"265","parent":"248","text":"Tub &amp; Tile Cleaners"},{"id":"266","parent":"248","text":"Washing Machine Cleaners"},{"id":"267","parent":"247","text":"Laundry Supplies"},{"id":"268","parent":"267","text":"Fabric Refreshers"},{"id":"269","parent":"267","text":"Fabric Softeners &amp; Dryer Sheets"},{"id":"270","parent":"267","text":"Fabric Stain Removers"},{"id":"271","parent":"267","text":"Fabric Starch"},{"id":"272","parent":"267","text":"Garment Shields"},{"id":"273","parent":"267","text":"Laundry Balls"},{"id":"274","parent":"267","text":"Laundry Detergent"},{"id":"275","parent":"267","text":"Lint Rollers"},{"id":"276","parent":"267","text":"Washing Bags &amp; Baskets"},{"id":"277","parent":"267","text":"Wrinkle Releasers &amp; Static Sprays"},{"id":"278","parent":"247","text":"Pest Control"},{"id":"279","parent":"278","text":"Fly Swatters"},{"id":"280","parent":"278","text":"Pest Control Traps"},{"id":"281","parent":"278","text":"Pesticides"},{"id":"282","parent":"278","text":"Repellents"},{"id":"283","parent":"282","text":"Animal &amp; Pet Repellents"},{"id":"284","parent":"282","text":"Household Insect Repellents"},{"id":"285","parent":"#","text":"Health &amp; Beauty"},{"id":"286","parent":"285","text":"Health Care"},{"id":"287","parent":"286","text":"Fitness &amp; Nutrition"},{"id":"288","parent":"287","text":"Diet Pills"},{"id":"289","parent":"287","text":"Nutrition Bars"},{"id":"290","parent":"287","text":"Nutrition Drinks &amp; Shakes"},{"id":"291","parent":"287","text":"Nutrition Gels &amp; Chews"},{"id":"292","parent":"287","text":"Nutritional Food Purees"},{"id":"293","parent":"287","text":"Protein Powder"},{"id":"294","parent":"287","text":"Vitamins &amp; Supplements"},{"id":"295","parent":"286","text":"Medicine &amp; Drugs"},{"id":"296","parent":"286","text":"OTC Medicine"},{"id":"297","parent":"296","text":"Allergies &amp; Sinus"},{"id":"298","parent":"296","text":"Cough, Cold &amp; Flu"},{"id":"299","parent":"296","text":"Gastrointestinal Treatments"},{"id":"300","parent":"296","text":"Pain Relievers"},{"id":"301","parent":"296","text":"Sleeping Medication"},{"id":"302","parent":"285","text":"Personal Care"},{"id":"303","parent":"302","text":"Bath &amp; Body"},{"id":"304","parent":"303","text":"Bar Soap"},{"id":"305","parent":"303","text":"Bath Additives"},{"id":"306","parent":"303","text":"Bath Brushes"},{"id":"307","parent":"303","text":"Bath Sponges &amp; Loofahs"},{"id":"309","parent":"303","text":"Hand Sanitizers &amp; Wipes"},{"id":"310","parent":"303","text":"Liquid Hand Soap"},{"id":"311","parent":"303","text":"Powdered Hand Soap"},{"id":"312","parent":"303","text":"Shower Caps"},{"id":"313","parent":"303","text":"Wet Wipes"},{"id":"854","parent":"303","text":"Body Wash"},{"id":"314","parent":"302","text":"Bath &amp; Body Gift Sets"},{"id":"405","parent":"302","text":"Cotton Balls"},{"id":"406","parent":"302","text":"Cotton Swabs"},{"id":"407","parent":"302","text":"Deodorant &amp; Anti-Perspirant"},{"id":"408","parent":"302","text":"Ear Care"},{"id":"409","parent":"408","text":"Ear Candles"},{"id":"410","parent":"408","text":"Ear Drops"},{"id":"411","parent":"408","text":"Ear Dryers"},{"id":"412","parent":"408","text":"Ear Syringes"},{"id":"413","parent":"408","text":"Ear Wax Removal Kits"},{"id":"414","parent":"408","text":"Earplug Dispensers"},{"id":"415","parent":"408","text":"Earplugs"},{"id":"416","parent":"302","text":"Feminine Care"},{"id":"417","parent":"416","text":"Feminine Deodorant"},{"id":"418","parent":"416","text":"Feminine Douches &amp; Washes"},{"id":"419","parent":"416","text":"Feminine Pads &amp; Protectors"},{"id":"420","parent":"416","text":"Tampons"},{"id":"421","parent":"302","text":"Foot Care"},{"id":"422","parent":"421","text":"Antifungal Treatments"},{"id":"423","parent":"421","text":"Bunion Care"},{"id":"424","parent":"421","text":"Corn &amp; Callus Care"},{"id":"425","parent":"421","text":"Foot Odor Removers"},{"id":"426","parent":"421","text":"Insoles &amp; Inserts"},{"id":"427","parent":"421","text":"Toe Spacers"},{"id":"428","parent":"302","text":"Hair Care"},{"id":"429","parent":"428","text":"Hair Color"},{"id":"430","parent":"428","text":"Hair Color Removers"},{"id":"431","parent":"428","text":"Hair Coloring Accessories"},{"id":"432","parent":"428","text":"Hair Loss Concealers"},{"id":"433","parent":"428","text":"Hair Loss Treatments"},{"id":"434","parent":"428","text":"Hair Permanents &amp; Straighteners"},{"id":"435","parent":"428","text":"Hair Shears"},{"id":"436","parent":"428","text":"Hair Steamers &amp; Heat Caps"},{"id":"437","parent":"428","text":"Hair Styling Products"},{"id":"438","parent":"428","text":"Hair Styling Tool Accessories"},{"id":"842","parent":"438","text":"Hair Curler Clips &amp; Pins"},{"id":"843","parent":"438","text":"Hair Dryer Accessories"},{"id":"844","parent":"438","text":"Hair Iron Accessories"},{"id":"442","parent":"428","text":"Hair Styling Tools"},{"id":"845","parent":"442","text":"Combs &amp; Brushes"},{"id":"846","parent":"442","text":"Curling Irons"},{"id":"847","parent":"442","text":"Hair Curlers"},{"id":"848","parent":"442","text":"Hair Dryers"},{"id":"849","parent":"442","text":"Hair Straighteners"},{"id":"448","parent":"428","text":"Shampoo &amp; Conditioner"},{"id":"449","parent":"302","text":"Massage &amp; Relaxation"},{"id":"450","parent":"449","text":"Massage Chairs"},{"id":"451","parent":"449","text":"Massage Oil"},{"id":"452","parent":"449","text":"Massage Tables"},{"id":"453","parent":"449","text":"Massagers"},{"id":"454","parent":"302","text":"Oral Care"},{"id":"455","parent":"454","text":"Breath Spray"},{"id":"456","parent":"454","text":"Dental Floss"},{"id":"457","parent":"454","text":"Dental Water Jet Replacement Tips"},{"id":"458","parent":"454","text":"Dental Water Jets"},{"id":"459","parent":"454","text":"Denture Adhesives"},{"id":"460","parent":"454","text":"Denture Cleaners"},{"id":"461","parent":"454","text":"Dentures"},{"id":"462","parent":"454","text":"Gum Stimulators"},{"id":"463","parent":"454","text":"Mouthguards"},{"id":"464","parent":"454","text":"Mouthwash"},{"id":"465","parent":"454","text":"Oral Pain Relievers"},{"id":"466","parent":"454","text":"Power Flossers"},{"id":"467","parent":"454","text":"Teeth Whitening"},{"id":"468","parent":"454","text":"Tongue Scrapers"},{"id":"469","parent":"454","text":"Toothbrush Accessories"},{"id":"839","parent":"469","text":"Toothbrush Covers"},{"id":"840","parent":"469","text":"Toothbrush Replacement Heads"},{"id":"841","parent":"469","text":"Toothbrush Sanitizers"},{"id":"473","parent":"454","text":"Toothbrushes"},{"id":"474","parent":"454","text":"Toothpaste"},{"id":"475","parent":"454","text":"Toothpaste Squeezers &amp; Dispensers"},{"id":"476","parent":"454","text":"Toothpicks"},{"id":"477","parent":"302","text":"Personal Lubricants"},{"id":"478","parent":"302","text":"Shaving &amp; Grooming"},{"id":"479","parent":"478","text":"Aftershave"},{"id":"480","parent":"478","text":"Electric Razor Accessories"},{"id":"481","parent":"478","text":"Electric Razors"},{"id":"482","parent":"478","text":"Hair Clipper &amp; Trimmer Accessories"},{"id":"483","parent":"478","text":"Hair Clippers &amp; Trimmers"},{"id":"484","parent":"478","text":"Hair Removal"},{"id":"485","parent":"484","text":"Depilatories"},{"id":"486","parent":"484","text":"Electrolysis Devices"},{"id":"487","parent":"484","text":"Epilators"},{"id":"488","parent":"484","text":"Laser Hair Removal Devices"},{"id":"489","parent":"484","text":"Waxing Kits"},{"id":"490","parent":"478","text":"Razors &amp; Razor Blades"},{"id":"491","parent":"478","text":"Shaving Brushes"},{"id":"492","parent":"478","text":"Shaving Cream"},{"id":"493","parent":"478","text":"Shaving Kits"},{"id":"494","parent":"478","text":"Styptic Pencils"},{"id":"495","parent":"302","text":"Sleeping Aids"},{"id":"496","parent":"495","text":"Sleep Masks"},{"id":"497","parent":"495","text":"Snoring &amp; Sleep Apnea Aids"},{"id":"498","parent":"495","text":"Travel Pillows"},{"id":"499","parent":"495","text":"White Noise Machines"},{"id":"500","parent":"302","text":"Vision Care"},{"id":"501","parent":"500","text":"Contact Lens Care"},{"id":"502","parent":"501","text":"Contact Lens Care Kits"},{"id":"503","parent":"501","text":"Contact Lens Cases"},{"id":"504","parent":"501","text":"Contact Lens Solution"},{"id":"505","parent":"500","text":"Contact Lenses"},{"id":"506","parent":"500","text":"Eye Drops &amp; Lubricants"},{"id":"507","parent":"500","text":"Eyeglass Accessories"},{"id":"838","parent":"507","text":"Eyeglass Cases &amp; Holders"},{"id":"509","parent":"500","text":"Eyeglass Lenses"},{"id":"510","parent":"500","text":"Eyeglasses"},{"id":"511","parent":"500","text":"Sunglass Lenses"},{"id":"512","parent":"302","text":"Wart Removers"},{"id":"315","parent":"285","text":"Cosmetics"},{"id":"316","parent":"315","text":"Cosmetic Tool Cleaners"},{"id":"317","parent":"315","text":"Cosmetic Tools"},{"id":"318","parent":"317","text":"Makeup Tools"},{"id":"319","parent":"318","text":"Double Eyelid Glue &amp; Tape"},{"id":"320","parent":"318","text":"Eyebrow Stencils"},{"id":"321","parent":"318","text":"Eyelash Curler Refills"},{"id":"322","parent":"318","text":"Eyelash Curlers"},{"id":"323","parent":"318","text":"Face Mirrors"},{"id":"324","parent":"318","text":"Facial Blotting Paper"},{"id":"325","parent":"318","text":"False Eyelash Adhesive"},{"id":"326","parent":"318","text":"False Eyelash Applicators"},{"id":"327","parent":"318","text":"Makeup Brushes"},{"id":"328","parent":"318","text":"Makeup Sponges"},{"id":"329","parent":"317","text":"Nail Tools"},{"id":"330","parent":"329","text":"Cuticle Pushers"},{"id":"331","parent":"329","text":"Cuticle Scissors"},{"id":"332","parent":"329","text":"Manicure Tool Sets"},{"id":"333","parent":"329","text":"Nail Buffers"},{"id":"334","parent":"329","text":"Nail Clippers"},{"id":"335","parent":"329","text":"Nail Drills"},{"id":"336","parent":"329","text":"Nail Dryers"},{"id":"337","parent":"329","text":"Nail Files &amp; Emery Boards"},{"id":"338","parent":"329","text":"Pedicure Toe Seperators"},{"id":"339","parent":"317","text":"Skin Care Tools"},{"id":"340","parent":"339","text":"Facial Saunas"},{"id":"341","parent":"339","text":"Foot Files"},{"id":"342","parent":"339","text":"Pumice Stones"},{"id":"343","parent":"339","text":"Skin Care Extractors"},{"id":"344","parent":"339","text":"Skin Care Rollers"},{"id":"345","parent":"339","text":"Skin Cleansing Brushes &amp; Systems"},{"id":"346","parent":"317","text":"Tweezers"},{"id":"347","parent":"315","text":"Makeup"},{"id":"348","parent":"347","text":"Body Makeup"},{"id":"349","parent":"348","text":"Body &amp; Hair Glitter"},{"id":"350","parent":"348","text":"Body Paint &amp; Foundation"},{"id":"351","parent":"347","text":"Costume &amp; Stage Makeup"},{"id":"352","parent":"347","text":"Eye Makeup"},{"id":"353","parent":"352","text":"Eye Shadow &amp; Primer"},{"id":"354","parent":"352","text":"Eyebrow Enhancers"},{"id":"355","parent":"352","text":"Eyelash Growth Treatments"},{"id":"356","parent":"352","text":"Eyeliner"},{"id":"357","parent":"352","text":"False Eyelashes"},{"id":"358","parent":"352","text":"Mascara"},{"id":"359","parent":"347","text":"Face Makeup"},{"id":"360","parent":"359","text":"Blushes &amp; Bronzers"},{"id":"361","parent":"359","text":"Face Powder"},{"id":"362","parent":"359","text":"Foundations &amp; Concealers"},{"id":"363","parent":"359","text":"Highlighters &amp; Luminizers"},{"id":"364","parent":"347","text":"Lip Makeup"},{"id":"365","parent":"364","text":"Lip &amp; Cheek Stains"},{"id":"366","parent":"364","text":"Lip Gloss"},{"id":"367","parent":"364","text":"Lip Liner"},{"id":"368","parent":"364","text":"Lipstick"},{"id":"369","parent":"347","text":"Makeup Finishing Sprays"},{"id":"370","parent":"347","text":"Makeup Sets"},{"id":"371","parent":"347","text":"Temporary Tattoos"},{"id":"372","parent":"315","text":"Nail Care"},{"id":"373","parent":"372","text":"Cuticle Cream &amp; Oil"},{"id":"374","parent":"372","text":"False Nails"},{"id":"375","parent":"372","text":"Nail Art Kits &amp; Accessories"},{"id":"376","parent":"372","text":"Nail Glue"},{"id":"377","parent":"372","text":"Nail Polish Removers"},{"id":"378","parent":"372","text":"Nail Polish Thinners"},{"id":"379","parent":"372","text":"Nail Polishes"},{"id":"380","parent":"315","text":"Skin Care"},{"id":"381","parent":"380","text":"Acne Treatments &amp; Kits"},{"id":"382","parent":"380","text":"Anti-Aging Skin Care Kits"},{"id":"383","parent":"380","text":"Body Oil"},{"id":"384","parent":"380","text":"Body Powder"},{"id":"385","parent":"380","text":"Compressed Skin Care Mask Sheets"},{"id":"386","parent":"380","text":"Facial Cleansers"},{"id":"387","parent":"380","text":"Facial Cleansing Kits"},{"id":"388","parent":"380","text":"Facial Pore Strips"},{"id":"389","parent":"380","text":"Lip Balms &amp; Treatments"},{"id":"390","parent":"380","text":"Lotion &amp; Moisturizer"},{"id":"391","parent":"390","text":"Body Lotion"},{"id":"392","parent":"390","text":"Face Lotion"},{"id":"393","parent":"390","text":"Foot Lotion"},{"id":"394","parent":"390","text":"Hand Lotion"},{"id":"395","parent":"380","text":"Makeup Removers"},{"id":"396","parent":"380","text":"Petroleum Jelly"},{"id":"397","parent":"380","text":"Skin Care Masks &amp; Peels"},{"id":"398","parent":"380","text":"Skin Insect Repellent"},{"id":"399","parent":"380","text":"Sunscreen"},{"id":"400","parent":"380","text":"Tanning Products"},{"id":"857","parent":"400","text":"Self Tanner"},{"id":"858","parent":"400","text":"Self Tanner Applicators &amp; Removers"},{"id":"859","parent":"400","text":"Tanning Oil &amp; Lotion"},{"id":"404","parent":"380","text":"Toners &amp; Astringents"},{"id":"850","parent":"285","text":"Perfume &amp; Cologne"},{"id":"856","parent":"285","text":"Jewelry Cleaning &amp; Care"},{"id":"513","parent":"#","text":"Family"},{"id":"514","parent":"513","text":"Kids"},{"id":"515","parent":"513","text":"Baby"},{"id":"516","parent":"515","text":"Care"},{"id":"517","parent":"516","text":"Nursing &amp; Feeding"},{"id":"518","parent":"516","text":"Bath"},{"id":"519","parent":"518","text":"Lotion"},{"id":"520","parent":"518","text":"Shampoo"},{"id":"521","parent":"518","text":"Baby Body Wash"},{"id":"522","parent":"516","text":"Diapering"},{"id":"523","parent":"522","text":"Diapers"},{"id":"524","parent":"522","text":"Wipes"},{"id":"525","parent":"522","text":"Diaper Rash Treatments"},{"id":"777","parent":"522","text":"Diaper Bags"},{"id":"526","parent":"516","text":"Teething"},{"id":"527","parent":"515","text":"Baby Food"},{"id":"528","parent":"527","text":"Formula"},{"id":"529","parent":"527","text":"Baby Juice"},{"id":"530","parent":"527","text":"Fruit Puree"},{"id":"531","parent":"527","text":"Snacks"},{"id":"532","parent":"#","text":"Animals &amp; Pet Supplies"},{"id":"534","parent":"532","text":"Pet Supplies"},{"id":"535","parent":"534","text":"Bird Supplies"},{"id":"536","parent":"535","text":"Bird Cage Accessories"},{"id":"836","parent":"536","text":"Bird Cage Food &amp; Water Dishes"},{"id":"538","parent":"535","text":"Bird Cages &amp; Stands"},{"id":"539","parent":"535","text":"Bird Food"},{"id":"540","parent":"535","text":"Bird Gyms &amp; Playstands"},{"id":"541","parent":"535","text":"Bird Ladders &amp; Perches"},{"id":"542","parent":"535","text":"Bird Toys"},{"id":"543","parent":"535","text":"Bird Treats"},{"id":"544","parent":"534","text":"Cat Supplies"},{"id":"545","parent":"544","text":"Cat Apparel"},{"id":"546","parent":"544","text":"Cat Beds"},{"id":"547","parent":"544","text":"Cat Food"},{"id":"548","parent":"544","text":"Cat Furniture"},{"id":"549","parent":"544","text":"Cat Litter"},{"id":"550","parent":"544","text":"Cat Litter Box Mats"},{"id":"551","parent":"544","text":"Cat Litter Boxes"},{"id":"552","parent":"544","text":"Cat Toys"},{"id":"553","parent":"544","text":"Cat Treats"},{"id":"554","parent":"544","text":"Cat Leashes"},{"id":"555","parent":"544","text":"Cat Flea &amp; Tick Control"},{"id":"556","parent":"544","text":"Cat Collars &amp; Harnesses"},{"id":"557","parent":"544","text":"Cat Carriers &amp; Crates"},{"id":"558","parent":"534","text":"Dog Supplies"},{"id":"559","parent":"558","text":"Dog Apparel"},{"id":"560","parent":"558","text":"Dog Beds"},{"id":"561","parent":"558","text":"Dog Diaper Pads &amp; Liners"},{"id":"562","parent":"558","text":"Dog Food"},{"id":"563","parent":"558","text":"Dog Houses"},{"id":"564","parent":"558","text":"Dog Kennel &amp; Run Accessories"},{"id":"565","parent":"558","text":"Dog Kennels &amp; Runs"},{"id":"566","parent":"558","text":"Dog Toys"},{"id":"567","parent":"558","text":"Dog Treats"},{"id":"568","parent":"558","text":"Dog Collars &amp; Harnesses"},{"id":"569","parent":"558","text":"Dog Carriers &amp; Crates"},{"id":"570","parent":"558","text":"Dog Flea &amp; Tick Control"},{"id":"571","parent":"558","text":"Dog Leashes"},{"id":"572","parent":"534","text":"Fish Supplies"},{"id":"573","parent":"572","text":"Aquarium Air Pumps"},{"id":"574","parent":"572","text":"Aquarium Decor"},{"id":"837","parent":"574","text":"Artificial Aquarium Plants"},{"id":"576","parent":"572","text":"Aquarium Filters"},{"id":"577","parent":"572","text":"Aquarium Gravel &amp; Substrates"},{"id":"578","parent":"572","text":"Aquarium Heating"},{"id":"579","parent":"572","text":"Aquarium Lighting"},{"id":"580","parent":"572","text":"Aquarium Overflow Boxes"},{"id":"581","parent":"572","text":"Aquarium Stands"},{"id":"582","parent":"572","text":"Aquarium Water Pumps"},{"id":"583","parent":"572","text":"Aquarium Water Treatments"},{"id":"584","parent":"572","text":"Aquariums"},{"id":"585","parent":"572","text":"Aquatic Plant Fertilizers"},{"id":"586","parent":"572","text":"Fish Feeders"},{"id":"587","parent":"572","text":"Fish Food"},{"id":"588","parent":"534","text":"Pet Agility Equipment"},{"id":"589","parent":"534","text":"Pet Apparel Hangers"},{"id":"590","parent":"534","text":"Pet Attractant"},{"id":"591","parent":"534","text":"Pet Bells &amp; Charms"},{"id":"592","parent":"534","text":"Pet Biometric Monitors"},{"id":"593","parent":"592","text":"Pet Glucose Meters"},{"id":"594","parent":"592","text":"Pet Pedometers"},{"id":"595","parent":"592","text":"Pet Scales"},{"id":"596","parent":"592","text":"Pet Thermometers"},{"id":"597","parent":"534","text":"Pet Bowl Mats"},{"id":"598","parent":"534","text":"Pet Carriers &amp; Crates"},{"id":"599","parent":"598","text":"Small Animal Carriers"},{"id":"600","parent":"534","text":"Pet Collars &amp; Harnesses"},{"id":"601","parent":"534","text":"Pet Containment Systems"},{"id":"602","parent":"534","text":"Pet Eye Drops &amp; Lubricants"},{"id":"603","parent":"534","text":"Pet Food Containers"},{"id":"604","parent":"534","text":"Pet Food Scoops"},{"id":"605","parent":"534","text":"Pet Grooming Supplies"},{"id":"606","parent":"605","text":"Pet Combs &amp; Brushes"},{"id":"607","parent":"605","text":"Pet Hair Clippers &amp; Trimmers"},{"id":"608","parent":"605","text":"Pet Nail Polish"},{"id":"609","parent":"605","text":"Pet Nail Tools"},{"id":"610","parent":"605","text":"Pet Shampoo &amp; Conditioner"},{"id":"611","parent":"534","text":"Pet ID Tags"},{"id":"612","parent":"534","text":"Pet Leash Extensions"},{"id":"613","parent":"534","text":"Pet Leashes"},{"id":"614","parent":"534","text":"Pet Medical Collars"},{"id":"615","parent":"534","text":"Pet Medical Tape &amp; Bandages"},{"id":"616","parent":"534","text":"Pet Medicine"},{"id":"617","parent":"534","text":"Pet Muzzles"},{"id":"618","parent":"534","text":"Pet Oral Care"},{"id":"619","parent":"618","text":"Pet Breath Spray"},{"id":"620","parent":"618","text":"Pet Toothbrushes"},{"id":"621","parent":"618","text":"Pet Toothpaste"},{"id":"622","parent":"534","text":"Pet Playpens"},{"id":"623","parent":"534","text":"Pet Steps &amp; Ramps"},{"id":"624","parent":"534","text":"Pet Strollers"},{"id":"625","parent":"534","text":"Pet Sunscreen"},{"id":"626","parent":"534","text":"Pet Training Pads"},{"id":"627","parent":"534","text":"Pet Vitamins &amp; Supplements"},{"id":"628","parent":"534","text":"Reptile &amp; Amphibian Supplies"},{"id":"629","parent":"628","text":"Reptile &amp; Amphibian Food"},{"id":"630","parent":"628","text":"Reptile &amp; Amphibian Habitat Accessories"},{"id":"631","parent":"628","text":"Reptile &amp; Amphibian Habitat Heating &amp; Lightin"},{"id":"632","parent":"628","text":"Reptile &amp; Amphibian Habitats"},{"id":"633","parent":"628","text":"Reptile &amp; Amphibian Substrates"},{"id":"634","parent":"534","text":"Small Animal Supplies"},{"id":"635","parent":"634","text":"Small Animal Bedding"},{"id":"636","parent":"634","text":"Small Animal Food"},{"id":"637","parent":"634","text":"Small Animal Habitat Accessories"},{"id":"638","parent":"634","text":"Small Animal Habitats &amp; Cages"},{"id":"639","parent":"634","text":"Small Animal Treats"},{"id":"640","parent":"#","text":"Apparel &amp; Accessories"},{"id":"641","parent":"640","text":"Clothing"},{"id":"642","parent":"640","text":"Clothing Accessories"},{"id":"643","parent":"640","text":"Costumes &amp; Accessories"},{"id":"644","parent":"640","text":"Handbag &amp; Wallet Accessories"},{"id":"646","parent":"640","text":"Jewelry"},{"id":"647","parent":"640","text":"Shoes"},{"id":"648","parent":"#","text":"Arts &amp; Entertainment"},{"id":"649","parent":"648","text":"Hobbies &amp; Creative Arts"},{"id":"650","parent":"648","text":"Party &amp; Celebration"},{"id":"675","parent":"#","text":"Cameras &amp; Optics"},{"id":"676","parent":"675","text":"Camera &amp; Optic Accessories"},{"id":"677","parent":"675","text":"Cameras"},{"id":"678","parent":"675","text":"Optics"},{"id":"679","parent":"675","text":"Accessories"},{"id":"729","parent":"#","text":"Hardware"},{"id":"730","parent":"729","text":"Adhesives, Coatings &amp; Sealants"},{"id":"731","parent":"729","text":"Building Materials"},{"id":"732","parent":"729","text":"Cabinetry"},{"id":"733","parent":"729","text":"Chemicals"},{"id":"734","parent":"729","text":"Electrical Supplies"},{"id":"735","parent":"729","text":"Generators"},{"id":"736","parent":"729","text":"Hardware Accessories"},{"id":"737","parent":"729","text":"Hardware Torches"},{"id":"738","parent":"729","text":"Home Fencing"},{"id":"739","parent":"729","text":"Insulation"},{"id":"740","parent":"729","text":"Key Blanks"},{"id":"741","parent":"729","text":"Locks &amp; Locksmithing"},{"id":"742","parent":"729","text":"Painting &amp; Wall Covering Supplies"},{"id":"743","parent":"729","text":"Plumbing"},{"id":"744","parent":"729","text":"Renewable Energy"},{"id":"745","parent":"729","text":"Roofing"},{"id":"746","parent":"729","text":"Shop Stools"},{"id":"747","parent":"729","text":"Storage Tanks"},{"id":"748","parent":"729","text":"Tool Accessories"},{"id":"749","parent":"729","text":"Tools"},{"id":"750","parent":"#","text":"Home &amp; Garden"},{"id":"752","parent":"750","text":"Decor"},{"id":"753","parent":"750","text":"Emergency Preparedness"},{"id":"754","parent":"750","text":"Fire &amp; Gas Safety"},{"id":"755","parent":"750","text":"Fireplace &amp; Wood Stove Accessories"},{"id":"757","parent":"750","text":"Home Security"},{"id":"759","parent":"750","text":"Household Appliances"},{"id":"760","parent":"750","text":"Garden Household Supplies"},{"id":"761","parent":"750","text":"Kitchen &amp; Dining"},{"id":"762","parent":"750","text":"Lawn &amp; Garden"},{"id":"764","parent":"750","text":"Lighting Accessories"},{"id":"765","parent":"750","text":"Linens &amp; Bedding"},{"id":"766","parent":"750","text":"Parasols &amp; Rain Umbrellas"},{"id":"767","parent":"750","text":"Plants"},{"id":"768","parent":"750","text":"Pool &amp; Spa"},{"id":"771","parent":"750","text":"Wood Stoves"},{"id":"772","parent":"#","text":"Luggage &amp; Bags"},{"id":"773","parent":"772","text":"Backpack Accessories"},{"id":"774","parent":"772","text":"Backpacks"},{"id":"775","parent":"772","text":"Business Bags"},{"id":"776","parent":"772","text":"Cosmetic &amp; Toiletry Bags"},{"id":"778","parent":"772","text":"Duffel Bags"},{"id":"779","parent":"772","text":"Fanny Packs"},{"id":"780","parent":"772","text":"Luggage Accessories"},{"id":"781","parent":"772","text":"Messenger Bags"},{"id":"782","parent":"772","text":"Shopping Totes"},{"id":"783","parent":"772","text":"Suitcases"},{"id":"784","parent":"772","text":"Train Cases"},{"id":"811","parent":"#","text":"Software"},{"id":"812","parent":"811","text":"Computer Software"},{"id":"813","parent":"811","text":"Digital Goods &amp; Currency"},{"id":"814","parent":"811","text":"Video Games"},{"id":"860","parent":"811","text":"Mobile Apps"},{"id":"815","parent":"#","text":"Sporting Goods"},{"id":"816","parent":"815","text":"Air Sports"},{"id":"817","parent":"815","text":"Combat Sports"},{"id":"818","parent":"815","text":"Dancing"},{"id":"819","parent":"815","text":"Exercise &amp; Fitness"},{"id":"820","parent":"815","text":"Gymnastics"},{"id":"821","parent":"815","text":"Indoor Games"},{"id":"822","parent":"815","text":"Jumping"},{"id":"823","parent":"815","text":"Outdoor Recreation"},{"id":"824","parent":"815","text":"Racquet Sports"},{"id":"825","parent":"815","text":"Team Sports"},{"id":"826","parent":"815","text":"Water Sports"},{"id":"827","parent":"815","text":"Winter Sports"},{"id":"828","parent":"#","text":"Toys &amp; Games"},{"id":"829","parent":"828","text":"Game Timers"},{"id":"830","parent":"828","text":"Games"},{"id":"831","parent":"828","text":"Outdoor Play Equipment"},{"id":"832","parent":"828","text":"Puzzles"},{"id":"833","parent":"828","text":"Toys"},{"id":"834","parent":"#","text":"Automotive"}]
		}
	});

$('.jstree-icon.jstree-themeicon').addClass("fa fa-circle-o jstree-themeicon-custom");




             var to=false;
             var productCategory = $('#productCategory');
            $('#categorySearch').keyup(function () {
                   var v = $('#categorySearch').val();
                   treeSearch(v);
            });

            function treeSearch(v){
                if(to) {
                    clearTimeout(to);
                }
                to = setTimeout(function () {
                    productCategory.jstree(true).search(v);
                    if(v.length == 0){
                        productCategory.show();
                    }
                }, 250);
            }
            
            
            
            http://jsfiddle.net/YEr6m/27/
            
            http://bootsnipp.com/snippets/featured/image-crop-jquery