var modal = document.querySelector(".modal");
var openModal = document.querySelector(".btn-op");
var closeModal = document.querySelector(".btn-cl");

//opens modal window
openModal.addEventListener("click", () => {
    modal.classList.add("open-modal");
    openModal.classList.add("hide-btn");
});

//closes modal window 
closeModal.addEventListener("click", () => {
    modal.classList.remove("open-modal");
    openModal.classList.remove("hide-btn");
});

