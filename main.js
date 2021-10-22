// vars declaration for the elements involved in the script.

const hamOpenBtn = document.querySelector(".header-right > a");
const hamCloseBtn = document.querySelector(".close");
const hamContent = document.querySelector(".hamburger-menu");

// click event function associated

hamOpenBtn.addEventListener('click',

    function() {
        hamContent.className = hamContent.classList + " active";
    }
);

hamCloseBtn.addEventListener('click',

    function() {
        hamContent.className = "hamburger-menu";
    }
);