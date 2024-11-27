async function fetchPlayers() {
    const response = await fetch('../assets/players.json');
    const data = await response.json();
    const players = data.players
    console.log(players);
    localStorage.setItem('players', JSON.stringify(players))
}
fetchPlayers();

const positions = document.querySelectorAll('#squad .player');
const popUp = document.querySelector('#popup')
console.log(positions)
positions.forEach(position => {
    position.addEventListener('click', () => {
        popUp.classList.toggle('hidden')
    });
})

const hidePopUpBtn = document.querySelector('#hide-popup-btn')
hidePopUpBtn.addEventListener('click', () =>{
    popUp.classList.toggle('hidden')
});