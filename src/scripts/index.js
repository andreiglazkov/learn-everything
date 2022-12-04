function clickOnButton() {
    alert("Hallo, Welt!");
}

var message = 'I said what\'s up?';
function updateMessage() {
    var el = document.getElementById('header-left-side');

    var name = prompt('Enter your name: ').valueOf();
    el.addEventListener("", el.innerText('Hallo, ' + name + '!'));
}
updateMessage();