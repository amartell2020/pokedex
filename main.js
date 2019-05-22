// https://fizal.me/pokeapi/api/v2/name/<name>.json
const mon = prompt("Enter a pokemon ID#").toLowerCase()
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
    if (isNaN(mon)){
      xhttp.open("GET", `https://fizal.me/pokeapi/api/v2/name/${mon}.json`, true);
    } else {
      xhttp.open("GET", `https://fizal.me/pokeapi/api/v2/id/${mon}.json`, true);
    }
    xhttp.send();
}
requestAPI()

displayUser = () => {
    let cont = document.createElement('div')
    let h1 = document.getElementById('nme')
    let p1 = document.getElementById('hp')
    let p2 = document.getElementById('atk')
    let p3 = document.getElementById('def')
    let p4 = document.getElementById('spd')
    let img = document.getElementById('pic')
    let cap = document.getElementById('caption')

    h1.innerText = user['name']
    if (isNaN(mon)) {
      img.setAttribute('src', `https://img.pokemondb.net/sprites/sun-moon/icon/${mon}.png`)
    } else {
      img.setAttribute('src', `http://www.pokestadium.com/assets/img/sprites/${mon}.png`)
    }

    p1.innerText = `This is the hp: ${user['hp']}`
    p2.innerText = `This is the attack: ${user['attack']}`
    p3.innerText = `This is the defense: ${user['defense']}`
    p4.innerText = `This is the speed: ${user['speed']}`
    cap.innerText = `Abilities: ${user['ability1']},  ${user['ability2']}`
    cont.appendChild(h1)
    cont.appendChild(p1)
    cont.appendChild(p2)
    cont.appendChild(p3)
    cont.appendChild(p4)
    document.body.appendChild(cont)
    cont.classList.add('screen')
}

setTimeout(displayUser, 300)
