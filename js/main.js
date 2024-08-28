document.addEventListener("DOMContentLoaded", function() {
    fetch('menu.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById("menu-placeholder").innerHTML = data;
        })
        .catch(error => console.error('Erro ao carregar o menu:', error));
});
document.addEventListener("DOMContentLoaded", function() {
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer-placeholder").innerHTML = data;
        })
        .catch(error => console.error('Erro ao carregar o footer:', error));
});
document.addEventListener("DOMContentLoaded", function() {
    fetch('pages/menu.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById("index-menu-placeholder").innerHTML = data;
        })
        .catch(error => console.error('Erro ao carregar o menu:', error));
});
document.addEventListener("DOMContentLoaded", function() {
    fetch('pages/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById("index-footer-placeholder").innerHTML = data;
        })
        .catch(error => console.error('Erro ao carregar o footer:', error));
});

