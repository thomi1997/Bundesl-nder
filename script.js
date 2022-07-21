let bundeslaender = [];


async function getBundesLeander() {
    let response = await fetch('./bundesland.json');
    bundeslaender = await response.json();
    console.log('bundesländer', bundeslaender);
    render();   
}


function render() {
    let content = document.getElementById('states');
    content.innerHTML = '';

        for (let i = 0; i < bundeslaender.length; i++) {
            const state = bundeslaender[i]['name'];
            const url = bundeslaender[i]['url'];
            const population = bundeslaender[i]['population']; 
            content.innerHTML += /*html*/`
            <a class="state-link state" href="${url}">
                <span>
                    ${state}
                </span>
                <span>
                    ${population} Millionen
                </span>
            </a>
            `;
        }
}