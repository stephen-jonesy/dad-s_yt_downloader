var convertBtn = document.querySelector('.convert-button');
var URLinput = document.querySelector('.URL-input');
convertBtn.addEventListener('click', () => {
    console.log(`URL: ${URLinput.value}`);
    sendURL(URLinput.value);
});
console.log(window.location.href);
function sendURL(URL) {
    window.location.href = `${window.location.href}download?URL=${URL}`;
}