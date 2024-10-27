// loadFooter.js
function loadFooter() {
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-container').innerHTML = data;
        });
}

// Call this function on page load
window.addEventListener('load', loadFooter);