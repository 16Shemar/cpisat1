// Navigation
var navLinks = document.querySelectorAll('nav ul li a');
var sections = document.querySelectorAll('section');

for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', function (e) {
        e.preventDefault();
        var targetId = this.getAttribute('href').substring(1);
        for (var j = 0; j < sections.length; j++) {
            sections[j].classList.remove('active');
        }
        document.getElementById(targetId).classList.add('active');
    });
}

// Search functionality
function searchItems() {
    var searchTerm = document.getElementById('search-input').value.toLowerCase();
    alert('Searching for: ' + searchTerm);
    // Implement actual search functionality here
}

// Product list
var products = [
    { name: 'Hammer', price: 159.99, image: 'hammer.jpg' },
    { name: 'Screwdriver Set', price: 249.99, image: 'screwdriver_set.jpg' },
    { name: 'Power Drill', price: 899.99, image: 'power_drill.jpg' },
    { name: 'Tape Measure', price: 99.99, image: 'tape_measure.jpg' }
];

var productList = document.getElementById('product-list');
for (var i = 0; i < products.length; i++) {
    var productDiv = document.createElement('div');
    productDiv.classList.add('product');
    productDiv.innerHTML = `
        <img src="${products[i].image}" alt="${products[i].name}" style="width:100px;height:auto;">
        <h3>${products[i].name}</h3>
        <p>Price: R${products[i].price}</p>
    `;
    productList.appendChild(productDiv);
}


// Login/Register form toggle
function toggleForms() {
    var loginForm = document.getElementById('login-form');
    var registerForm = document.getElementById('register-form');
    if (loginForm.style.display === 'none') {
        loginForm.style.display = 'flex';
        registerForm.style.display = 'none';
    } else {
        loginForm.style.display = 'none';
        registerForm.style.display = 'flex';
    }
}

// Form submission (for demonstration purposes)
document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Login functionality not implemented in this demo.');
});

document.getElementById('register-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Registration functionality not implemented in this demo.');
});
