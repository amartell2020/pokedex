https://fizal.me/pokeapi/api/v2/name/<name>.json
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
            }
        }
    };
    xhttp.open("GET", "https://fizal.me/pokeapi/api/v2/name/bulbasaur.json", true);
    xhttp.send();
}
