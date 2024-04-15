//Lily Lyons: Search bar
//Jasmin: Figure out what's wrong with the page (work on some of the other coding first)
const games = [
    {name: 'Resident Evil'},
    {name: 'Resident Evil 2'},
    {name: 'Resident Evil 3: Nemesis'},
    {name: 'Resident Evil Survivor'},
    {name: 'Resident Evil - Code: Veronica'},
    {name: 'Resident Evil Gaiden'},
    {name: 'Resident Evil Zero'},
    {name: 'Resident Evil: Dead Aim'},
    {name: 'Resident Evil Outbreak'},
    {name: 'Resident Evil Outbreak: File #2'},
    {name: 'Resident Evil 4'},
    {name: 'Resident Evil: Deadly Silence'},
    {name: 'Resident Evil: The Umbrella Chronicles'},
    {name: 'Resident Evil 5'},
    {name: 'Resident Evil: The Darkside Chronicles'},
    {name: 'Resident Evil: The Mercenaries 3D'},
    {name: 'Resident Evil: Revelations'},
    {name: 'Resident Evil: Operation Raccoon City'},
    {name: 'Resident Evil 6'},
    {name: 'Resident Evil: Revelations 2'},
    {name: 'Umbrella Corps'},
    {name: 'Resident Evil 7: Biohazard'},
    {name: 'Resident Evil: Resistance'},
    {name: 'Resident Evil Village'},
    {name: 'Resident Evil Re:Verse'},
]

const searchInput = document.querySelector('.input')

const clearButton = document.getElementById('clear')

// Did you add a function for addEventListener that may be the problem 
clearButton.addEventListener("click", () => {
    // 1. write a function that removes any previous results from the page
    clearList()
})

function clearList(){
    // looping through each child of the search results list and remove each child
    while (list.firstChild){
        list.removeChild(list.firstChild)
    }
}

searchInput.addEventListener("input", (e) => {
    // inside, we will need to achieve a few things:
    // 1. declare and assign the value of the event's target to a variable AKA whatever is typed in the search bar
    let value = e.target.value

    // 2. check: if input exists and if input is larger than 0
    if (value && value.trim().length > 0){
        // 3. redefine 'value' to exclude white space and change input to all lowercase
         value = value.trim().toLowerCase()
        // 4. return the results only if the value of the search is included in the game's name
        // we need to write code (a function for filtering through our data to include the search input value)
        setList(games.filter(game => {
            return game.name.includes(value)
        }))
    } else {
        // 5. return nothing
        // input is invalid -- show an error message or show no results
        clearList()
    }

})

function noResults(){
    // create an element for the error; a list item ("li")
    const error = document.createElement('li')
    // adding a class name of "error-message" to our error element
    error.classList.add('error-message')

    // creating text for our element
    const text = document.createTextNode('No results found. Sorry!')
    // appending the text to our element
    error.appendChild(text)
    // appending the error to our list element
    list.appendChild(error)
}

// creating and declaring a function called "setList"
// setList takes in a param of "results"
function setList(results){
    clearList()
    for (const game of results){
        // creating a li element for each result item
        const resultItem = document.createElement('li')

        // adding a class to each item of the results
        resultItem.classList.add('result-item')

        // grabbing the name of the current point of the loop and adding the name as the list item's text
        const text = document.createTextNode(game.name)

        // appending the text to the result item
        resultItem.appendChild(text)

        // appending the result item to the list
        list.appendChild(resultItem)
    }
    
    if (results.length === 0 ){
        noResults()
    }
}

