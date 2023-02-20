const mealEnum = Object.freeze({
  hot: 'prato quente',
  salad: 'salada',
  sandwich: 'sanduíche',
  soup: 'sopa'
})

const mealContainer = document.getElementById('meal-container')
const loading = document.getElementById('loading')
const mealName = document.getElementById('meal-name')
const ingredientsLabel = document.getElementById('ingredients-label')
const ingredientsList = document.getElementById('ingredients-list')
const generateMealButton = document.getElementById('generate-meal-button')
const mealTypeFilter = document.getElementById('meal-type-filter')
const searchField = document.getElementById('search-field')
const searchButton = document.querySelector('#search-container button[type="submit"]')

// eslint-disable-next-line no-undef
let filteredMeals = [...meals]

mealTypeFilter.addEventListener('change', e => {
  const selectedType = e.target.value
  if (selectedType === 'all') {
    // eslint-disable-next-line no-undef
    filteredMeals = [...meals]
    generateMeal()
  } else {
    // eslint-disable-next-line no-undef
    filteredMeals = meals.filter(meal => meal.type === selectedType)
    generateMeal()
  }
})

let searchedMeal

searchField.addEventListener('change', e => {
  searchedMeal = e.target.value.toLowerCase().trim()

  filteredMeals.forEach(filteredMeal => {
    if (filteredMeal.name.toLowerCase().includes(searchedMeal)) {
      const randomTimeoutBetweenZeroAndTenSeconds = Math.floor(Math.random() * 11) * 1000
      console.log(`${randomTimeoutBetweenZeroAndTenSeconds } milliseconds for meal to show.`)
      mealContainer.style.display = 'none'
      loading.style.display = 'block'
      setTimeout(() => {
        mealContainer.style.display = 'block'
        loading.style.display = 'none'
        showMealName(filteredMeal)
        showIngredients(filteredMeal.ingredients)
      }, randomTimeoutBetweenZeroAndTenSeconds)
    }
  })
})

searchButton.addEventListener('click', e => {
  e.preventDefault()
})

function generateMeal() {
  const randomMeal = filteredMeals[Math.floor(Math.random() * filteredMeals.length)]
  showMealName(randomMeal)
  showIngredients(randomMeal.ingredients)
  searchField.value = ''
}

function showMealName(meal) {
  mealName.innerHTML = `Refeição: ${meal.name} (${mealEnum[meal.type]})`
}

function showIngredients(ingredients) {
  ingredientsList.innerHTML = ''
  for (const ingredient of ingredients) {
    const listItem = document.createElement('li')
    ingredientsLabel.innerHTML = 'Ingredientes:'
    listItem.innerHTML = ingredient
    ingredientsList.appendChild(listItem)
  }
}

window.onload = () => {
  generateMeal()
}

generateMealButton.addEventListener('click', generateMeal)
