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
        filterPosition(positionPlace);
        selectedPlace = positionPlace;
    });
});

function showPopUpList(data) {
    popUpList.innerHTML = "";
    data.forEach(player => {


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
        
        const newCard = document.createElement('button');
        newCard.className = 'text-center flex flex-col justify-center player gold-card h-[13.75rem] w-[10rem] items-center'
        newCard.innerHTML =
            `<div class="flex w-[90%]">
        <div class="flex flex-col items-center pt-4">
            <span class="font-extrabold text-base leading-4">${player.rating}</span>
            <span class="font-bold text-xs">${player.position}</span>
            <div class="flex flex-col justify-center items-center gap-1 w-5">
                <img src="${player.flag}" alt="">
                <img src="${player.logo}" alt="">
            </div>
        </div>
        <img src="${player.photo}" alt="" class="w-[80%]">
    </div>
    <p class="font-bold text-[1rem]">${player.name}</p>
    <div class="flex gap-1">
        <div class="flex flex-col justify-center items-center">
          <span class="text-[.6rem] font-medium">${attName1}</span>
          <span class="text-[.63rem] font-bold ">${player[attValue1]}</span>
        </div>
        <div class="flex flex-col justify-center items-center">
          <span class="text-[.6rem] font-medium">${attName2}</span>
          <span class="text-[.63rem] font-bold ">${player[attValue2]}</span>
        </div>
        <div class="flex flex-col justify-center items-center">
          <span class="text-[.6rem] font-medium">${attName3}</span>
          <span class="text-[.63rem] font-bold ">${player[attValue3]}</span>
        </div>
        <div class="flex flex-col justify-center items-center">
          <span class="text-[.6rem] font-medium">${attName4}</span>
          <span class="text-[.63rem] font-bold">${player[attValue4]}</span>
        </div>
        <div class="flex flex-col justify-center items-center">
          <span class="text-[.6rem] font-medium">${attName5}</span>
          <span class="text-[.63rem] font-bold ">${player[attValue5]}</span>
        </div>
        <div class="flex flex-col justify-center items-center">
          <span class="text-[.6rem] font-medium">${attName6}</span>
          <span class="text-[.63rem] font-bold">${player[attValue6]}</span>
        </div>
    </div>`;

        newCard.addEventListener('click', () => {

            if (playersXI.includes(selectedPlace.name)) {
                const playerIndex = playersXI.indexOf(selectedPlace.name);
                playersXI.splice(playerIndex, 1);
            }

            popUp.classList.add('hidden');
            selectedPlace.innerHTML = "";
            selectedPlace.classList.remove('holder-card');
            selectedPlace.classList.add('gold-card');
            selectedPlace.name = `${player.name}`
            selectedPlace.innerHTML =
                `<div class="flex w-[70%]">
                        <div class="flex flex-col items-center pt-4">
                            <span class="font-extrabold text-base leading-4">${player.rating}</span>
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
                    <button class="remove-btn h-[0.9375rem] overflow-ellipsis text-[0.625rem] bg-red-700 text-white px-1 rounded-full font-bold absolute bottom-1">X</button>
                 `;
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
