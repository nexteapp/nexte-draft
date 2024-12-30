// script.js

// Function to toggle the dropdown menu for Health, Career, and Relationships
document.addEventListener('DOMContentLoaded', function () {
    // Get all dropdown elements
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(function (dropdown) {
        // On hover, show the dropdown menu
        dropdown.addEventListener('mouseover', function () {
            const dropdownContent = this.querySelector('.dropdown-content');
            if (dropdownContent) {
                dropdownContent.style.display = 'block';
            }
        });

        // On mouse out, hide the dropdown menu
        dropdown.addEventListener('mouseout', function () {
            const dropdownContent = this.querySelector('.dropdown-content');
            if (dropdownContent) {
                dropdownContent.style.display = 'none';
            }
        });
    });
});