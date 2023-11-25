const modalContainer = document.getElementsByClassName('container')
const btnOpen = document.getElementById('btnOpen');
const btnClose = document.getElementById('btnClose');


btnOpen.addEventListener('click', function() {
    modal.style.display = 'block';
    container.style.display= 'none';
});
   
btnClose.addEventListener('click', function() {
    modal.style.display = 'none';
    container.style.display= 'block';
});