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
positions.forEach(positionPlace => {
    positionPlace.addEventListener('click', () => {
        popUp.classList.toggle('hidden');
        selectedPlace = positionPlace;
        filterPosition(selectedPlace);
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
        newCard.addEventListener('click', () => {
            popUp.classList.toggle('hidden');
            selectedPlace.innerHTML = "";
            selectedPlace.classList.remove('holder-card');
            selectedPlace.classList.add('gold-card');

            selectedPlace.innerHTML =
                ` <div class="player-card flex flex-col items-center justify-between h-[80%]">
                    <img src="${player.photo}" alt="${player.name}" class="w-[55%]">
                    <div class="flex flex-col gap-1">
                        <p class="text-sm">${player.name}</p>
                        <div class="flex justify-center gap-2">
                            <p class="text-xs">${player.position}</p>
                            <p class="rating text-xs">${player.rating}</p>
                            <img src="${player.flag}" alt="" class="h-4">
                            <img src="${player.logo}" alt="" class="h-4">
                        </div>
                    </div>

                </div>
            `

        })
        popUpList.appendChild(newCard);
    });
}

function filterPosition(positionPlace) {
    let positionName = positionPlace.getAttribute('data-position');
    
    const filteredPlayers = playersData.filter(player => player.position === positionName);
    showPopUpList(filteredPlayers);
}

// localStorage.clear();
