// https://fizal.me/pokeapi/api/v2/name/<name>.json
const Pokemon = prompt("Enter a pokemon name")
requestAPI = () => {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let data = JSON.parse(this.responseText)
            user = {
                name: data['name'],
                hp: data['stats'][5]['base_stat'],
                attack: data['stats'][4]['base_stat'],
                defense: data['stats'][3]['base_stat'],
                speed: data['stats'][0]['base_stat'],
                ability1: data['abilities'][0]['ability']['name'],
                ability2: data['abilities'][1]['ability']['name']
            }
        }
    };
    xhttp.open("GET", `https://fizal.me/pokeapi/api/v2/name/${Pokemon}.json`, true);
    xhttp.send();
}
requestAPI()

displayUser = () => {
    let cont = document.createElement('div')
    let h1 = document.createElement('h1')
    let p1 = document.createElement('p')
    let p2 = document.createElement('p')
    let p3 = document.createElement('p')
    let p4 = document.createElement('p')
    let img = document.createElement('img')

    h1.innerText = user['name']
    img.setAttribute('src', `https://img.pokemondb.net/sprites/sun-moon/icon/${Pokemon}.png`)
    p1.innerText = user['hp']
    p2.innerText = user['attack']
    p3.innerText = user['defense']
    p4.innerText = user['speed']
    cont.appendChild(h1)
    cont.appendChild(p1)
    cont.appendChild(p2)
    cont.appendChild(p3)
    cont.appendChild(p4)
    cont.appendChild(img)
    document.body.appendChild(cont)
    cont.classList.add('screen')
}

displayUser()
