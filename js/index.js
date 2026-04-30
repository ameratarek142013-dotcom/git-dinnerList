var mealList = [
  {
    image: "images/photo-1509722747041-616f39b57569.avif",
    rate: 4.8,
    rateNumber: "(178 reviews)",
    PrepTime: 10,
    CookTime: 15,
    Servings: 2,
    level: "Easy",
    type: "Italian",
    name: "Caprese Sandwich",
    description: "Fresh Italian sandwich with mozzarella, tomato, and basil",
    ingredients: [
      "1 ciabatta bread",
      "200g fresh mozzarella, sliced",
      "2 large tomatoes, sliced",
      "Fresh basil leaves",
      "3 tablespoons pesto",
      "2 tablespoons balsamic glaze",
      "Olive oil",
      "Salt and pepper",
    ],
    instructions: [
      "Slice ciabatta bread in half horizontally.",
      "Toast bread lightly until just crispy.",
      "Spread pesto on both sides of bread.",
      "Layer mozzarella slices, tomato slices, and fresh basil leaves.",
      "Drizzle with olive oil and balsamic glaze. Season with salt and pepper.",
      "Close sandwich, cut in half, and serve immediately.",
    ],
    nutrition: {
      Calories: "480Kcal",
      Carbohydrates: "48g",
      Fiber: "3g",
      Protein: "22g",
      Fat: "22g",
      Sodium: "680mg",
    },
    tips: [
      "Use ripe, in-season tomatoes for best flavor",
      "Buffalo mozzarella is traditional but harder to slice",
      "Toast bread lightly - not too crispy",
      "Add prosciutto or salami for a heartier sandwich",
    ],
  },
  {
    image: "images/photo-1568901346375-23c9450c58cd.avif",
    rate: 4.9,
    rateNumber: "(320 reviews)",
    PrepTime: 50,
    CookTime: 10,
    Servings: 1,
    level: "Easy",
    type: "American",
    name: "Classic Beef Burger",
    description: "Juicy homemade beef patty with cheddar and secret sauce",
    ingredients: [
      "200g ground beef",
      "1 brioche bun",
      "1 slice cheddar cheese",
      "Lettuce leaves",
      "2 slices tomato",
      "Pickles",
      "1 tbsp burger sauce",
    ],
    instructions: [
      "Shape beef into a patty and season with salt.",
      "Grill patty for 4-5 mins per side.",
      "Melt cheese on top during last minute.",
      "Toast bun and assemble with vegetables and sauce.",
      "Served with burger sauce",
    ],
    nutrition: {
      Calories: "650Kcal",
      Carbohydrates: "35g",
      Fiber: "2g",
      Protein: "34g",
      Fat: "42g",
      Sodium: "850mg",
    },
    tips: [
      "Don't overwork the meat to keep it tender",
      "Let the patty rest for 2 mins before serving",
    ],
  },
  {
    image: "images/photo-1546793665-c74683f339c1.avif",
    rate: 4.7,
    rateNumber: "(215 reviews)",
    PrepTime: 20,
    CookTime: 10,
    Servings: 2,
    level: "Medium",
    type: "American/Mexican",
    name: "Chicken Caesar Salad",
    description:
      "Crispy romaine lettuce topped with grilled chicken and parmesan",
    ingredients: [
      "2 chicken breasts",
      "1 head romaine lettuce",
      "1/2 cup croutons",
      "1/4 cup parmesan shavings",
      "Caesar dressing",
      "Black pepper",
    ],
    instructions: [
      "Season and grill chicken until cooked through.",
      "Chop lettuce and place in a large bowl.",
      "Slice chicken into strips.",
      "Toss lettuce with dressing, top with chicken, croutons, and cheese.",
      "Served with caeser sauce",
    ],
    nutrition: {
      Calories: "420Kcal",
      Carbohydrates: "15g",
      Fiber: "4g",
      Protein: "38g",
      Fat: "24g",
      Sodium: "710mg",
    },
    tips: [
      "Make your own croutons for extra crunch",
      "Use cold lettuce for better texture",
    ],
  },
  {
    image: "images/Shrimp-Scampi-Alfredo-1.jpg",
    rate: 4.8,
    rateNumber: "(150 reviews)",
    PrepTime: 10,
    CookTime: 12,
    Servings: 2,
    level: "Medium",
    type: "Italian",
    name: "Shrimp Scampi",
    description: "Garlic butter shrimp served over a bed of linguine",
    ingredients: [
      "250g linguine",
      "300g large shrimp, peeled",
      "4 cloves garlic, minced",
      "2 tbsp butter",
      "1 tbsp lemon juice",
      "Fresh parsley",
      "Red pepper flakes",
    ],
    instructions: [
      "Boil pasta according to package directions.",
      "Sauté garlic and red pepper flakes in butter.",
      "Add shrimp and cook until pink (3-4 mins).",
      "Toss pasta with shrimp, lemon juice, and parsley.",
    ],
    nutrition: {
      Calories: "540Kcal",
      Carbohydrates: "62g",
      Fiber: "3g",
      Protein: "28g",
      Fat: "18g",
      Sodium: "590mg",
    },
    tips: [
      "Save some pasta water to loosen the sauce",
      "Do not overcook the shrimp",
      "Do not overcook the pasta",
    ],
  },
  {
    image: "images/vegan-mushroom-risotto-close.jpg",
    rate: 4.6,
    rateNumber: "(95 reviews)",
    PrepTime: 10,
    CookTime: 30,
    Servings: 3,
    level: "Hard",
    type: "Italian",
    name: "Mushroom Risotto",
    description: "Creamy arborio rice with earthy wild mushrooms",
    ingredients: [
      "1.5 cups arborio rice",
      "400g mushrooms, sliced",
      "1L vegetable broth",
      "1 onion, finely diced",
      "1/2 cup parmesan",
      "2 tbsp butter",
      "Thyme",
    ],
    instructions: [
      "Sauté mushrooms until brown, then set aside.",
      "Cook onion in butter, add rice and toast slightly.",
      "Add broth one ladle at a time, stirring constantly.",
      "When rice is creamy, stir in cheese, and thyme.",
      "When rice is creamy, stir in mushrooms.",
    ],
    nutrition: {
      Calories: "380Kcal",
      Carbohydrates: "55g",
      Fiber: "2g",
      Protein: "10g",
      Fat: "14g",
      Sodium: "820mg",
    },
    tips: [
      "Broth must be hot when adding to rice",
      "Stirring is the secret to the creamy texture",
      "Do not overcook the Rice",
    ],
  },
  {
    image: "images/carne-asada-tacos.jpg",
    rate: 4.9,
    rateNumber: "(410 reviews)",
    PrepTime: 15,
    CookTime: 15,
    Servings: 4,
    level: "Easy",
    type: "Mexican",
    name: "Beef Street Tacos",
    description:
      "Authentic corn tortillas filled with seasoned beef and cilantro",
    ingredients: [
      "500g flank steak, diced",
      "8 small corn tortillas",
      "1 white onion, diced",
      "Fresh cilantro",
      "Lime wedges",
      "Taco seasoning",
    ],
    instructions: [
      "Season beef and sear in a hot pan until charred.",
      "Warm tortillas on a griddle.",
      "Fill tortillas with beef, onion, and cilantro.",
      "Serve with a squeeze of lime.",
    ],
    nutrition: {
      Calories: "320Kcal",
      Carbohydrates: "22g",
      Fiber: "4g",
      Protein: "26g",
      Fat: "14g",
      Sodium: "450mg",
    },
    tips: [
      "Char the tortillas slightly for better flavor",
      "Use a high-heat oil like avocado oil",
    ],
  },
  {
    image: "images/photo-1546069901-ba9599a7e63c.avif",
    rate: 4.5,
    rateNumber: "(120 reviews)",
    PrepTime: 15,
    CookTime: 8,
    Servings: 2,
    level: "Easy",
    type: "Asian",
    name: "Vegetable Stir Fry",
    description: "Quick and colorful vegetable medley in a ginger-soy sauce",
    ingredients: [
      "1 broccoli head",
      "2 carrots, julienned",
      "1 bell pepper, sliced",
      "2 tbsp soy sauce",
      "1 tbsp ginger, grated",
      "1 tbsp sesame oil",
      "Sesame seeds",
    ],
    instructions: [
      "Heat oil in a wok or large pan.",
      "Add vegetables and stir fry on high heat for 5 mins.",
      "Add ginger and soy sauce, cook for 2 more mins.",
      "Garnish with sesame seeds and serve with rice.",
      "Serve with a sauce",
    ],
    nutrition: {
      Calories: "210Kcal",
      Carbohydrates: "28g",
      Fiber: "8g",
      Protein: "6g",
      Fat: "9g",
      Sodium: "920mg",
    },
    tips: [
      "Cut all veggies to the same size for even cooking",
      "Don't overcrowd the pan",
    ],
  },
  {
    image: "images/photo-1467003909585-2f8a72700288.avif",
    rate: 4.8,
    rateNumber: "(185 reviews)",
    PrepTime: 30,
    CookTime: 15,
    Servings: 2,
    level: "Easy",
    type: "Healthy",
    name: "Lemon Butter Salmon",
    description: "Baked salmon fillets with fresh asparagus and lemon",
    ingredients: [
      "2 salmon fillets",
      "1 bunch asparagus",
      "2 tbsp butter",
      "1 lemon, sliced",
      "2 cloves garlic, minced",
      "Salt and pepper",
    ],
    instructions: [
      "Place salmon and asparagus on a baking sheet.",
      "Top with butter, garlic, and lemon slices.",
      "Bake at 200°C for 12-15 mins.",
      "Season with salt and pepper to taste.",
    ],
    nutrition: {
      Calories: "450Kcal",
      Carbohydrates: "6g",
      Fiber: "3g",
      Protein: "34g",
      Fat: "32g",
      Sodium: "310mg",
    },
    tips: [
      "Line the tray with foil for easy cleanup",
      "Salmon is done when it flakes easily with a fork",
    ],
  },
  {
    image: "images/photo-1574894709920-11b28e7367e3.avif",
    rate: 4.7,
    rateNumber: "(88 reviews)",
    PrepTime: 20,
    CookTime: 30,
    Servings: 6,
    level: "Hard",
    type: "Greek",
    name: "Traditional Moussaka",
    description: "Layered eggplant and spiced meat bake with bechamel sauce",
    ingredients: [
      "2 large eggplants",
      "500g ground lamb",
      "1 onion",
      "2 cups bechamel sauce",
      "1/2 cup tomato puree",
      "Cinnamon",
      "Oregano",
    ],
    instructions: [
      "Slice and roast eggplants until soft.",
      "Cook lamb with onion, tomato, and spices.",
      "Layer eggplants and meat in a dish.",
      "Top with bechamel and bake until golden.",
    ],
    nutrition: {
      Calories: "520Kcal",
      Carbohydrates: "30g",
      Fiber: "7g",
      Protein: "28g",
      Fat: "36g",
      Sodium: "640mg",
    },
    tips: [
      "Salt the eggplants first to remove bitterness",
      "Let it rest for 20 mins after baking to set",
    ],
  },
  {
    image: "images/shakshoukaaaaaaaaaaaa.jpg",
    rate: 4.9,
    rateNumber: "(305 reviews)",
    PrepTime: 10,
    CookTime: 20,
    Servings: 3,
    level: "Medium",
    type: "Middle Eastern",
    name: "Classic Shakshuka",
    description: "Poached eggs in a spicy tomato and pepper sauce",
    ingredients: [
      "4 eggs",
      "1 can diced tomatoes",
      "1 bell pepper",
      "2 cloves garlic",
      "1 tbsp tomato paste",
      "Cumin",
      "Paprika",
      "Fresh parsley",
    ],
    instructions: [
      "Sauté pepper and garlic until soft.",
      "Add tomatoes, paste, and spices; simmer for 10 mins.",
      "Make small wells and crack eggs into the sauce.",
      "Cover and cook until egg whites are set.",
      "Serve with bread",
    ],
    nutrition: {
      Calories: "240Kcal",
      Carbohydrates: "14g",
      Fiber: "4g",
      Protein: "13g",
      Fat: "15g",
      Sodium: "520mg",
    },
    tips: [
      "Serve with warm pita bread for dipping",
      "Keep the yolks runny for the best experience",
    ],
  },
  {
    image: "images/light-fluffy-pancakes.webp",
    rate: 4.8,
    rateNumber: "(512 reviews)",
    PrepTime: 10,
    CookTime: 15,
    Servings: 4,
    level: "Easy",
    type: "Breakfast",
    name: "Fluffy Buttermilk Pancakes",
    description: "Thick, soft pancakes served with maple syrup and berries",
    ingredients: [
      "2 cups flour",
      "2 tbsp sugar",
      "2 tsp baking powder",
      "1.5 cups buttermilk",
      "1 egg",
      "Butter",
      "Fresh berries",
    ],
    instructions: [
      "Whisk dry and wet ingredients separately, then combine.",
      "Heat a buttered griddle over medium heat.",
      "Pour batter and flip when bubbles appear.",
      "Serve hot with syrup and berries.",
      "Serve with choclate sauce or any favourit sauce",
      "Serve with coffe or tea ",
    ],
    nutrition: {
      Calories: "350Kcal",
      Carbohydrates: "58g",
      Fiber: "2g",
      Protein: "9g",
      Fat: "10g",
      Sodium: "480mg",
    },
    tips: [
      "Do not overmix the batter; lumps are okay",
      "Use a non-stick pan for perfect golden circles",
    ],
  },
  {
    image: "images/chicken-pad-thai-9.jpg",
    rate: 4.7,
    rateNumber: "(270 reviews)",
    PrepTime: 40,
    CookTime: 10,
    Servings: 2,
    level: "Medium",
    type: "Thai",
    name: "Chicken Pad Thai",
    description: "Classic Thai rice noodles with peanuts and bean sprouts",
    ingredients: [
      "150g rice noodles",
      "200g chicken strips",
      "2 eggs",
      "2 tbsp pad thai sauce",
      "1/4 cup crushed peanuts",
      "Bean sprouts",
      "Lime",
    ],
    instructions: [
      "Soak noodles in warm water until soft.",
      "Stir fry chicken, then push aside and scramble eggs.",
      "Add noodles and sauce, toss until coated.",
      "Top with peanuts, sprouts, and a squeeze of lime.",
    ],
    nutrition: {
      Calories: "510Kcal",
      Carbohydrates: "65g",
      Fiber: "3g",
      Protein: "26g",
      Fat: "18g",
      Sodium: "980mg",
    },
    tips: [
      "Use tamarind paste for an authentic tangy flavor",
      "Wok should be very hot",
    ],
  },
  {
    image: "images/falafel-wrap-2.jpg",
    rate: 4.6,
    rateNumber: "(140 reviews)",
    PrepTime: 15,
    CookTime: 10,
    Servings: 2,
    level: "Medium",
    type: "Middle Eastern",
    name: "Falafel Wrap",
    description: "Crispy chickpea fritters in a soft tortilla with tahini",
    ingredients: [
      "6 falafel balls",
      "2 large tortillas",
      "Hummus",
      "Cucumber and tomato salad",
      "Pickled turnips",
      "Tahini sauce",
    ],
    instructions: [
      "Warm the tortillas and spread a layer of hummus.",
      "Place 3 falafels in each and crush slightly.",
      "Add salad and pickles.",
      "Drizzle with tahini, wrap tightly, and serve.",
    ],
    nutrition: {
      Calories: "420Kcal",
      Carbohydrates: "52g",
      Fiber: "9g",
      Protein: "14g",
      Fat: "18g",
      Sodium: "610mg",
    },
    tips: [
      "Toast the wrap on a pan for a minute to seal it",
      "Use fresh parsley in the salad",
    ],
  },
  {
    image: "images/Bistro-Style-Steak-Frites_LowRes-013.jpg",
    rate: 4.9,
    rateNumber: "(195 reviews)",
    PrepTime: 10,
    CookTime: 20,
    Servings: 1,
    level: "Medium",
    type: "French",
    name: "Steak Frites",
    description: "Pan-seared ribeye steak served with crispy golden fries",
    ingredients: [
      "300g ribeye steak",
      "200g frozen fries",
      "1 tbsp butter",
      "2 cloves garlic",
      "Rosemary",
      "Salt and pepper",
    ],
    instructions: [
      "Cook fries in an air fryer or oil until crispy.",
      "Season steak and sear in a hot pan (3 mins per side).",
      "Baste with butter, garlic, and rosemary.",
      "Let steak rest for 5 mins before slicing.",
    ],
    nutrition: {
      Calories: "820Kcal",
      Carbohydrates: "38g",
      Fiber: "3g",
      Protein: "45g",
      Fat: "54g",
      Sodium: "720mg",
    },
    tips: [
      "Ensure the steak is at room temperature before cooking",
      "Use sea salt for finishing",
    ],
  },
  {
    image: "images/photo-1574071318508-1cdbab80d002.avif",
    rate: 4.8,
    rateNumber: "(540 reviews)",
    PrepTime: 60,
    CookTime: 10,
    Servings: 2,
    level: "Hard",
    type: "Italian",
    name: "Pizza Margherita",
    description:
      "Authentic thin-crust pizza with tomato, basil, and mozzarella",
    ingredients: [
      "250g pizza dough",
      "1/2 cup tomato sauce",
      "150g fresh mozzarella",
      "Fresh basil",
      "Extra virgin olive oil",
    ],
    instructions: [
      "Stretch dough into a thin circle.",
      "Spread sauce and top with torn mozzarella.",
      "Bake at max oven temp (250°C+) until charred.",
      "Add fresh basil and oil after baking.",
    ],
    nutrition: {
      Calories: "600Kcal",
      Carbohydrates: "75g",
      Fiber: "4g",
      Protein: "24g",
      Fat: "22g",
      Sodium: "950mg",
    },
    tips: [
      "Use a pizza stone for a crispier bottom",
      "Don't use too much sauce to avoid sogginess",
    ],
  },
  {
    image: "images/lentil-soup-5.jpg",
    rate: 4.5,
    rateNumber: "(110 reviews)",
    PrepTime: 10,
    CookTime: 30,
    Servings: 4,
    level: "Easy",
    type: "Mediterranean",
    name: "Hearty Lentil Soup",
    description: "Warm and comforting red lentil soup with cumin and lemon",
    ingredients: [
      "1 cup red lentils",
      "1 onion, chopped",
      "1 carrot, diced",
      "1.5L vegetable stock",
      "1 tsp cumin",
      "Lemon juice",
      "Olive oil",
    ],
    instructions: [
      "Sauté onion and carrot in olive oil.",
      "Add lentils, stock, and cumin.",
      "Simmer for 20-25 mins until lentils are soft.",
      "Blend until smooth (optional) and add lemon.",
    ],
    nutrition: {
      Calories: "210Kcal",
      Carbohydrates: "32g",
      Fiber: "12g",
      Protein: "14g",
      Fat: "4g",
      Sodium: "480mg",
    },
    tips: [
      "Serve with a piece of crusty bread",
      "A pinch of chili flakes adds a nice kick",
    ],
  },
];

display();

function changeMeal() {
  display();
  scrollTop()
}

function display() {
  var box = "";
  var randomIndex = Math.floor(Math.random() * mealList.length);

  for (var i = 0; i < mealList.length; i++) {
    if (i === randomIndex) {
      var perparingTime = mealList[i].CookTime + mealList[i].PrepTime;
      if (perparingTime >= 45) {
        box += ` <div class="card mt-2 mb-5 rounded-4 shadow border border-1 border-color ">
            <figure class="position-relative">
              <div class="top py-2 px-3 rounded-pill position-absolute bg-white mt-4 ms-4">
                <i class="fa-solid fa-star fs-14 text-warning"></i>
                <span class="fs-14 fw-semibold">${mealList[i].rate}</span>
                <span class="fs-12 text-secondary">${mealList[i].rateNumber}</span>
              </div>
              <img src="${mealList[i].image}"
                class="card-img-top rounded-top-4 h-100 object-fit-cover" alt="food" />
              <div class="bottom py-2 px-2 bg-white rounded-4 position-absolute bottom-0 row w-90 ms-4 mb-4">
                <div class="text-center col-4">
                  <i class="fa-solid fa-clock text-orange"></i>
                  <p class="fs-12 text-secondary m-0">Prep Time</p>
                  <p class="fs-14 fw-bold m-0">${mealList[i].PrepTime} min</p>
                </div>
                <div class="text-center col-4">
                  <i class="fa-solid fa-fire-burner text-danger"></i>
                  <p class="fs-12 text-secondary m-0">Cook Time</p>
                  <p class="fs-14 fw-bold m-0">${mealList[i].CookTime} min</p>
                </div>
                <div class="text-center col-4">
                  <i class="fa-solid fa-users text-primary"></i>
                  <p class="fs-12 text-secondary m-0">Servings</p>
                  <p class="fs-14 fw-bold m-0">${mealList[i].Servings} people</p>
                </div>
              </div>
            </figure>
            <div class="card-body p-lg-4 overflow-y-auto">
              <div class="header d-flex flex-column-reverse">
                <div class="part1">
                  <span class="text-success bg-success-subtle px-3 py-1 rounded-pill fs-12 fw-bold me-2">${mealList[i].level}</span>
                  <span class="text-primary bg-primary-subtle px-3 py-1 rounded-pill fs-12 fw-bold">${mealList[i].type}</span>
                  <h2 class="fs-4 fw-bold mt-3">${mealList[i].name}</h2>
                  <p class="text-secondary fs-14">${mealList[i].description}</p>
                </div>
                <div class="part2 d-flex justify-content-end gap-2 mb-4 mb-lg-0">
                  <i class="fa-solid fa-bookmark p-3 rounded-3 bg-lorange text-orange"></i>
                  <i class="fa-solid fa-share-nodes p-3 rounded-3 bg-lorange text-orange "></i>
                </div>
              </div>
              <div
                class="danger p-3 d-flex align-items-center gap-3 bg-red rounded-3 border-start border-4 border-danger">

                <i class="fa-solid fa-warning text-red fs-4  "></i>
                <div>
                  <h6 class="fs-14 fw-bold text-dred m-0">Extended Preparation Time</h6>
                  <p class="fs-12 text-red m-0">This recipe requires more than 45 minutes to prepare. Plan accordingly!
                  </p>
                </div>
              </div>
              <div class="details ">
                <ul class="nav nav-tabs nav-underline justify-content-center my-3 m-0 flex-nowrap px-2 " id="myTab"
                  role="tablist">
                  <li class="nav-item " role="presentation">
                    <button class="nav-link active text-secondary fw-bold py-3 px-4 fs-12 my-3 " id="buying-tab"
                      data-bs-toggle="tab" data-bs-target="#buying-tab-pane" type="button" role="tab"
                      aria-controls="buying-tab-pane" aria-selected="true"><i
                        class="fa-solid fa-list-check me-1 me-lg-2"></i>Ingredients</button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button class="nav-link text-secondary fw-bold py-3 px-4 fs-12 my-3 " id="selling-tab"
                      data-bs-toggle="tab" data-bs-target="#selling-tab-pane" type="button" role="tab"
                      aria-controls="selling-tab-pane" aria-selected="false"><i
                        class="fa-solid fa-book-open me-1 me-lg-2"></i>Instructions</button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button class="nav-link text-secondary fw-bold py-3 px-4 fs-12 my-3" id="renting-tab"
                      data-bs-toggle="tab" data-bs-target="#renting-tab-pane" type="button" role="tab"
                      aria-controls="renting-tab-pane" aria-selected="false"><i
                        class="fa-solid fa-chart-pie me-1 me-lg-2"></i>Nutrition</button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button class="nav-link text-secondary fw-bold py-3 px-4 fs-12 my-3" id="investing-tab"
                      data-bs-toggle="tab" data-bs-target="#investing-tab-pane" type="button" role="tab"
                      aria-controls="investing-tab-pane" aria-selected="false"><i
                        class="fa-solid fa-lightbulb me-1 me-lg-2"></i>Chef's Tips</button>
                  </li>

                </ul>
                <div class="tab-content" id="myTabContent">
                  <div class="tab-pane fade show active mt-4" id="buying-tab-pane" " style="height: 350px;" role="tabpanel"
                    aria-labelledby="buying-tab" tabindex="0">

                    <div class="rounded-4 meal p-4">
                      ${(function () {
                        var ingredientsBox = "";
                        for (
                          var j = 0;
                          j < mealList[i].ingredients.length;
                          j++
                        ) {
                          ingredientsBox += `
                            <div class="d-flex align-items-center gap-2 mb-3">
                                <span class="text-white px-2 rounded-circle bg-orange fw-bold">${j + 1}</span>
                                <p class="text-secondary m-0">${mealList[i].ingredients[j]}</p>
                            </div>`;
                        }
                        return ingredientsBox;
                      })()}
                    

                    </div>

                  </div>
                  <div class="tab-pane fade overflow-y-auto mt-4" style="height: 350px;" id="selling-tab-pane"
                    role="tabpanel" aria-labelledby="selling-tab" tabindex="0">

                    <div class="rounded-4 ">
                    ${(function () {
                      var instructionsBox = "";
                      for (
                        var j = 0;
                        j < mealList[i].instructions.length;
                        j++
                      ) {
                        instructionsBox += `<div class="d-flex align-items-center gap-3 mb-4">
                                <span class="text-white px-3 py-2 rounded-4 bg-orange fw-bold fs-4">${j + 1}</span>
                                <p class="text-secondary m-0">${mealList[i].instructions[j]}</p>
                            </div>`;
                      }
                      return instructionsBox;
                    })()}
                      
                      


                    </div>

                  </div>
                  <div class="tab-pane fade mt-4 overflow-y-auto overflow-x-hidden" id="renting-tab-pane" role="tabpanel" " style="height: 350px;" aria-labelledby="renting-tab"
                    tabindex="0">

                    <div>
                      <div class="row g-3">
                        <div class="col-lg-6">
                          <div class="health inner">
                            <div class="d-flex justify-content-between p-4 rounded-4 bg-gray mb-3  align-items-center">
                              <div class="d-flex align-items-center gap-3">
                                <i class="fa-solid fa-fire bg-lorange text-orange p-2 rounded-3 p-iconn"></i>
                                <span class="text-secondary fw-semibold fs-12">Calories</span>
                              </div>
                              <span class=" fw-bold">${mealList[i].nutrition.Calories}</span>
                            </div>
                            <div class="d-flex justify-content-between p-4 rounded-4 bg-gray mb-3 align-items-center">
                              <div class="d-flex align-items-center gap-3">
                                <i
                                  class="fa-solid fa-wheat-awn bg-warning-subtle text-warning p-2 rounded-3 p-iconn"></i>
                                <span class="text-secondary fw-semibold fs-12">Carbohydrates</span>
                              </div>
                              <span class=" fw-bold">${mealList[i].nutrition.Carbohydrates}</span>
                            </div>
                            <div class="d-flex justify-content-between p-4 rounded-4 bg-gray align-items-center">
                              <div class="d-flex align-items-center gap-3">
                                <i
                                  class="fa-solid fa-seedling  bg-success-subtle text-success p-2 rounded-3 p-iconn"></i>
                                <span class="text-secondary fw-semibold fs-12">Fiber</span>
                              </div>
                              <span class=" fw-bold">${mealList[i].nutrition.Fiber}</span>
                            </div>
                          </div>

                        </div>
                        <div class="col-lg-6">
                          <div class="health inner">
                            <div class="d-flex justify-content-between p-4 rounded-4 bg-gray mb-3  align-items-center">
                              <div class="d-flex align-items-center gap-3">
                                <i
                                  class="fa-solid fa-dumbbell bg-primary-subtle text-primary p-2 rounded-3 p-iconn"></i>
                                <span class="text-secondary fw-semibold fs-12">Protein</span>
                              </div>
                              <span class=" fw-bold">${mealList[i].nutrition.Protein}</span>
                            </div>
                            <div class="d-flex justify-content-between p-4 rounded-4 bg-gray mb-3 align-items-center">
                              <div class="d-flex align-items-center gap-3">
                                <i class="fa-solid fa-droplet bg-danger-subtle text-danger p-2 rounded-3 p-iconn"></i>
                                <span class="text-secondary fw-semibold fs-12">Fat</span>
                              </div>
                              <span class=" fw-bold">${mealList[i].nutrition.Fat}</span>
                            </div>
                            <div class="d-flex justify-content-between p-4 rounded-4 bg-gray align-items-center">
                              <div class="d-flex align-items-center gap-3">
                                <i class="fa-solid fa-cube bg-pink text-pink p-2 rounded-3 p-iconn"></i>
                                <span class="text-secondary fw-semibold fs-12">Sodium</span>
                              </div>
                              <span class=" fw-bold">${mealList[i].nutrition.Sodium}</span>
                            </div>
                          </div>

                        </div>

                      </div>
                    </div>

                  </div>
                  <div class="tab-pane fade mt-4" id="investing-tab-pane" role="tabpanel" " style="height: 350px;" aria-labelledby="investing-tab"
                    tabindex="0">
                   ${(function () {
                     var boxTips = "";
                     for (var x = 0; x < mealList[i].tips.length; x++) {
                       boxTips += `<div class="meal rounded-4 border-start border-4 border-warning-subtle p-4 mb-3">
                <div class="d-flex align-items-center gap-2">
                    <i class="fa-solid fa-check text-white p-1 rounded-circle fs-12 fw-bold" style="background-color: #ffc107;"></i>
                    <p class="m-0 text-secondary-emphasis">${mealList[i].tips[x]}</p>
                </div>
            </div>`;
                     }
                     return boxTips;
                   })()}




                  </div>


                </div>
              </div>
              <hr class="mt-5">
              <button onclick="changeMeal()" class="button btn btn-danger my-2 fw-semibold fs-14"><i
                  class="fa-solid fa-arrows-rotate me-2"></i>Tray Another Recipe</button>

            </div>
          </div>`;
      } else {
        box += ` <div class="card mt-2 mb-5 rounded-4 shadow border border-1 border-color ">
            <figure class="position-relative">
              <div class="top py-2 px-3 rounded-pill position-absolute bg-white mt-4 ms-4">
                <i class="fa-solid fa-star fs-14 text-warning"></i>
                <span class="fs-14 fw-semibold">${mealList[i].rate}</span>
                <span class="fs-12 text-secondary">${mealList[i].rateNumber}</span>
              </div>
              <img src="${mealList[i].image}"
                class="card-img-top rounded-top-4 h-100 object-fit-cover" alt="food" />
              <div class="bottom py-2 px-2 bg-white rounded-4 position-absolute bottom-0 row w-90 ms-4 mb-4">
                <div class="text-center col-4">
                  <i class="fa-solid fa-clock text-orange"></i>
                  <p class="fs-12 text-secondary m-0">Prep Time</p>
                  <p class="fs-14 fw-bold m-0">${mealList[i].PrepTime} min</p>
                </div>
                <div class="text-center col-4">
                  <i class="fa-solid fa-fire-burner text-danger"></i>
                  <p class="fs-12 text-secondary m-0">Cook Time</p>
                  <p class="fs-14 fw-bold m-0">${mealList[i].CookTime} min</p>
                </div>
                <div class="text-center col-4">
                  <i class="fa-solid fa-users text-primary"></i>
                  <p class="fs-12 text-secondary m-0">Servings</p>
                  <p class="fs-14 fw-bold m-0">${mealList[i].Servings} people</p>
                </div>
              </div>
            </figure>
            <div class="card-body p-lg-4 overflow-y-auto">
              <div class="header d-flex flex-column-reverse">
                <div class="part1">
                  <span class="text-success bg-success-subtle px-3 py-1 rounded-pill fs-12 fw-bold me-2">${mealList[i].level}</span>
                  <span class="text-primary bg-primary-subtle px-3 py-1 rounded-pill fs-12 fw-bold">${mealList[i].type}</span>
                  <h2 class="fs-4 fw-bold mt-3">${mealList[i].name}</h2>
                  <p class="text-secondary fs-14">${mealList[i].description}</p>
                </div>
                <div class="part2 d-flex justify-content-end gap-2 mb-4 mb-lg-0">
                  <i class="fa-solid fa-bookmark p-3 rounded-3 bg-lorange text-orange"></i>
                  <i class="fa-solid fa-share-nodes p-3 rounded-3 bg-lorange text-orange "></i>
                </div>
              </div>
             
              <div class="details ">
                <ul class="nav nav-tabs nav-underline justify-content-center my-2 m-0 flex-nowrap px-2 " id="myTab"
                  role="tablist">
                  <li class="nav-item " role="presentation">
                    <button class="nav-link active text-secondary fw-bold py-3 px-4 fs-12 my-3 " id="buying-tab"
                      data-bs-toggle="tab" data-bs-target="#buying-tab-pane" type="button" role="tab"
                      aria-controls="buying-tab-pane" aria-selected="true"><i
                        class="fa-solid fa-list-check me-1 me-lg-2"></i>Ingredients</button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button class="nav-link text-secondary fw-bold py-3 px-4 fs-12 my-3 " id="selling-tab"
                      data-bs-toggle="tab" data-bs-target="#selling-tab-pane" type="button" role="tab"
                      aria-controls="selling-tab-pane" aria-selected="false"><i
                        class="fa-solid fa-book-open me-1 me-lg-2"></i>Instructions</button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button class="nav-link text-secondary fw-bold py-3 px-4 fs-12 my-3" id="renting-tab"
                      data-bs-toggle="tab" data-bs-target="#renting-tab-pane" type="button" role="tab"
                      aria-controls="renting-tab-pane" aria-selected="false"><i
                        class="fa-solid fa-chart-pie me-1 me-lg-2"></i>Nutrition</button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button class="nav-link text-secondary fw-bold py-3 px-4 fs-12 my-3" id="investing-tab"
                      data-bs-toggle="tab" data-bs-target="#investing-tab-pane" type="button" role="tab"
                      aria-controls="investing-tab-pane" aria-selected="false"><i
                        class="fa-solid fa-lightbulb me-1 me-lg-2"></i>Chef's Tips</button>
                  </li>

                </ul>
                <div class="tab-content" id="myTabContent">
                  <div class="tab-pane fade show active mt-4" id="buying-tab-pane"  " style="height: 350px;" role="tabpanel"
                    aria-labelledby="buying-tab" tabindex="0">

                    <div class="rounded-4 meal p-4">
                      ${(function () {
                        var ingredientsBox = "";
                        for (
                          var j = 0;
                          j < mealList[i].ingredients.length;
                          j++
                        ) {
                          ingredientsBox += `
                            <div class="d-flex align-items-center gap-2 mb-3">
                                <span class="text-white px-2 rounded-circle bg-orange fw-bold">${j + 1}</span>
                                <p class="text-secondary m-0">${mealList[i].ingredients[j]}</p>
                            </div>`;
                        }
                        return ingredientsBox;
                      })()}
                    

                    </div>

                  </div>
                  <div class="tab-pane fade overflow-y-auto mt-4 " style="height: 350px;" id="selling-tab-pane"
                    role="tabpanel" aria-labelledby="selling-tab" tabindex="0">

                    <div class="rounded-4 ">
                    ${(function () {
                      var instructionsBox = "";
                      for (
                        var j = 0;
                        j < mealList[i].instructions.length;
                        j++
                      ) {
                        instructionsBox += `<div class="d-flex align-items-center gap-3 mb-4">
                                <span class="text-white px-3 py-2 rounded-4 bg-orange fw-bold fs-4">${j + 1}</span>
                                <p class="text-secondary m-0">${mealList[i].instructions[j]}</p>
                            </div>`;
                      }
                      return instructionsBox;
                    })()}
                      
                      


                    </div>

                  </div>
                  <div class="tab-pane fade mt-4 overflow-y-auto overflow-x-hidden" id="renting-tab-pane" role="tabpanel" " style="height: 350px;" aria-labelledby="renting-tab"
                    tabindex="0">

                    <div>
                      <div class="row g-3">
                        <div class="col-lg-6">
                          <div class="health inner">
                            <div class="d-flex justify-content-between p-4 rounded-4 bg-gray mb-3  align-items-center">
                              <div class="d-flex align-items-center gap-3">
                                <i class="fa-solid fa-fire bg-lorange text-orange p-2 rounded-3 p-iconn"></i>
                                <span class="text-secondary fw-semibold fs-12">Calories</span>
                              </div>
                              <span class=" fw-bold">${mealList[i].nutrition.Calories}</span>
                            </div>
                            <div class="d-flex justify-content-between p-4 rounded-4 bg-gray mb-3 align-items-center">
                              <div class="d-flex align-items-center gap-3">
                                <i
                                  class="fa-solid fa-wheat-awn bg-warning-subtle text-warning p-2 rounded-3 p-iconn"></i>
                                <span class="text-secondary fw-semibold fs-12">Carbohydrates</span>
                              </div>
                              <span class=" fw-bold">${mealList[i].nutrition.Carbohydrates}</span>
                            </div>
                            <div class="d-flex justify-content-between p-4 rounded-4 bg-gray align-items-center">
                              <div class="d-flex align-items-center gap-3">
                                <i
                                  class="fa-solid fa-seedling  bg-success-subtle text-success p-2 rounded-3 p-iconn"></i>
                                <span class="text-secondary fw-semibold fs-12">Fiber</span>
                              </div>
                              <span class=" fw-bold">${mealList[i].nutrition.Fiber}</span>
                            </div>
                          </div>

                        </div>
                        <div class="col-lg-6">
                          <div class="health inner">
                            <div class="d-flex justify-content-between p-4 rounded-4 bg-gray mb-3  align-items-center">
                              <div class="d-flex align-items-center gap-3">
                                <i
                                  class="fa-solid fa-dumbbell bg-primary-subtle text-primary p-2 rounded-3 p-iconn"></i>
                                <span class="text-secondary fw-semibold fs-12">Protein</span>
                              </div>
                              <span class=" fw-bold">${mealList[i].nutrition.Protein}</span>
                            </div>
                            <div class="d-flex justify-content-between p-4 rounded-4 bg-gray mb-3 align-items-center">
                              <div class="d-flex align-items-center gap-3">
                                <i class="fa-solid fa-droplet bg-danger-subtle text-danger p-2 rounded-3 p-iconn"></i>
                                <span class="text-secondary fw-semibold fs-12">Fat</span>
                              </div>
                              <span class=" fw-bold">${mealList[i].nutrition.Fat}</span>
                            </div>
                            <div class="d-flex justify-content-between p-4 rounded-4 bg-gray align-items-center">
                              <div class="d-flex align-items-center gap-3">
                                <i class="fa-solid fa-cube bg-pink text-pink p-2 rounded-3 p-iconn"></i>
                                <span class="text-secondary fw-semibold fs-12">Sodium</span>
                              </div>
                              <span class=" fw-bold">${mealList[i].nutrition.Sodium}</span>
                            </div>
                          </div>

                        </div>

                      </div>
                    </div>

                  </div>
                  <div class="tab-pane fade mt-4" id="investing-tab-pane" role="tabpanel" " style="height: 350px;" aria-labelledby="investing-tab"
                    tabindex="0">
                   ${(function () {
                     var boxTips = "";
                     for (var x = 0; x < mealList[i].tips.length; x++) {
                       boxTips += `<div class="meal rounded-4 border-start border-4 border-warning-subtle p-4 mb-3">
                <div class="d-flex align-items-center gap-2">
                    <i class="fa-solid fa-check text-white p-1 rounded-circle fs-12 fw-bold" style="background-color: #ffc107;"></i>
                    <p class="m-0 text-secondary-emphasis">${mealList[i].tips[x]}</p>
                </div>
            </div>`;
                     }
                     return boxTips;
                   })()}




                  </div>


                </div>
              </div>
              <hr class="mt-5">
              <button onclick="changeMeal()" class="button btn btn-danger my-2 fw-semibold fs-14"><i
                  class="fa-solid fa-arrows-rotate me-2"></i>Tray Another Recipe</button>

            </div>
          </div>`;
      }
    }
  }

  document.getElementById("innerData").innerHTML = box;
}

function scrollTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
