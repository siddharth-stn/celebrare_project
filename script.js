const picsDiv =  document.querySelector(".pics");

picsDiv.addEventListener('click', (e) => {
    if (!(e.target.tagName === 'IMG')) {
        return;
    }
    e.target.parentNode.classList.remove("main-pic-div");
    const nextDiv = e.target.parentNode.nextElementSibling;
    nextDiv.classList.remove("secondary-pic-div");
    nextDiv.classList.add("main-pic-div");

    console.log(nextDiv.nextElementSibling);
    if (nextDiv.nextElementSibling === null) {
        console.log(nextDiv.previousElementSibling);
        nextDiv.classList.remove("translate");
        nextDiv.classList.add("translate-twice");
        return;
    }
    nextDiv.classList.add("translate");
    nextDiv.nextElementSibling.classList.add("translate");
});

//! have to work on carousel