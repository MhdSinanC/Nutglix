// Navbar CSS property in Scroll 
window.addEventListener('scroll', ()=> {
    const navbar = document.querySelector(".navbar");
    if(window.scrollY > 100) {
        navbar.classList.add("scrolled");
    }else {
        navbar.classList.remove("scrolled");
    }
});


// Profile Section redirecting 

const profileIcon = document.querySelector(".profile-details.html");
profileIcon.addEventListener("click", ()=> {
    window.location.href="profile.html";
});


// Movie Card 

const movieCard = document.querySelectorAll(".content-card");
movieCard.forEach((card)=> {
    card.addEventListener("mouseEnter", () => {
        card.style.transform = "scale(1.05)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "scale(1)";
    });
});