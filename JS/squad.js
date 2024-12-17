const playersData = JSON.parse(localStorage.getItem('playersData'));
const positions = document.querySelectorAll('#squad .holder-card');
const hidePopUpBtn = document.querySelector('#hide-popup-btn');
const popUp = document.querySelector('#popup');
const popUpList = document.querySelector('#popup-list');
const reserveList = document.querySelector('#reserve-list');
const openFormBtn = document.querySelector('#show-form');
const formPopUp = document.querySelector('#popup-form')
const closeFormBtn = document.querySelector('#hide-form-btn');
const addPlayerForm = document.querySelector('#add-player-form');
const positionInput = document.querySelector('#position-input');
const attLabels = addPlayerForm.querySelectorAll('.att-label');
const attInputs = addPlayerForm.querySelectorAll('.att-input');
const inputs = addPlayerForm.querySelectorAll('input');
// console.log(attInputs);

let selectedPlace;
let playersXI = [];
showReserves(playersData);

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

    // let attValue1, attValue2, attValue3, attValue4, attValue5, attValue6;
    // let attName1, attName2, attName3, attName4, attName5, attName6;
    // if (player.position != "GK") {
    //   attValue1 = "pace";
    //   attValue2 = "shooting";
    //   attValue3 = "passing";
    //   attValue4 = "dribbling";
    //   attValue5 = "defending";
    //   attValue6 = "physical";

    //   attName1 = "PAC";
    //   attName2 = "SHO";
    //   attName3 = "PAS";
    //   attName4 = "DRI";
    //   attName5 = "DEF";
    //   attName6 = "PHY";
    // } else {
    //   attValue1 = "diving";
    //   attValue2 = "handling";
    //   attValue3 = "kicking";
    //   attValue4 = "reflexes";
    //   attValue5 = "positioning";
    //   attValue6 = "speed";

    //   attName1 = "DIV";
    //   attName2 = "HAN";
    //   attName3 = "KIC";
    //   attName4 = "REF";
    //   attName5 = "POS";
    //   attName6 = "SPE";
    // }

    let attNames = [];
    let attValues = [];

    if (player.position != "GK") {
      attValues = ["pace", "shooting", "passing", "dribbling", "defending", "physical"];
      attNames = ["PAC", "SHO", "PAS", "DRI", "DEF", "PHY"];
    } else {
      attValues = ["diving", "handling", "kicking", "reflexes", "positioning", "speed"];
      attNames = ["DIV", "HAN", "KIC", "REF", "POS", "SPE"];
    }

    const newCard = document.createElement('button');
    newCard.className = 'text-center flex flex-col justify-center player gold-card h-[12.375rem] w-[9rem] items-center';
    newCard.innerHTML =
      `<div class="flex">
          <div class="flex flex-col items-center pt-4">
              <span class="font-extrabold text-[1.1rem] leading-4">${player.rating}</span>
              <span class="font-bold text-[0.9rem]">${player.position}</span>
              <div class="flex flex-col justify-center items-center gap-1 w-5">
                  <img src="${player.flag}" alt="">
                  <img src="${player.logo}" alt="">
              </div>
          </div>
          <img src="${player.photo}" alt="" class="w-[6.46rem]">
      </div>
      <p class="font-bold text-[0.9rem]">${player.name}</p>
      <div class="flex gap-1">
          <div class="flex flex-col justify-center items-center">
              <span class="text-[0.54rem] font-bold">${attNames[5]}</span>
              <span class="text-[0.567rem] font-bold">${player[attValues[0]]}</span>
          </div>
          <div class="flex flex-col justify-center items-center">
              <span class="text-[0.54rem] font-bold">${attNames[1]}</span>
              <span class="text-[0.567rem] font-bold">${player[attValues[1]]}</span>
          </div>
          <div class="flex flex-col justify-center items-center">
              <span class="text-[0.54rem] font-bold">${attNames[2]}</span>
              <span class="text-[0.567rem] font-bold">${player[attValues[2]]}</span>
          </div>
          <div class="flex flex-col justify-center items-center">
              <span class="text-[0.54rem] font-bold">${attNames[3]}</span>
              <span class="text-[0.567rem] font-bold">${player[attValues[3]]}</span>
          </div>
          <div class="flex flex-col justify-center items-center">
              <span class="text-[0.54rem] font-bold">${attNames[4]}</span>
              <span class="text-[0.567rem] font-bold">${player[attValues[4]]}</span>
          </div>
          <div class="flex flex-col justify-center items-center">
              <span class="text-[0.54rem] font-bold">${attNames[5]}</span>
              <span class="text-[0.567rem] font-bold">${player[attValues[5]]}</span>
          </div>
      </div>`;


    newCard.addEventListener('click', () => {

      if (playersXI.includes(selectedPlace.name)) {
        const playerIndex = playersXI.indexOf(selectedPlace.name);
        playersXI.splice(playerIndex, 1);
        // showReserves(playersData);
      }
      popUp.classList.add('hidden');
      selectedPlace.innerHTML = "";
      selectedPlace.classList.remove('holder-card');
      selectedPlace.classList.add('gold-card');
      selectedPlace.name = `${player.id}`
      selectedPlace.innerHTML =
        `<div class="flex">
                        <div class="flex flex-col items-center pt-4">
                            <span class="font-extrabold text-base leading-4">${player.rating}</span>
                            <span class="font-bold text-xs">${player.position}</span>
                            <div class="flex flex-col justify-center items-center gap-1 w-3 sm:w-5">
                                <img src="${player.flag}" alt="">
                                <img src="${player.logo}" alt="">
                            </div>
                        </div>
                        <img src="${player.photo}" alt="" class="h-[5rem] w-[5.9rem] sm:h-auto sm:w-[6.20rem]">
                    </div>
                    <p class="font-bold text-[.65rem] sm:text-[.75] md:text-[.85rem]">${player.name}</p>
                    <div class="flex gap-[2px]">
                        <div class="flex flex-col justify-center items-center">
                          <span class="text-[0.45rem] font-bold">${attNames[0]}</span>
                          <span class="text-[.475rem] sm:text-[.525rem] font-bold ">${player[attValues[0]]}</span>
                        </div>
                        <div class="flex flex-col justify-center items-center">
                          <span class="text-[0.45rem] font-bold">${attNames[1]}</span>
                          <span class=".player-name text-[.47rem] sm:text-[.525rem] font-bold ">${player[attValues[1]]}</span>
                        </div>
                        <div class="flex flex-col justify-center items-center">
                          <span class="text-[.45rem] sm:text-[.525rem] font-bold">${attNames[2]}</span>
                          <span class="text-[.47rem] sm:text-[.525rem] font-bold ">${player[attValues[2]]}</span>
                        </div>
                        <div class="flex flex-col justify-center items-center">
                          <span class="text-[.45rem] font-bold">${attNames[3]}</span>
                          <span class="text-[.47rem] sm:text-[.525rem] font-bold">${player[attValues[3]]}</span>
                        </div>
                        <div class="flex flex-col justify-center items-center">
                          <span class="text-[.45rem] font-bold">${attNames[4]}</span>
                          <span class="text-[.47rem] sm:text-[.525rem] font-bold ">${player[attValues[4]]}</span>
                        </div>
                        <div class="flex flex-col justify-center items-center">
                          <span class="text-[.45rem] sm:text-[.5rem] font-bold">${attNames[5]}</span>
                          <span class="text-[.47rem] sm:text-[.525rem] font-bold">${player[attValues[5]]}</span>
                        </div>
                    </div>
                    <button id="${player.id}" class="remove-btn h-[0.9375rem] overflow-ellipsis text-[0.625rem] bg-red-700 text-white px-1 rounded-full font-bold absolute bottom-1">X</button>
                 `;
      const removeBtn = selectedPlace.querySelector('.remove-btn');
      // console.log(removeBtn);
      removeBtn.addEventListener('click', (event) => {
        event.stopPropagation();
        const theID = removeBtn.id;
        const place = document.querySelector(`[name="${theID}"]`);
        // console.log(place)
        const positionShort = place.getAttribute('data-position');
        // console.log(positionShort);
        place.innerHTML = `Add ${positionShort}`;
        place.classList.remove('gold-card');
        place.classList.add('holder-card');
        place.name = "";
        if (playersXI.includes(player.id)) {
          const playerIndex = playersXI.indexOf(player.id);
          playersXI.splice(playerIndex, 1);
          showReserves(playersData);
        }
      });

      playersXI.push(player.id);
      showReserves(playersData);
      // console.log(playersXI);
    })
    popUpList.appendChild(newCard);
  });
}

function filterPosition(FilteringPositionPlace) {
  const positionName = FilteringPositionPlace.getAttribute('data-position');
  const filteredPlayers = playersData.filter(player => player.position === positionName && !playersXI.includes(player.id));
  showPopUpList(filteredPlayers);
}

function showReserves(players) {
  reserveList.innerHTML = '';
  players.forEach(player => {
    if (!playersXI.includes(player.id)) {
      let attNames = [];
      let attValues = [];

      if (player.position != "GK") {
        attValues = ["pace", "shooting", "passing", "dribbling", "defending", "physical"];
        attNames = ["PAC", "SHO", "PAS", "DRI", "DEF", "PHY"];
      } else {
        attValues = ["diving", "handling", "kicking", "reflexes", "positioning", "speed"];
        attNames = ["DIV", "HAN", "KIC", "REF", "POS", "SPE"];
      }

      const resPlayer = document.createElement('div');
      resPlayer.className = 'player gold-card flex flex-col justify-center items-center w-[10.6869rem] h-[12rem]';
      resPlayer.innerHTML =
        ` <div class="flex">
                        <div class="flex flex-col items-center pt-4">
                            <span class="font-extrabold text-base leading-4">${player.rating}</span>
                            <span class="font-bold text-xs">${player.position}</span>
                            <div class="flex flex-col justify-center items-center gap-1 w-5">
                                <img src="${player.flag}" alt="">
                                <img src="${player.logo}" alt="">
                            </div>
                        </div>
                        <img src="${player.photo}" alt="" class="w-[6.5625rem]">
                    </div>
                    <p class="font-bold text-[.8rem] xl:text-[.9rem]">${player.name}</p>
                    <div class="flex gap-[2px]">
                        <div class="flex flex-col justify-center items-center">
                          <span class="text-[.6rem] font-bold">${attNames[0]}</span>
                          <span class="text-[.625rem] font-bold ">${player[attValues[0]]}</span>
                        </div>
                        <div class="flex flex-col justify-center items-center">
                          <span class="text-[.6rem] font-bold">${attNames[1]}</span>
                          <span class="text-[.625rem] font-bold ">${player[attValues[1]]}</span>
                        </div>
                        <div class="flex flex-col justify-center items-center">
                          <span class="text-[.6rem] font-bold">${attNames[2]}</span>
                          <span class="text-[.625rem] font-bold ">${player[attValues[2]]}</span>
                        </div>
                        <div class="flex flex-col justify-center items-center">
                          <span class="text-[.6rem] font-bold">${attNames[3]}</span>
                          <span class="text-[.625rem] font-bold">${player[attValues[3]]}</span>
                        </div>
                        <div class="flex flex-col justify-center items-center">
                          <span class="text-[.6rem] font-bold">${attNames[4]}</span>
                          <span class="text-[.625rem] font-bold ">${player[attValues[4]]}</span>
                        </div>
                        <div class="flex flex-col justify-center items-center">
                          <span class="text-[.6rem] font-bold">${attNames[5]}</span>
                          <span class="text-[.625rem] font-bold">${player[attValues[5]]}</span>
                        </div>
                    </div>
      `
      reserveList.appendChild(resPlayer);
    }

  });
}

positionInput.addEventListener('change', () => {
  let labelNames = [];
  let attNames = [];
  const position = positionInput.value; 

  if (position != "GK") {
    labelNames = ["PAC", "SHO", "PAS", "DRI", "DEF", "PHY"]; 
    attNames =["pace", "shooting", "passing", "dribbling", "defending", "physical"];
  } else {
    labelNames = ["DIV", "HAN", "KIC", "REF", "POS", "SPE"];
    attNames = ["diving", "handling", "kicking", "reflexes", "positioning", "speed"];
  }

  attLabels.forEach((label,index)=>{
    label.innerHTML = labelNames[index];
  });
  attInputs.forEach((input, index)=>{
    input.name = attNames[index];
  });

});

openFormBtn.addEventListener('click', () => {
  formPopUp.classList.toggle('hidden')
});
closeFormBtn.addEventListener('click', () => {
  formPopUp.classList.toggle('hidden')
});


addPlayerForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const newObj = {};
  inputs.forEach(input => {
    let value = input.value;
    if (input.type == 'number') {
      value = Number(value);
    }
    newObj[input.name] = value;
  });
  newObj.id = `${playersData.length}`;

  const stats = Array.from(attInputs);
  const rate = stats.reduce((total, input) => {
    return total + Number(input.value);
  }, 0)
  newObj.rating = Math.ceil(rate / 6);

  newObj.photo = '../assets/images/genric-face-player.svg';
  newObj.logo = '../assets/images/icons.webp';
  newObj.flag = '../assets/images/fifa_globe.png';
  newObj.position = positionInput.value;

  // console.log(newObj);
  playersData.push(newObj);
  showReserves(playersData);
  formPopUp.classList.toggle('hidden');
  addPlayerForm.reset();
});


// const player1 = {
//   name: "player1",
//   nationality: "spain",
//   club: "barcelona",
//   league: "spanish"
// }

// const player2 = {
//   name: "player2",
//   nationality: "england",
//   club: "arsenal",
//   league: "english"
// }

// function chemCalcu(){
//   let chem = 0;
//   if(player1.club === player2.club){
//     chem +=5;
//   }
//   if(player1.nationality === player2.nationality){
//     chem +=2;
//   }
//   if(player1.league === player2.league){
//     chem +=1;
//   }
  
//   return chem;
// }

// console.log(chemCalcu);
