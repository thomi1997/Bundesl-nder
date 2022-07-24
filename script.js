let bundeslaender = [];
let letters = [];


async function getBundesLeander() {
    let response = await fetch('./Coding-Challange-Bundesländer/bundesland.json'); /*http://thomas-ketler.developerakademie.net/Coding-Challange-Bundesländer/bundesland.json*/
    bundeslaender = await response.json();
    console.log('bundesländer', bundeslaender);
    render();   
}


function render(filter) {
    let content = document.getElementById('states');
    content.innerHTML = '';

        for (let i = 0; i < bundeslaender.length; i++) {
            const state = bundeslaender[i]['name'];
            const url = bundeslaender[i]['url'];
            const population = (bundeslaender[i]['population'] + '').replace('.', ',');
            const firstLetter = state.charAt(0);

            if (!filter || filter == firstLetter) {
            content.innerHTML += htmlrender(state, url, population);}

            if (!letters.includes(firstLetter)) {
                letters.push(firstLetter);
            }
        }
        renderLettersList();
}


function htmlrender(state, url, population) {
    return /*html*/`
    <a class="state-link state" href="${url}" target="_blank">
        <div class="font-weight-bold">
            ${state}
        </div>
        <div class="population-color">
            ${population} Millionen
        </div>
    </a>
    `;
}


function setFilter(letter) {
    render(letter);
}


function renderLettersList() {
    let addLetters = document.getElementById('add-letter');
    addLetters.innerHTML = '';

    for (let i = 0; i < letters.length; i++) {
        const letter = letters[i];
        addLetters.innerHTML += /*html*/`
        <div onclick="setFilter('${letter}')" class="search-button">
            ${letter}
        </div>
        `;
    }
}