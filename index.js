//Lily Lyons: Search bar
//Jasmin: Figure out what's wrong with the page (work on some of the other coding first)
function start(){
    loadSearchData;
    search;
    game;
}

function loadSearchData(){
    const games = [
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
    // Get the HTML element of the list
    let list = document.getElementById('list');
    // Add each data item as an <a> tag
    games.forEach((game)=>{
        let a = document.createElement("a");
        a.innerText = game;
        a.classList.add("listItem");
        list.appendChild(a);
    })
}



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


function gameToString (game) {
    return game.entries(game).reduce((str, [p, val]) => {
        return `${str}${p}::${val}\n`;
    }, '');
}


// This function is supposed to show the description of the game 
//Tell the web page what we want it to display 
function game(){
    gameToString;
    if(search = ("Resident Evil Zero")){
        println(" released Nov. 12 2002 and created by Seiko Kobuchi, Capcom, Tose, Capcom Production Studio 4, Flagship, Capcom Production Studio 3 Description- Resident Evil 0 is the fifth game released in the series but the first chronologically. It takes place just before the events of Resident Evil, with Special Tactics and Rescue Service (S.T.A.R.S.) medic Rebecca Chambers and former marine Billy Coen discover a train full of zombies in the Arklay Mountains (home to the Spencer Mansion). Billy and Rebecca uncover valuable information related to series villains Albert Wesker and William Birkin. We also learn more about the origins of the sinister Umbrella Corporation and its deadly T-Virus. The game wraps with Rebecca headed toward the mansion, where she’d serve as a supporting character in RE 1.");
    if(search = ("Resident Evil")){
        println("released Mar. 22, 1996 and created by Shinji Mikami and Capcom. Description- The first game to be released, but the second chronologically, Resident Evil takes place on July 24, 1998, in Raccoon City, where a series of bizarre murders has taken place. S.T.A.R.S.’ Alpha and Bravo Teams are sent out to investigate the murders. When contact with Bravo is lost, Alpha finds their crashed helicopter and lands at the site, only to be attacked by a pack of monstrous dogs. After Alpha’s pilot, Brad Vickers, panics, the other four members are forced to seek refuge in a nearby abandoned mansion. They eventually learn about Umbrella Corporation and its illegal experiments involving the T-virus. They discover a secret underground laboratory containing Umbrella’s experiments and meet Wesker, who is a double agent working for Umbrella and plans to use his robot, the Tyrant, to kill the remaining members. In the ensuing confrontation, Wesker is seemingly killed, and the rest of the team hits the self-destruct button, reaches the heliport, and contacts Brad for extraction.");
    if(search = ("Resident Evil 2")){
        println(" released Jan. 21, 1998 and created by Shinji Mikami, Capcom, Angel Studios, Capcom Production Studio 3, and Factor 5. Description- Two months after the events of RE 1, most of the Raccoon City citizens have been transformed into zombies by the T-virus. After being separated from Claire Redfield, Leon Kennedy, a new Raccoon police officer, learns that Claire’s brother, Chris, has left the country to investigate Umbrella’s operations in Europe and decides to look for survivors and find a way out of the city. Among the survivors he finds are Sherry Birkin, Ada and John Wong, and Brian Irons. Together, they learn about the development of the new G-virus, which can mutate a human into the ultimate bioweapon. Sherry’s dad, William, created the virus and injected himself with it, and is now chasing Sherry because of her genetic makeup. She is injected with an embryo in order to produce offspring. After a long battle with the Tyrant, Claire creates a vaccine against the embryo inside Sherry. William is killed after the train self-destructs. After escaping, Claire goes to Europe, while Leon intends to take down Umbrella.");
    if(search = ("Resident Evil 3: Nemesis")){
        println("released Sept. 22, 1999 and created by Shinji Mikami and Capcom. Description- As S.T.A.R.S. agent Jill Valentine escapes Raccoon City, she encounters Nemesis, a bio-organic weapon designed to kill the remaining S.T.A.R.S. members. After evading it, she meets Carlos, Mikhail, and Nikolai, three Umbrella employees who are on their way to the city’s clock tower. Later, Mikhail sacrifices himself with a grenade and Jill reaches the clock tower and is infected with the T-virus. Three days later, she is cured, and encounters Nikolai in a park. He reveals that he has turned against Umbrella and has become a supervisor. Jill escapes to a warehouse, where Carlos tells her that the US government is launching a missile to eradicate the T-virus. Nikolai hijacks Jill’s escaped helicopter, revealing he has killed the other supervisors. She makes her way to the rear yard and confronts Nemesis one last time, and the trio finally escapes in the helicopter, swearing revenge on Umbrella.");
    if(search = ("Resident Evil 4")){
        println("released Jan. 11, 2005 and was created by Capcom Description- Resident Evil 4, arguably the series' most beloved entry, puts players back in the shoes of Leon Kennedy six years after his time in Racoon City during RE 2. Leon travels to a rural village in Spain on a mission to rescue the U.S. president’s daughter. There, Leon encounters a cult and explores its ties to a mind-controlling parasite. The story that unfolds weaves together the narratives of two characters from Resident Evil's past: Albery Wesker and Ada Wong. Read our Resident Evil 4 Remake review to see the improvements that were made since the original.");
    if(search = ("Resident Evil 5")){
        println("released March 5 2009 and was created by Capcom, Jiro Taoka, NVIDIA Lightspeed Studios Description- Resident Evil 5 is set five years after RE 4. Chris Redfield, as part of the BSAA, flies to Africa with his partner Sheva Alomar to prevent the black market sale of a bioweapon. The people of Kijuju, however, have already been infected with an enhanced version of the mind-controlling parasite seen in RE 4. It’s a larger-scale story than past Resident Evils, though Chris also embarks on the more personal mission of finding his long-lost partner, Jill Valentine. We also learn of Albert Wesker’s latest nefarious plot. Unlike past games in the series, RE 5 can be played cooperatively; the second player controls Sheva.");
    if(search = ("Resident Evil 6")){
        println(" released Oct. 2 2012 and was created by Capcom, Jiro Taoka Description- Resident Evil 6 is an action-heavy adventure that tells an even more sprawling (and convoluted) tale than that of RE 5. It weaves together four campaigns starring Leon Kennedy, Chris Redfield, Ada Wong, and a mercenary named Jake Muller. The BSAA introduced in Revelations plays an important role in 6, as the quartet of protagonists work to squash the bioterrorist group Neo-Umbrella and prevent the spread of yet another mutant-creating virus (the C-Virus).");
    if(search = ("Resident Evil 7: Biohazard")){
        println("released Jan. 24 2017 and was created by Keisuke Yamakawa and Capcom Description- With Resident Evil 7: Biohazard Capcom reinvented the franchise in several ways: It’s RE’s return to mass acclaim and fandom following the largely disappointing fifth and sixth entries, it introduces a new protagonist in Ethan Winters, and most notably it switches the series’ longrunning perspective from third-person to first-person. Despite all these changes, RE 7 still exists on the series canonical timeline, presumably taking place in the modern-day sometime after RE 6. The game is set in rural Louisiana, with the first part taking place in the home of the wonderfully insane Baker family. Its ties to past RE games are rather loose, though many of the series staples are here: clandestine human experimentation, bioweapons, and toward the end, a familiar face.");
    if(search = ("Resident Evil - Code: Veronica")){
        println(" released Feb. 3, 2000 and was created by Shinji Mikami, Hiroki Katoh, Capcom, Sega Description-Resident Evil: Code – Veronica advances the timeline by a couple of months and sees Claire Redfield continue the search for her brother Chris that began in RE 2. This time Claire’s search takes her to an Umbrella facility in France, where she escapes captivity and follows the trail to the southmost region of Earth. Chris Redfield, one of the protagonists from the original game, returns as a second playable character in Code Veronica. Chris, like Claire, is looking for his sibling, and the search results in a meeting with series antagonist Albert Wesker.");
    if(search = ("Resident Evil: Revelations")){
        println("released Jan. 26 2012 and was created by Capcom and Tose Description- Resident Evil Revelations is set between the events of RE 4 and 5. It explores another consequence of Umbrella’s bioweapon development and introduces players to the Bioterrorism Security Assessment Alliance (BSAA). Jill Valentine and Chris Redfield are now BSAA agents, with Jill serving as the game’s primary protagonist. The duo head to the Mediterranean to combat the use of T-Abyss, a new variant of the T-Virus.");
    if(search = ("Resident Evil: Revelations 2")){
        println("released Feb. 24 2015 and was created by Capcom, Frima Studio, Kazunori Kadoi Description- Resident Evil Revelations 2 is set between RE 5 and 6. It brings Claire Redfield back into the spotlight for the first time since Code Veronica. The game is split into four episodes, with each episode divided into two parts: a past sequence with Clarie and Moira Burton and a present sequence with Barry Burton (Moira's father) attempting to locate them. The story introduces another antagonistic Wesker.");
    if(search = ("Resident Evil Village")){
        println("released on May 7 2021 and was created by Capcom Description- Resident Evil Village is a continuation (and the conclusion) of Ethan Winters’s story, set three years after the events of RE 7. Biohazard and Village stand on their own as a duology of games. Though Village includes a few more ties to the series’ past, including a more prominent role for the aforementioned “familiar face” and further information about the origins of Umbrella. A post-credits scene extends the timeline even further. We’ll save the details, but those curious can read on to the next section for a bit more context.");
    if(search = ("Shadows of Rose DLC")){
        println(" released in June 2021 and was created by Capcom Description- Picking up shortly after Village’s post-credits scene 16 years after the main story of Village, Shadows of Rose progresses the Resident Evil timeline further than any game before it. Assuming the events of Village take place in 2021, Shadows of Rose brings the franchise into the near future of 2037. The 3-4 hour DLC stars Ethan’s daughter Rose, who attempts to rid herself of the unwanted powers inherited from her father.");
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
        }
    }
}