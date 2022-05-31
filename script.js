const picsDiv =  document.querySelector(".pics");
let slideDirection = "right";

picsDiv.addEventListener('click', (e) => {
    if (!(e.target.tagName === 'IMG')) {
        return;
    }

    const prevDiv = e.target.parentNode.previousElementSibling;

    if (slideDirection === "left") {
        if (e.target.id === "item-2") {
            slideDirection = "right";
        }

        if (e.target.id === "item-3") {
            e.target.parentNode.classList.add("translate");
            e.target.parentNode.classList.remove("translate-twice");
        } else {
            e.target.parentNode.classList.remove("translate");
        }
        
        prevDiv.classList.add("main-pic-div");
        e.target.parentNode.classList.add("secondary-pic-div");
        e.target.parentNode.classList.remove("main-pic-div");
        return;
    }
    
    const nextDiv = e.target.parentNode.nextElementSibling;
    e.target.parentNode.classList.remove("main-pic-div");
    nextDiv.classList.remove("secondary-pic-div");
    nextDiv.classList.add("main-pic-div");
    
    if (nextDiv.nextElementSibling === null) {
        nextDiv.classList.remove("translate");
        nextDiv.classList.add("translate-twice");
        slideDirection = "left";
        return;
    }

    nextDiv.classList.add("translate");
    nextDiv.nextElementSibling.classList.add("translate");
});
