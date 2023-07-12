
const loadCocktailDB = (search) => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`)
    .then(res => res.json())
    .then(data => displaycocktails(data.drinks))
}

const displaycocktails = (cocktails) => {
      

    


    const cocktailsDiv = document.getElementById('cocktails-container')
    cocktailsDiv.textContent=''
    

    for(const cocktail of cocktails){
        // console.log(cocktail)
        const div = document.createElement('div')
        div.classList.add('col' , 'mb-3')
        div.innerHTML = `
        <divclass="card h-100">
        <img src="${cocktail.strDrinkThumb}" class="card-img-top " alt="...">
        <div class="card-body">
          <h5 class="card-title text-warning">${cocktail.strDrink}</h5>
          <p class="card-text">${cocktail.strInstructions.slice(0,100)}</p>
          <button onclick="details(${cocktail.idDrink})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Details
</button>
          
          </div>
      </divclass=>
        `
        cocktailsDiv.appendChild(div)
    }


}

const details = (itemId) =>{
    console.log(itemId)

    const url  = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${itemId}`
    // console.log(url)

    fetch(url)
    .then(res => res.json())
    .then(data => displayModal(data.drinks[0]))
    
    
}

const displayModal =(datas) =>{
    console.log(datas)

    const title = document.getElementById('modalTitle')
    title.innerText = `${datas.strDrink}`

    const modalBody = document.getElementById('modai-body')
    modalBody.innerHTML = `
    <img class="w-50" src="${datas.strDrinkThumb}" alt="">
    <p>Glass : ${datas.strGlass}</p>
    `
}

document.getElementById('search-btn').addEventListener('click', function(){
    const searchField = document.getElementById('search-field')
    const searchText = searchField.value
    // console.log(searchText)
    searchField.value=''
    loadCocktailDB(searchText)

})

// loadCocktailDB('tea')
