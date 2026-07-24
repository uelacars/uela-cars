// ===============================
// MENU MOBILE
// ===============================


const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");
const searchBox = document.querySelector(".search-box");
const searchIcon = document.querySelector("#search-icon");


if(menuIcon){

    menuIcon.addEventListener("click", () => {

        navbar.classList.toggle("active");

        searchBox.classList.remove("active");

    });

}





// ===============================
// SEARCH BOX
// ===============================


if(searchIcon){

    searchIcon.addEventListener("click", () => {

        searchBox.classList.toggle("active");

        navbar.classList.remove("active");

    });

}





// ===============================
// REMOVE MENU ON SCROLL
// ===============================


window.addEventListener("scroll", () => {


    navbar.classList.remove("active");

    searchBox.classList.remove("active");


});






// ===============================
// HEADER SHADOW
// ===============================


const header = document.querySelector("header");


window.addEventListener("scroll", () => {


    if(window.scrollY > 0){

        header.classList.add("shadow");

    }

    else{

        header.classList.remove("shadow");

    }


});








// ===============================
// SMOOTH SCROLL
// ===============================


document.querySelectorAll('a[href^="#"]').forEach(link => {


    link.addEventListener("click", function(e){


        const target = document.querySelector(
            this.getAttribute("href")
        );


        if(target){

            e.preventDefault();


            target.scrollIntoView({

                behavior:"smooth"

            });

        }


    });


});








// ===============================
// BUY BUTTONS
// ===============================


const buyButtons = document.querySelectorAll(".prize-btn");


buyButtons.forEach(button => {


    button.addEventListener("click", () => {


        alert(
            "Thank you for choosing UELA CARS!"
        );


    });


});








// ===============================
// CAR CARD ANIMATION
// ===============================


const carCards = document.querySelectorAll(".cars-container .box");


carCards.forEach(card => {


    card.addEventListener("mouseenter", () => {


        card.style.transition = "0.3s";


    });



});







// ===============================
// SEARCH FUNCTIONALITY
// ===============================


const searchInput = document.querySelector(
    ".search-box input"
);


if(searchInput){


    searchInput.addEventListener(
        "keyup",
        () => {


        const value =
        searchInput.value.toLowerCase();


        const cars =
        document.querySelectorAll(
            ".cars-container .box"
        );



        cars.forEach(car => {


            const name =
            car.innerText.toLowerCase();



            if(name.includes(value)){


                car.style.display="block";


            }


            else{


                car.style.display="none";


            }


        });



    });


}







// ===============================
// CURRENT YEAR FOOTER
// ===============================


const year = document.querySelector(".copyright");


if(year){


    year.innerHTML =
    `
    <p>
    © ${new Date().getFullYear()} 
    Auto UELA CARS. All Rights Reserved.
    </p>
    `;


}






console.log(
    "UELA CARS website loaded successfully 🚗"
);
