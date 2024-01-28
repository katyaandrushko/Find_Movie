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
            if (data.Response == 'True') {
               result.innerHTML = `
      <div class='info'>
         <img src=${data.Poster} class='poster'> </img>
         <div>
            <h2> ${data.Title}</h2>
            <div class='rating'>
                     <img src='star-icon.svg'> 
                     <h4> ${data.imdbRating} </h4>
               </div>
                  <div class='details'> 
                     <span>${data.Rated}</span>
                     <span>${data.Year}</span>
                     <span>${data.Runtime}</span>
                  </div>
                  <div class='genre'>
                     <div>${data.Genre.split(',').join('</div><div>')}</div>
                  </div>
            </div>
      </div>

         <h3>About:</h3>
           <p>${data.Plot}</p>
             <h3>Actors:</h3>
           <p>${data.Actors}</p>`
            } else {
               result.innerHTML = `<h3 class='msg'>${data.Error}</h3>`
            }
         })
         .catch(() => {
            result.innerHTML = `<h3 class='msg'>Error</h3>`
         })
   }
}

searchBtn.addEventListener('click', getMovie)
window.addEventListener('load', getMovie)
