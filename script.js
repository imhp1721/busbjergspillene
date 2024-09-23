document.addEventListener('DOMContentLoaded', function() {
    // Get all arrow icons in the menu
    const arrowIcons = document.querySelectorAll('.arrow');

    // Attach click event listeners to arrow icons
    arrowIcons.forEach(icon => {
        icon.addEventListener('click', function(event) {
            event.stopPropagation(); // Prevent the click from reaching the parent element

            const submenu = this.nextElementSibling; // Get the submenu

            // Toggle the 'open' class for the submenu
            submenu.classList.toggle('open');
        });
    });

    // Get the burger menu input element
    const burgerMenu = document.getElementById('menu_toggle');

    // Attach click event listener to burger menu input
    burgerMenu.addEventListener('click', function() {
        const menuList = document.querySelector('.menu_list');

        // Toggle the 'open' class for the menu list
        menuList.classList.toggle('open');
    });

    // Get the search toggle element
    const searchToggle = document.getElementById('search_toggle');
    const searchField = document.querySelector('.search-container');

    searchToggle.addEventListener('click', function() {
        searchField.classList.toggle('open');
    });
});
