you = prompt("Enter your trainer name").toUpperCase()
let nav = document.getElementById('nav')
nav.innerText = `Trainer ${you}`
// https://fizal.me/pokeapi/api/v2/name/<name>.json
requestAPI = (mon) => {
  var mon = prompt("Enter a pokemon name or ID#").toLowerCase()
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let data = JSON.parse(this.responseText)
            user = new Pokemon (
                 data['name'],
                 data['stats'][5]['base_stat'],
                 data['stats'][4]['base_stat'],
                 data['stats'][3]['base_stat'],
                 data['stats'][0]['base_stat'],
                 data['abilities'][0]['ability']['name'],
                 data['abilities'][1]['ability']['name']
            )
            train.party.push(user)
            setTimeout(displayUser(mon), 300)
        }
    };
    if (isNaN(mon)){
      xhttp.open("GET", `https://fizal.me/pokeapi/api/v2/name/${mon}.json`, true);
    } else {
      xhttp.open("GET", `https://fizal.me/pokeapi/api/v2/id/${mon}.json`, true);
    }
    xhttp.send();
}

let cont = document.createElement('div')
document.body.appendChild(cont)
displayUser = (url) => {
    let h1 = document.getElementById('nme')
    let p1 = document.getElementById('hp')
    let p2 = document.getElementById('atk')
    let p3 = document.getElementById('def')
    let p4 = document.getElementById('spd')
    let img = document.getElementById('pic')
    let cap = document.getElementById('caption')

    h1.innerText = user['name']
    if (isNaN(url)) {
      img.setAttribute('src', `https://play.pokemonshowdown.com/sprites/bw/${url}.png`)
    } else {
      img.setAttribute('src', `http://www.pokestadium.com/assets/img/sprites/${url}.png`)
    }

    p1.innerText = `Hp: ${user['hp']}`
    p2.innerText = `Attack: ${user['attack']}`
    p3.innerText = `Defense: ${user['defense']}`
    p4.innerText = `Speed: ${user['speed']}`
    cap.innerText = `Abilities: ${user['ability1']},  ${user['ability2']}`
    cont.appendChild(h1)
    cont.appendChild(p1)
    cont.appendChild(p2)
    cont.appendChild(p3)
    cont.appendChild(p4)
    a = document.body.getElementsByClassName('screen')
    cont.classList.add('screen')
}


class Trainer {
  constructor(name) {
    this.name = name
    this.party = []
  }
  get(name){
    for(y=0; train.party[y][x] == name; y++) {
      console.log(train.party[x])
    }
  }
  all(){
    return this.party
  }
}

train = new Trainer('Alex')

class Pokemon {
  constructor(name, hp, attack, defense, speed, ability1, ability2){
    this.name = name
    this.hp = hp
    this.attack = attack
    this.defense = defense
    this.speed = speed
    this. ability1 = ability1
    this.ability2 = ability2
  }
}
