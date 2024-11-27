async function fetchPlayers(){
    const response = await fetch('../assets/players.json');
    const data = await response.json();
    const players = data.players
    console.log(players);
    localStorage.setItem('players',JSON.stringify(players))
}
fetchPlayers();




