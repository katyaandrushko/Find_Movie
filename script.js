let movieNameRef = document.getElementById('movie-name')
let searchBtn = document.getElementById('search-btn')
let result = document.getElementById('result')

// fetch data

let getMovie = () => {
   let movieName = movieNameRef.value
   let url = `http://www.omdbapi.com/?t=${movieName}&apikey=${key}`
   // input field = empty
   if (movieName.length <= 0) {
      result.innerHTML = `<h3 class='msg'>Please Enter a Movie Name</h3>`
   }
   // input field != empty
   else {
      fetch(url)
         .then((resp) => resp.json())
         .then((data) => {
            console.log(data)
            console.log(data.Poster)

            result.innerHTML = `
      <div class='info'>
         <img src=${data.Poster} class='poster'> </img>
      </div>`
         })
   }
}

window.addEventListener('load', getMovie)
