// Get references to elements
const toggleOpenButton = document.getElementById('toggleOpen');
const toggleCloseButton = document.getElementById('toggleClose');
const sidebar = document.getElementById('collapseMenu');

// Function to open the sidebar
function openSidebar() {
    sidebar.classList.remove('hidden');
}

// Function to close the sidebar
function closeSidebar() {
    sidebar.classList.add('hidden');
}

// Event listener for open button click
toggleOpenButton.addEventListener('click', openSidebar);

// Event listener for close button click
toggleCloseButton.addEventListener('click', closeSidebar);
