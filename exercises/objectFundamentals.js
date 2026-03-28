const person = {
    name: "Vini",
    age: 28,
    job: "Developer",
    adresses: [
        {type: "on-site work", street: "Tancredo neves, prime work", city: "Salvador"},
        {type: "home office", street: "Faria Lima", city: "São Paulo"}
    ]  
};

// console.log(person.adresses);

for(let i = 0; i<person.adresses.length; i++){
    // console.log(person.adresses[i]);
    
};

const recipes = [];

const recipe1 = {
  name: "Spaghetti Carbonara",
  ingredients: ["spaghetti", "Parmesan cheese", "pancetta", "black pepper"],
  cookingTime: 22,
  totalIngredients: null,
  difficultyLevel: ""
};

const recipe2 = {
  name: "Chicken Curry",
  ingredients: ["chicken breast", "coconut milk", "curry powder", "onion", "garlic"],
  cookingTime: 42,
  totalIngredients: null,
  difficultyLevel: ""
};

const recipe3 = {
  name: "Vegetable Stir Fry",
  ingredients: ["broccoli", "carrot", "bell pepper"],
  cookingTime: 15,
  totalIngredients: null,
  difficultyLevel: ""
};

// const { name } = recipe1;
// const recipe1Name = name;
// console.log(recipe1Name);

const { cookingTime } = recipe2;
// const recipe2CookingTime = cookingTime;
// console.log(recipe2CookingTime);

const {ingredients} = recipe3;
// const recipe3Ingredients = ingredients;
// console.log(recipe3Ingredients);

recipes.push(recipe1);
recipes.push(recipe2);
recipes.push(recipe3);

// console.log(recipes);
function getTotalIngredients(ingredients) {
  return ingredients.length;
}
const getDifficultyLevel = (num) =>{
    if(num <= 30){return "easy"}
    else if(num > 31 && num <= 60){
        return "medium"
    } else { return "hard"}
};
// console.log(getDifficultyLevel(32));

// console.log(recipe1TotalIngredients(recipe1));

// const recipe1DifficultyLevel = (recipe) => recipe.difficultyLevel;
// console.log(recipe1DifficultyLevel(recipe1));

const recipe1TotalIngredients = getTotalIngredients(recipe1.ingredients);
console.log(recipe1TotalIngredients);

const recipe1DifficultyLevel = getDifficultyLevel(recipe1.cookingTime);
console.log(recipe1DifficultyLevel);
