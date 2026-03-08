let row = document.querySelector("#row")
let search = document.querySelector("#search")
let foodSelect = document.querySelector("#foodSelect")
let cartona = ''



async function callApi(meal) {

     cartona = ''
    // CALL API AND WAIT FOR RESPONCE
    let result = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${meal}`)

    // TRANSLATE RESPONSE 
    let data = await result.json()

    // CHOOSE THE REQUIRED PROPERTY IN THE OBJECT
    let meals = data.recipes


    
    // PREPARE  CONTENT IN JS
    for (let i = 0; i <meals.length ; i++) {

      cartona += `
      
      
            <div class="card col-sm-10 col-md-5 col-lg-4 col-xl-3 col-xxl-3" ">
                <img src="${meals[i].image_url}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${meals[i].title}</h5>
                    <p><strong>Recipe Id:</strong> ${meals[i].recipe_id}</p>

<p><strong>Publisher:</strong> ${meals[i].publisher}</p>

<p><strong>Social Rank:</strong> ${meals[i].social_rank}</p>
                 
                 
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>`

    }

    //DISPLAY CONTENT IN HTML
    row.innerHTML = cartona





}
foodSelect.addEventListener("change", function () {
    callApi(this.value)
})
userInput.addEventListener("change", function () {
    callApi(search.value)
})

callApi("pizza")


