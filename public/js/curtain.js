    const showElements = document.querySelectorAll(".animation")
    window.addEventListener("scroll", function(){
        for(let i = 0; i<showElements.length; i++){
           const getElementDistance = showElements[i].getBoundingClientRect().top + showElements[i].clientHeight * .5;
            if(innerHeight > getElementDistance){
                showElements[i].classList.add('show');
            }
        }
    })