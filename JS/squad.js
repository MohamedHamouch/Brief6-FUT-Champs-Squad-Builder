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

hidePopUpBtn.addEventListener('click', () => {
    popUp.classList.toggle('hidden');
});

positions.forEach(positionPlace => {
    positionPlace.addEventListener('click', () => {
        popUp.classList.toggle('hidden');
        selectedPlace = positionPlace;
        // console.log(positionPlace.name)
        filterPosition(selectedPlace);
        if (playersXI.includes(positionPlace.name)) {
            const playerIndex = playersXI.indexOf(positionPlace.name);
            playersXI.splice(playerIndex, 1);
        }
    });
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
            let attValue1, attValue2, attValue3, attValue4, attValue5, attValue6;
            let attName1, attName2, attName3, attName4, attName5, attName6;
            if (player.position != "GK") {
                attValue1 = "pace";
                attValue2 = "shooting";
                attValue3 = "passing";
                attValue4 = "dribbling";
                attValue5 = "defending";
                attValue6 = "physical";

                attName1 = "PAC";
                attName2 = "SHO";
                attName3 = "PAS";
                attName4 = "DRI";
                attName5 = "DEF";
                attName6 = "PHY";
            } else {
                attValue1 = "diving";
                attValue2 = "handling";
                attValue3 = "kicking";
                attValue4 = "reflexes";
                attValue5 = "positioning";
                attValue6 = "speed";

                attName1 = "DIV";
                attName2 = "HAN";
                attName3 = "KIC";
                attName4 = "REF";
                attName5 = "POS";
                attName6 = "SPE";
            }
            selectedPlace.innerHTML =
                `<div class="flex w-[70%]">
                        <div class="flex flex-col items-center pt-4">
                            <span class="font-extrabold text-sm">${player.rating}</span>
                            <span class="font-bold text-xs">${player.position}</span>
                            <div class="flex flex-col justify-center items-center gap-1 w-5">
                                <img src="${player.flag}" alt="">
                                <img src="${player.logo}" alt="">
                            </div>
                        </div>
                        <img src="${player.photo}" alt="" class="w-[81%]">
                    </div>
                    <p class="font-bold text-[.9rem]">${player.name}</p>
                    <div class="flex gap-1">
                        <div class="flex flex-col justify-center items-center">
                          <span class="text-[.6rem] font-medium">${attName1}</span>
                          <span class="text-[.625rem] font-bold ">${player[attValue1]}</span>
                        </div>
                        <div class="flex flex-col justify-center items-center">
                          <span class="text-[.6rem] font-medium">${attName2}</span>
                          <span class="text-[.625rem] font-bold ">${player[attValue2]}</span>
                        </div>
                        <div class="flex flex-col justify-center items-center">
                          <span class="text-[.6rem] font-medium">${attName3}</span>
                          <span class="text-[.625rem] font-bold ">${player[attValue3]}</span>
                        </div>
                        <div class="flex flex-col justify-center items-center">
                          <span class="text-[.6rem] font-medium">${attName4}</span>
                          <span class="text-[.625rem] font-bold">${player[attValue4]}</span>
                        </div>
                        <div class="flex flex-col justify-center items-center">
                          <span class="text-[.6rem] font-medium">${attName5}</span>
                          <span class="text-[.625rem] font-bold ">${player[attValue5]}</span>
                        </div>
                        <div class="flex flex-col justify-center items-center">
                          <span class="text-[.6rem] font-medium">${attName6}</span>
                          <span class="text-[.625rem] font-bold">${player[attValue6]}</span>
                        </div>
                    </div>
                    <button class="remove-btn text-[0.625rem] bg-red-600 text-[#e3b656] px-1 rounded-full font-bold">X</button>
                 `
            const removeBtn = selectedPlace.querySelector('.remove-btn');
            console.log(removeBtn);
            removeBtn.addEventListener('click', (event) => {
                event.stopPropagation();
                let positionShort = selectedPlace.getAttribute('data-position');
                console.log(positionShort);
                selectedPlace.innerHTML = `Add ${positionShort}`;
                selectedPlace.classList.remove('gold-card');
                selectedPlace.classList.add('holder-card');
                selectedPlace.name = "";
                if (playersXI.includes(player.name)) {
                    const playerIndex = playersXI.indexOf(player.name);
                    playersXI.splice(playerIndex, 1);
                }
                
                
            });

            playersXI.push(player.name);
            // console.log(playersXI);
        })
        popUpList.appendChild(newCard);

    });
}

function filterPosition(FilteringPositionPlace) {
    let positionName = FilteringPositionPlace.getAttribute('data-position');
    const filteredPlayers = playersData.filter(player => player.position === positionName && !playersXI.includes(player.name));
    showPopUpList(filteredPlayers);
}

// localStorage.clear();
