// heart Count 

const heartCount = document.getElementById('heart-count');
const heartBtn = document.querySelectorAll('.btn-heart');
let totalHeart = 0;
for (const heart of heartBtn) {
    heart.addEventListener('click', function(){
        totalHeart++;
        heartCount.textContent = totalHeart;
    })
}

// call button start 

const totalCoin = document.getElementById('coinText');
const serverNumber = document.querySelectorAll('.server-number');
const  serverName = document.querySelectorAll('.server-name');
const callCoin = document.querySelectorAll('.call');

for (let i = 0; i < callCoin.length; i++) {
    callCoin[i].addEventListener('click', function () {
        let coin = totalCoin.textContent;
        if (coin < 20) {
            alert("Not Enough Coin!");
            return;
        }
        const sName = serverName[i].textContent;
        const sNumber = serverNumber[i].textContent;
        alert(`📞 Calling ${sName} ${sNumber}`)
        coin = coin - 20;
        totalCoin.textContent = coin;
        const now = new Date();
        const list = document.getElementById('list');
        const createDiv = document.createElement('div');
        createDiv.innerHTML = `
         <div class="flex justify-between bg-gray-50 p-4 rounded-lg items-center">
                <div>
                  <h2 class="text-lg font-bold">${sName}</h2>
                  <h3>${sNumber}</h3>
                </div>
                <div>
                  <p class="text-sm font-semibold">${now.toLocaleTimeString()}</p>
                </div>
              </div>    
        `;
   
      list.appendChild(createDiv);
      
      
      
    })
}

// clear
const clear = document.getElementById('clear');
const list = document.getElementById('list');
clear.addEventListener('click', function(){
    list.innerHTML = "";
})
