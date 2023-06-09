function countUp(id) {
    const activeArea = document.querySelector(id);
    const countGroup = activeArea.querySelectorAll('h4');

    window.onscroll = function() {
        const scroll = document.documentElement.scrollTop;
        const target = activeArea.offsetTop;
        
        if(scroll > target) {
            countGroup.forEach(element => {
                let startNumber = element.innerHTML;
                const endNumber = element.getAttribute("data-val");
                
                const interVal = setInterval(() => {
                    if(endNumber>startNumber) {
                        startNumber++;
                        element.innerHTML = startNumber;
                    }
                }, 1500 / endNumber);
        
                setTimeout(() => {
                    clearInterval(interVal);
                }, 3000);
            });
        }
    }
};
export default countUp;
