'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const cont = document.querySelector(".cont-panel")
const mpanel = document.querySelector(".main-panel")
const chainput = document.querySelector("#cha-input")
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
const contimageinput = document.querySelector("#cont-image-input")
const contimage = document.querySelector("#cont-image")
let image = null
let contestants = []

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
  cont.classList.add("hidden")
  mpanel.classList.add("hidden")
};


const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
  cont.classList.remove("hidden")
  mpanel.classList.remove("hidden")
  console.log(chainput.value)
};


for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

contimageinput.addEventListener("change", (e) => {
  let image = e.target.files[0]
  const picreader = new FileReader()
  picreader.addEventListener("load", (event) => {
    const picfile = event.target
    contimage.innerHTML = `<image class="contimg" src="${picfile.result}" />`
  })
  picreader.readAsDataURL(image)
})

document.querySelector(".saveb").addEventListener("click",() => {
  contestants.push({
    image: "img",
    name: document.querySelector("#contname").value,
    stats: {
      cha: document.querySelector("#contcha").value,
      ath: document.querySelector("#contath").value,
      cre: document.querySelector("#contcre").value,
      sta: document.querySelector("#contsta").value,
      soc: document.querySelector("#contsoc").value,
      log: document.querySelector("#contlog").value,
    },
    playstyle: "test"
  })
  console.log(contestants)
})

document.addEventListener('keydown', function (e) {
  // console.log(e.key);

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
