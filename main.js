window.onscroll = function() {
    const navbarFix = document.getElementById("navbarFix");
    const goToTopBtn = document.getElementById("go-to-top");
    if(window.scrollY >=52) {
        navbarFix.style.top = "0";
    }
    else {
        navbarFix.style.top = "-55px";
    }
    if(window.scrollY >= 100) {
        goToTopBtn.style.display = "block";
    }
    else {
        goToTopBtn.style.display ="none";
    }
}
const handleGoToTop = () => {
    window.scroll({
        top:0,behavior:"smooth"
    });
}
