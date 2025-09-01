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

// copy 

const copyCount = document.getElementById('copyCount');
const copyBtn = document.querySelectorAll('.copy-btn');
let totalCopyCount = 0;
for (const copy of copyBtn) {
    copy.addEventListener('click', function(){
       const card = this.closest('.card');
       const serverNumber = card.querySelector('.server-number');
       const sTrim = serverNumber.textContent.trim();
       console.log(sTrim);
       
       const createTextArea = document.createElement('textarea');
       createTextArea.value = sTrim;
       document.body.appendChild(createTextArea);
       createTextArea.select();
       document.execCommand('copy');
       document.body.removeChild(createTextArea);
       alert(`Copied Number ${sTrim}`)
       totalCopyCount++;
       copyCount.textContent = totalCopyCount;
    })
}