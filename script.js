let bundeslaender = [];


async function getBundesLeander() {
    let response = await fetch('./bundesland.json');
    bundeslaender = await response.json();
    render();   
}


function render() {
    let content = document.getElementById('states');
    content.innerHTML = '';

        for (let i = 0; i < bundeslaender.length; i++) {
            const state = bundeslaender[i]['name'];
            content.innerHTML += /*html*/`
            <div>${state['name']}</div>
            `;
        }
}