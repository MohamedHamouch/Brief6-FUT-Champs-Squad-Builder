async function fetchPlayers() {
    const response = await fetch('./assets/players.json');
    const data = await response.json();
    const players = data.players;
    console.log(players);
    data.players.forEach((player, index) => {
          player.id = `${index}`;
      });
    localStorage.setItem('playersData', JSON.stringify(players));
}
window.onload = function () {
    fetchPlayers();
    // localStorage.clear();
};

