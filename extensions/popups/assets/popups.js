
  

  const modal = document.querySelector(".modal-container");

  // Close modal:
  modal.addEventListener("click", (event) => {
    const modalContent = event.target.querySelector(".modal-content");
    const exitButton = event.target.closest("[data-action='close-popup']");

    if (exitButton || modalContent) {
      modal.classList.add("out");
    }
  });

  // Open modal:
  window.addEventListener("load", (event) => {
    if (modal) {
      openPopup(modal);
    }
  });

  function openPopup(element) {
    modal.classList.remove("modal-animation", "out");
    modal.classList.add("modal-animation");
  }
