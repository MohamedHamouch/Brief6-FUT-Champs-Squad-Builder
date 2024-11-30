const container = document.querySelector('#playersList');

const data = JSON.parse(localStorage.getItem('playersData'));
data.forEach(player => {
    console.log(player)

    let card = document.createElement('div');
    card.className = 'text-center flex flex-col justify-center m-auto player gold-card w-[80%] h-[18rem] items-center';
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
    card.innerHTML = `
    <div class="flex w-[85%] justify-between">
                        <div class="flex flex-col items-center gap-1">
                            <span class="font-bold text-[1.5rem] leading-4">${player.rating}</span>
                            <span class="font-bold text-base">${player.position}</span>
                            <div class="flex flex-col justify-center items-center gap-1 w-6">
                                <img src="${player.flag}" alt="">
                                <img src="${player.logo}" alt="">
                            </div>
                        </div>
                        <img src="${player.photo}" alt="" class="w-[80%]">
                    </div>
                    <p class="font-bold text-[1rem]">${player.name}</p>
                    <div class="flex gap-1">
                        <div class="flex flex-col justify-center items-center">
                          <span class="text-[.75rem] font-bold">${attName1}</span>
                          <span class="text-[.75rem] font-bold">${player[attValue1]}</span>
                        </div>
                        <div class="flex flex-col justify-center items-center">
                          <span class="text-[.75rem] font-bold">${attName2}</span>
                          <span class="text-[.75rem] font-bold">${player[attValue2]}</span>
                        </div>
                        <div class="flex flex-col justify-center items-center">
                          <span class="text-[.75rem] font-bold">${attName3}</span>
                          <span class="text-[.75rem] font-bold">${player[attValue3]}</span>
                        </div>
                        <div class="flex flex-col justify-center items-center">
                          <span class="text-[.75rem] font-bold">${attName4}</span>
                          <span class="text-[.75rem] font-bold">${player[attValue4]}</span>
                        </div>
                        <div class="flex flex-col justify-center items-center">
                          <span class="text-[.75rem] font-bold">${attName5}</span>
                          <span class="text-[.75rem] font-bold">${player[attValue5]}</span>
                        </div>
                        <div class="flex flex-col justify-center items-center">
                          <span class="text-[.75rem] font-bold">${attName6}</span>
                          <span class="text-[.75rem] font-bold">${player[attValue6]}</span>
                        </div>
                    </div>
            `
     container.appendChild(card);
});