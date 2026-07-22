let message = prompt("Enter your message:");

for (let i = 1; i <= 6; i++) {
    document.body.innerHTML += "<h" + i + ">" + message + "</h" + i + ">";
}