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

// This function is supposed to show the description of the game 
// that we search by name
//Need to tell the webpage what to display
function game(){
    if(search = loadSearchData){
        println(" released Nov. 12 2002 and created by Seiko Kobuchi, Capcom, Tose, Capcom Production Studio 4, Flagship, Capcom Production Studio 3 Description- Resident Evil 0 is the fifth game released in the series but the first chronologically. It takes place just before the events of Resident Evil, with Special Tactics and Rescue Service (S.T.A.R.S.) medic Rebecca Chambers and former marine Billy Coen discover a train full of zombies in the Arklay Mountains (home to the Spencer Mansion). Billy and Rebecca uncover valuable information related to series villains Albert Wesker and William Birkin. We also learn more about the origins of the sinister Umbrella Corporation and its deadly T-Virus. The game wraps with Rebecca headed toward the mansion, where she’d serve as a supporting character in RE 1.");
    }
}