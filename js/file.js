document.addEventListener("DOMContentLoaded", function() {

    const isIndexPage = location.pathname.endsWith("index.html");
    
    const menuPath = isIndexPage ? "menu.html" : "../menu.html";
    const footerPath = isIndexPage ? "footer.html" : "../footer.html";
    
    fetch(menuPath)
        .then(response => response.text())
        .then(data => {
            document.getElementById("menu-placeholder").innerHTML = data;
        })
        .catch(error => console.error('Erro ao carregar o menu:', error));
    
    fetch(footerPath)
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer-placeholder").innerHTML = data;
        })
        .catch(error => console.error('Erro ao carregar o footer:', error));
});
