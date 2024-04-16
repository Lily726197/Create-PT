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

function eachGame(){
    if(game.name = "Resident Evil"){
        println("released Mar. 22, 1996 and created by Shinji Mikami and Capcom. Description- The first game to be released, but the second chronologically, Resident Evil takes place on July 24, 1998, in Raccoon City, where a series of bizarre murders has taken place. S.T.A.R.S.' Alpha and Bravo Teams are sent out to investigate the murders. When contact with Bravo is lost, Alpha finds their crashed helicopter and lands at the site, only to be attacked by a pack of monstrous dogs. After Alpha's pilot, Brad Vickers, panics, the other four members are forced to seek refuge in a nearby abandoned mansion. They eventually learn about Umbrella Corporation and its illegal experiments involving the T-virus. They discover a secret underground laboratory containing Umbrella's experiments and meet Wesker, who is a double agent working for Umbrella and plans to use his robot, the Tyrant, to kill the remaining members. In the ensuing confrontation, Wesker is seemingly killed, and the rest of the team hits the self-destruct button, reaches the heliport, and contacts Brad for extraction.")
    if(game.name = "Resident Evil 2"){
        println("released Jan. 21, 1998 and created by Shinji Mikami, Capcom, Angel Studios, Capcom Production Studio 3, and Factor 5. Description- Two months after the events of RE 1, most of the Raccoon City citizens have been transformed into zombies by the T-virus. After being separated from Claire Redfield, Leon Kennedy, a new Raccoon police officer, learns that Claire's brother, Chris, has left the country to investigate Umbrella's operations in Europe and decides to look for survivors and find a way out of the city. Among the survivors he finds are Sherry Birkin, Ada and John Wong, and Brian Irons. Together, they learn about the development of the new G-virus, which can mutate a human into the ultimate bioweapon. Sherry's dad, William, created the virus and injected himself with it, and is now chasing Sherry because of her genetic makeup. She is injected with an embryo in order to produce offspring. After a long battle with the Tyrant, Claire creates a vaccine against the embryo inside Sherry. William is killed after the train self-destructs. After escaping, Claire goes to Europe, while Leon intends to take down Umbrella.")
    if(game.name = "Resident Evil 3: Nemesis"){
        println(" released Sept. 22, 1999 and created by Shinji Mikami and Capcom. Description- As S.T.A.R.S. agent Jill Valentine escapes Raccoon City, she encounters Nemesis, a bio-organic weapon designed to kill the remaining S.T.A.R.S. members. After evading it, she meets Carlos, Mikhail, and Nikolai, three Umbrella employees who are on their way to the city's clock tower. Later, Mikhail sacrifices himself with a grenade and Jill reaches the clock tower and is infected with the T-virus. Three days later, she is cured, and encounters Nikolai in a park. He reveals that he has turned against Umbrella and has become a supervisor. Jill escapes to a warehouse, where Carlos tells her that the US government is launching a missile to eradicate the T-virus. Nikolai hijacks Jill's escaped helicopter, revealing he has killed the other supervisors. She makes her way to the rear yard and confronts Nemesis one last time, and the trio finally escapes in the helicopter, swearing revenge on Umbrella.")
    if(game.name = "Resident Evil - Code: Veronica"){
        println("Resident Evil: Code – Veronica advances the timeline by a couple of months and sees Claire Redfield continue the search for her brother Chris that began in RE 2. This time Claire's search takes her to an Umbrella facility in France, where she escapes captivity and follows the trail to the southmost region of Earth. Chris Redfield, one of the protagonists from the original game, returns as a second playable character in Code Veronica. Chris, like Claire, is looking for his sibling, and the search results in a meeting with series antagonist Albert Wesker. ")
    if(game.name = "Resident Evil 4"){
        println("released Jan. 11, 2005 and was created by Capcom Description- Resident Evil 4, arguably the series' most beloved entry, puts players back in the shoes of Leon Kennedy six years after his time in Racoon City during RE 2. Leon travels to a rural village in Spain on a mission to rescue the U.S. president's daughter. There, Leon encounters a cult and explores its ties to a mind-controlling parasite. The story that unfolds weaves together the narratives of two characters from Resident Evil's past: Albery Wesker and Ada Wong. Read our Resident Evil 4 Remake review to see the improvements that were made since the original.")
    if(game.name = "Resident Evil Revelations")
        println("Resident Evil Revelations is set between the events of RE 4 and 5. It explores another consequence of Umbrella's bioweapon development and introduces players to the Bioterrorism Security Assessment Alliance (BSAA). Jill Valentine and Chris Redfield are now BSAA agents, with Jill serving as the game's primary protagonist. The duo head to the Mediterranean to combat the use of T-Abyss, a new variant of the T-Virus.")
    if(game.name = "Resident Evil 5"){
        println("Resident Evil 5 is set five years after RE 4. Chris Redfield, as part of the BSAA, flies to Africa with his partner Sheva Alomar to prevent the black market sale of a bioweapon. The people of Kijuju, however, have already been infected with an enhanced version of the mind-controlling parasite seen in RE 4. It's a larger-scale story than past Resident Evils, though Chris also embarks on the more personal mission of finding his long-lost partner, Jill Valentine. We also learn of Albert Wesker's latest nefarious plot. Unlike past games in the series, RE 5 can be played cooperatively; the second player controls Sheva.")
    if(game.name = "Resident Evil Revelations 2"){
        println("Resident Evil Revelations 2 is set between RE 5 and 6. It brings Claire Redfield back into the spotlight for the first time since Code Veronica. The game is split into four episodes, with each episode divided into two parts: a past sequence with Clarie and Moira Burton and a present sequence with Barry Burton (Moira's father) attempting to locate them. The story introduces another antagonistic Wesker.")
    if(game.name = "Resident Evil 6"){
        println("Resident Evil 6 is an action-heavy adventure that tells an even more sprawling (and convoluted) tale than that of RE 5. It weaves together four campaigns starring Leon Kennedy, Chris Redfield, Ada Wong, and a mercenary named Jake Muller. The BSAA introduced in Revelations plays an important role in 6, as the quartet of protagonists work to squash the bioterrorist group Neo-Umbrella and prevent the spread of yet another mutant-creating virus (the C-Virus).")
    if(game.name = "Resident Evil 7: Biohazard"){
        println("With Resident Evil 7: Biohazard Capcom reinvented the franchise in several ways: It's RE's return to mass acclaim and fandom following the largely disappointing fifth and sixth entries, it introduces a new protagonist in Ethan Winters, and most notably it switches the series' longrunning perspective from third-person to first-person. Despite all these changes, RE 7 still exists on the series canonical timeline, presumably taking place in the modern-day sometime after RE 6. The game is set in rural Louisiana, with the first part taking place in the home of the wonderfully insane Baker family. Its ties to past RE games are rather loose, though many of the series staples are here: clandestine human experimentation, bioweapons, and toward the end, a familiar face.")
    if(game.name = "Resident Evil Village"){
        println("Resident Evil Village is a continuation (and the conclusion) of Ethan Winters's story, set three years after the events of RE 7. Biohazard and Village stand on their own as a duology of games. Though Village includes a few more ties to the series' past, including a more prominent role for the aforementioned familiar face and further information about the origins of Umbrella. A post-credits scene extends the timeline even further. We'll save the details, but those curious can read on to the next section for a bit more context.")
                                        }
                                    }
                                }
                            }
                        }
                    }            
                }
            }
        }
    }
}