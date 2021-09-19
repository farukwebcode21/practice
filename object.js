// const loadSingleUser =()=>{
//     fetch('https://randomuser.me/api/?results=1')
//     .then(res => res.json())
//     .then(data => displayUser(data.results[0]));
// }
// loadSingleUser();

// const displayUser = user =>{
//     console.log(user);

// }

// meal search
const toggleSpinner = displayStyle =>{
    document.getElementById('spinner').style.display = displayStyle;
}

const toggleSearchMeals = displayStyle =>{
    document.getElementById('meals').style.display = displayStyle;
}

const searchMeal=() =>{
    const searchText = document.getElementById('search-field').value;
    // Show display spinner
    toggleSpinner('block');
    toggleSearchMeals('none');
    loadMeals(searchText);
    document.getElementById('search-field').value ='';
}

const loadMeals = searchText =>{
    const url =`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayMeals(data.meals))
}

loadMeals('Fish');

const displayMeals = (meals) =>{
    const container = document.getElementById('meals');
    container.textContent ='';
    if(!meals){
        window.alert('We are not found any result')
    }
    meals?.forEach(meal =>{
        const div = document.createElement('div');
        div.innerHTML =`
        <h1>${meal.strMeal}</h1>
        <button onclick="loadDetails('${meal.strMeal}')">Click Me </button> 
        `;
        container.appendChild(div);
    });
    toggleSpinner('none');
    toggleSearchMeals('block');

}
const loadDetails = mealName =>{
    console.log(mealName);
}
