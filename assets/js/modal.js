function modal(modalId, openClass) {
    const modal = document.querySelector(modalId);
    const modalContent = modal.querySelector('.modal-content');
    const openModalGroup = document.querySelectorAll(openClass);
    const closeModalGroup = modal.querySelectorAll('.modal-close');
    //Overlay close
    modal.addEventListener("click", (e)=>{
        modal.style.display = 'none';
    });
    modalContent.addEventListener("click", (e)=>{
        e.stopPropagation();
    });
    //Close
    closeModalGroup.forEach(element => {
        element.addEventListener("click", (e)=>{
            modal.style.display = 'none';
        });
    });
    //Open
    if(openModalGroup) {
        openModalGroup.forEach(element => {
            element.addEventListener("click", (e)=>{
                modal.style.display = 'flex';
            });
        });
    }
};
export default modal;