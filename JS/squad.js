async function fetchPlayers() {
    const response = await fetch('../assets/players.json');
    const data = await response.json();
    const players = data.players;
    console.log(players);
    localStorage.setItem('playersData', JSON.stringify(players));
}
window.onload = function () {
    fetchPlayers();
};

const playersData = JSON.parse(localStorage.getItem('playersData'));
const positions = document.querySelectorAll('#squad .holder-card');
const hidePopUpBtn = document.querySelector('#hide-popup-btn');
const popUp = document.querySelector('#popup');
const popUpList = document.querySelector('#popup-list');

let selectedPlace;
let playersXI = [];

positions.forEach(positionPlace => {
    positionPlace.addEventListener('click', () => {
        popUp.classList.toggle('hidden');
        selectedPlace = positionPlace; 
        // console.log(positionPlace.name)
        filterPosition(selectedPlace);
        if(playersXI.includes(positionPlace.name)){
            const playerIndex = playersXI.indexOf(positionPlace.name);
            playersXI.splice(playerIndex, 1);
        }
    });
});

hidePopUpBtn.addEventListener('click', () => {
    popUp.classList.toggle('hidden');
});

function showPopUpList(data) {
    popUpList.innerHTML = "";
    data.forEach(player => {

        const newCard = document.createElement('button');
        newCard.className = 'player gold-card w-[12.5rem] h-[18.75rem]'
        newCard.innerHTML =
            `      
            <div class="player-card flex flex-col items-center justify-between h-[75%]">
                <img src="${player.photo}" alt="${player.name}" class="w-[70%]">
                    <div class="flex flex-col gap-3">
                        <p class="text-base">${player.name}</p>
                        <div class="flex justify-center gap-2">
                            <p>${player.position}</p>
                            <p class="rating">${player.rating}</p>
                            <img src="${player.flag}" alt="" class="h-7">
                            <img src="${player.logo}" alt="" class="h-7">
                        </div>
                    </div>
             </div>
        `
        newCard.addEventListener('click', () => {
            popUp.classList.add('hidden');
            selectedPlace.innerHTML = "";
            selectedPlace.classList.remove('holder-card');
            selectedPlace.classList.add('gold-card');
            selectedPlace.name = `${player.name}`

            selectedPlace.innerHTML =
                ` <div class="player-card flex flex-col items-center justify-between h-[80%]">
                    <img src="${player.photo}" alt="${player.name}" class="w-[55%]">
                    <div class="flex flex-col gap-1">
                        <p class="name text-sm">${player.name}</p>
                        <div class="flex justify-center gap-2">
                            <p class="text-xs">${player.position}</p>
                            <p class="rating text-xs">${player.rating}</p>
                            <img src="${player.flag}" alt="" class="h-4">
                            <img src="${player.logo}" alt="" class="h-4">
                        </div>
                    </div>

                </div>
            `
            playersXI.push(player.name);
            // console.log(playersXI);
        })
        popUpList.appendChild(newCard);
    });
}

function filterPosition(positionPlace) {
    let positionName = positionPlace.getAttribute('data-position');
    
    const filteredPlayers = playersData.filter(player => player.position === positionName && !playersXI.includes(player.name));
    showPopUpList(filteredPlayers);
}

// localStorage.clear();
