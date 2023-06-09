function accordion(id, boolean) {
    const accordionWrap = document.querySelector(id);
    const acc = accordionWrap.querySelectorAll('.accordion button');

    acc.forEach(element => {
        element.addEventListener('click', () => {
            let activeGroup = document.querySelectorAll(id+' .active');
            if(boolean) {
                activeGroup.forEach(element => {
                    element.classList.remove('active');
                });
            }
            element.parentElement.classList.toggle('active');
        })
    });
};
export default accordion;
