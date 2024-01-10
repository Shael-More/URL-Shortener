const originalUrl = document.getElementById('original-url');
const shortenUrl = document.getElementById('shorten-url'); 
const reloadBtn = document.getElementById('reload-btn');
const shortBtn = document.getElementById('short-btn');

shortBtn.addEventListener("click", shortURL);

function shortURL() {
    let original = originalUrl.value;
    
    let apiURL = "https://tinyurl.com/api-create.php?url=" + encodeURIComponent(original);

    

    fetch(apiURL)
    .then(response => response.text())
    .then(data => {
        shortenUrl.value = data;
    }).catch (error => {
        shortenUrl.value = "Error : Unable to shorten URL! "
    })
}

reloadBtn.addEventListener("click", () => {
    location.reload();
})