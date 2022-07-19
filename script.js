async function getBundesLeander() {
    let response = await fetch("/.Bundesland.json");
    let responseAsJson = await response.json();
    console.log('Bundesländer', responseAsJson);     
}