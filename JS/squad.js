async function fetchPlayers() {
    const response = await fetch('../assets/players.json');
    const data = await response.json();
    const players = data.players
    console.log(players);
    localStorage.setItem('playersData', JSON.stringify(players))
}

const playersData = JSON.parse(localStorage.getItem('playersData'));
console.log(playersData);
window.onload = function () {
    fetchPlayers();
    showPopUpList(playersData);
};


const positions = document.querySelectorAll('#squad .player');
const popUp = document.querySelector('#popup')
// console.log(positions)

positions.forEach(position => {
    position.addEventListener('click', () => {
        popUp.classList.toggle('hidden');
    });
})

const hidePopUpBtn = document.querySelector('#hide-popup-btn');
hidePopUpBtn.addEventListener('click', () => {
    popUp.classList.toggle('hidden')
});


const popUpList = document.querySelector('#popup-list');
function showPopUpList(data) {
    popUpList.innerHTML = "";
    data.forEach(player => {

        const newCard = document.createElement('button');
        newCard.className('player gold-card w-[200px] h-[300px]')
        newCard.innerHTML =
            `      
            <div class="player-card flex flex-col items-center justify-between h-[75%]">
                <img src="${player.photo}" alt="${player.name}">
                    <div class="flex flex-col gap-3">
                        <p class="text-xl">${player.name}</p>
                        <div class="flex justify-center gap-2">
                            <p>${player.position}</p>
                            <p class="rating">${player.rating}</p>
                            <img src="${player.flag}" alt="" class="h-7">
                            <img src="${player.logo}" alt="" class="h-7">
                        </div>
                    </div>
             </div>
        `
        // newCard.addEventListener('click', () => {

        // })
    });
}



// localStorage.clear();
