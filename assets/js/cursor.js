function cursor() {
    const mouse = document.querySelector("#cursor");

    window.onmousemove = e => {
        const x = (e.clientX - mouse.offsetWidth / 2) + 40;
        const y = (e.clientY - mouse.offsetHeight / 2) + 40;
        
        const interactable = e.target.closest(".interactable");
        const interacting = interactable !== null;
        
        const keyframes = {
            transform: `translate(${x}px, ${y}px) scale(${interacting ? 4 : 1}`
        };
        
        mouse.animate(keyframes, { 
            duration: 800, 
            fill: "forwards" 
        });
    }
};
export default cursor;

