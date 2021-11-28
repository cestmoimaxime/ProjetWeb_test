var btnPopup = document.getElementById('btnPopup');
var overlay = document.getElementById('overlay');
var btnClose = document.getElementById('btnClose');


window.onload= overlay.style.display = 'block';

btnPopup.addEventListener('click',openModal);

btnClose.addEventListener('click',closePopup);

function openModal(){
  overlay.style.display = 'block';
}

function closePopup(){
  overlay.style.display = 'none';
}