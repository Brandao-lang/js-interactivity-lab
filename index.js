const form = document.querySelector("form")
form.addEventListener('submit', addMovie)
const message = document.querySelector('#message')



function addMovie(event) {
    event.preventDefault()
    const inputField = document.querySelector('input')
    if(inputField.value === "") {
        return
    }
    const movie = document.createElement('li')
    const movieTitle = document.createElement('span')
    movieTitle.textContent = inputField.value
    movieTitle.addEventListener('click', crossOffMovie)
    movie.appendChild(movieTitle)
    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'x'
    deleteBtn.addEventListener('click', deleteMovie)
    movie.appendChild(deleteBtn)
    document.querySelector('ul').appendChild(movie)
    inputField.value = ""
}

function deleteMovie(event) {
    event.target.parentNode.remove()
    // message.textContent = "Movie deleted"
    const title = event.target.parentNode.querySelector('span').textContent
    message.textContent = `${title} deleted!`
    revealMessage()
}

function crossOffMovie(event) {
    event.target.classList.toggle('checked')
    if(event.target.classList.contains('checked')) {
        message.textContent = `${event.target.textContent} watched!`
    } else {
        message.textContent = `${event.target.textContent} added back!`
    }
    revealMessage()
}

function callBack() {
    const element = document.getElementById('message')
    element.classList.add('hide')
}



function revealMessage() {
    const element = document.getElementById('message')
    element.classList.remove('hide')
    setTimeout(callBack, 1000)
}















