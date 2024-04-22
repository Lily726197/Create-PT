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




// This function is supposed to show the description of the game 
// that we search by name
//Need to tell the webpage what to display
function game(){
    if(search = Resident Evil Zero){
        println(" released Nov. 12 2002 and created by Seiko Kobuchi, Capcom, Tose, Capcom Production Studio 4, Flagship, Capcom Production Studio 3 Description- Resident Evil 0 is the fifth game released in the series but the first chronologically. It takes place just before the events of Resident Evil, with Special Tactics and Rescue Service (S.T.A.R.S.) medic Rebecca Chambers and former marine Billy Coen discover a train full of zombies in the Arklay Mountains (home to the Spencer Mansion). Billy and Rebecca uncover valuable information related to series villains Albert Wesker and William Birkin. We also learn more about the origins of the sinister Umbrella Corporation and its deadly T-Virus. The game wraps with Rebecca headed toward the mansion, where she’d serve as a supporting character in RE 1.");
    if(search = Resident Evil){
        println("released Mar. 22, 1996 and created by Shinji Mikami and Capcom. Description- The first game to be released, but the second chronologically, Resident Evil takes place on July 24, 1998, in Raccoon City, where a series of bizarre murders has taken place. S.T.A.R.S.’ Alpha and Bravo Teams are sent out to investigate the murders. When contact with Bravo is lost, Alpha finds their crashed helicopter and lands at the site, only to be attacked by a pack of monstrous dogs. After Alpha’s pilot, Brad Vickers, panics, the other four members are forced to seek refuge in a nearby abandoned mansion. They eventually learn about Umbrella Corporation and its illegal experiments involving the T-virus. They discover a secret underground laboratory containing Umbrella’s experiments and meet Wesker, who is a double agent working for Umbrella and plans to use his robot, the Tyrant, to kill the remaining members. In the ensuing confrontation, Wesker is seemingly killed, and the rest of the team hits the self-destruct button, reaches the heliport, and contacts Brad for extraction.");
    if(search = Resident Evil 2){
        println(" released Jan. 21, 1998 and created by Shinji Mikami, Capcom, Angel Studios, Capcom Production Studio 3, and Factor 5. Description- Two months after the events of RE 1, most of the Raccoon City citizens have been transformed into zombies by the T-virus. After being separated from Claire Redfield, Leon Kennedy, a new Raccoon police officer, learns that Claire’s brother, Chris, has left the country to investigate Umbrella’s operations in Europe and decides to look for survivors and find a way out of the city. Among the survivors he finds are Sherry Birkin, Ada and John Wong, and Brian Irons. Together, they learn about the development of the new G-virus, which can mutate a human into the ultimate bioweapon. Sherry’s dad, William, created the virus and injected himself with it, and is now chasing Sherry because of her genetic makeup. She is injected with an embryo in order to produce offspring. After a long battle with the Tyrant, Claire creates a vaccine against the embryo inside Sherry. William is killed after the train self-destructs. After escaping, Claire goes to Europe, while Leon intends to take down Umbrella.");
    }
    }
    }