//Lily Lyons: Search bar
//Jasmin: Figure out what's wrong with the page (work on some of the other coding first)
function loadSearchData(){
    let games = [
        'Resident Evil',
        'Resident Evil 2',
        'Resident Evil 3: Nemesis',
        'Resident Evil - Code: Veronica',
        'Resident Evil Zero',
        'Resident Evil 4',
        'Resident Evil 5',
        'Resident Evil: Revelations',
        'Resident Evil 6',
        'Resident Evil: Revelations 2',
        'Resident Evil 7: Biohazard',
        'Resident Evil Village',
        'Shadows of Rose DLC',
    ]
}

// Get the HTML element of the list
let list = document.getElementById('list');
// Add each data item as an <a> tag
games.forEach((game)=>{
    let a = document.createElement("a");
    a.innerText = game;
    a.classList.add("listItem");
    list.appendChild(a);
})

function search() {
    // search functionality goes here
    let listContainer = document.getElementById('list');
    let listItems = document.getElementsByClassName('listItem');
    let input = document.getElementById('searchbar').value
    input = input.toLowerCase(); 
    let noResults = true;
    for (i = 0; i < listItems.length; i++) { 
        if (!listItems[i].innerHTML.toLowerCase().includes(input) || input === "") {
            listItems[i].style.display="none";
            continue;
        }
        else {
            listItems[i].style.display="flex";
            noResults = false; 
        }
    } listContainer.style.display = noResults ? "none" : "block";
}

function eachGame(){

}