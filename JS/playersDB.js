const container = document.querySelector('#playersList');

const data = JSON.parse(localStorage.getItem('playersData'));
data.forEach(player => {
    console.log(player)

    let card = document.createElement('div');
    card.className = 'text-center flex flex-col justify-center m-auto player gold-card w-[80%] h-[300px]'
    card.innerHTML = `
    <div class="player-card flex flex-col items-center justify-between h-[75%]">
                <img src="${player.photo}" alt="" class="w-[70%]">
                <div class="flex flex-col gap-3">
                    <p class="text-base">${player.name}</p>
                    <div class="flex justify-center gap-2">
                        <p class="">${player.position}</p>
                        <p class="rating">${player.rating}</p>
                        <img src="${player.flag}" alt="" class="h-7">
                        <img src="${player.logo}" alt="" class="h-7">
                    </div>
                </div>
            </div>
            `
     container.appendChild(card);
});