const indOne = document.getElementById("ind-one");
const indTwo = document.getElementById("ind-two");
const indThree = document.getElementById("ind-three");


function animateInd () {
    const itemOneDiv = document.getElementById("item-1").parentNode;
    const itemTwoDiv = document.getElementById("item-2").parentNode;
    const itemThreeDiv = document.getElementById("item-3").parentNode;
    
    if (itemOneDiv.classList.contains("main-pic-div")) {
        indOne.classList.add("line");
        indOne.classList.remove("dot");
        indTwo.classList.add("dot");
        indTwo.classList.remove("line");
        indThree.classList.add("dot");
        indThree.classList.remove("line");
    } else if (itemTwoDiv.classList.contains("main-pic-div")) {
        indTwo.classList.add("line");
        indTwo.classList.remove("dot");
        indOne.classList.add("dot");
        indOne.classList.remove("line");
        indThree.classList.add("dot");
        indThree.classList.remove("line");
    } else {
        indThree.classList.add("line");
        indThree.classList.remove("dot");
        indTwo.classList.add("dot");
        indTwo.classList.remove("line");
        indOne.classList.add("dot");
        indOne.classList.remove("line");
    }
}

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
        animateInd();
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
        animateInd();
        return;
    }

    nextDiv.classList.add("translate");
    nextDiv.nextElementSibling.classList.add("translate");
    animateInd();
});




