//const {movie} = require("../Models/searchedMovie")

/* <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> */

const review = {
    title: "Finding Nemo",
    movieDate: new Date(2006, 5, 12).toDateString(),
    synopsis: "Scared clownfish tries to find his son",
    poster: "https://m.media-amazon.com/images/I/51T9vLGUtyL._AC_.jpg",
    likes: 7,
    dislikes: 2,
    comments: ["I thought the blue fish was dumb", "The dad really should've done a better job keeping track of his son", "A heart warming tale of a single dad trying his best"]
}

function createMovieCard(){
    const card = document.createElement("div")
    card.classList.add("card")
    card.setAttribute("style", "width: 18rem")

    cardPhoto = document.createElement("img")
    cardPhoto.setAttribute("src", review.poster)
    card.appendChild(cardPhoto)

    const cardBody = document.createElement("div")
    cardBody.classList.add("card-body")
    const movieTitle = document.createElement("h4")
    movieTitle.innerText = review.title
    
    const movieDate = document.createElement("h5")
    movieDate.innerText = review.movieDate

    const movieSynopsis = document.createElement("p")
    movieSynopsis.classList.add("card-text")
    movieSynopsis.innerText = review.synopsis

    const movieLikes = document.createElement("p")
    movieLikes.classList.add("card-text")
    movieLikes.innerText = `Total likes: ${review.likes}`
    
    const movieDisikes = document.createElement("p")
    movieDisikes.classList.add("card-text")
    movieDisikes.innerText = `Total dislikes: ${review.dislikes}`
    
    
    cardBody.appendChild(movieTitle)
    cardBody.appendChild(movieDate)
    cardBody.appendChild(movieSynopsis)
    cardBody.append(movieLikes)
    cardBody.append(movieDisikes)


    card.appendChild(cardBody)
    document.getElementById("card_container").appendChild(card)

}

function createCommentCard(){
    const card = document.createElement("div")
    card.classList.add("card")
    card.setAttribute("style", "width: 18rem")

    for (let comment of review.comments){
        const userComment = document.createElement('p')
        userComment.classList.add("card-text")
        userComment.innerText = comment
        card.appendChild(userComment)
    }

    document.getElementById("comment_container").appendChild(card)

}



createMovieCard()
createCommentCard()
console.log(review);
