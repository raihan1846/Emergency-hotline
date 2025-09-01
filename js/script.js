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
