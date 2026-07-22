while (true) {

    let name = prompt("Enter your name:");
    let year = prompt("Enter your birth year:");
    let mobile = prompt("Enter your mobile:");

    if (name.length < 3) {
        alert("❌ Name must be at least 3 letters");
        continue;
    }

    if (year < 1900 || year > 2025) {
        alert("❌ Invalid birth year");
        continue;
    }

    if (mobile.length != 11 || mobile[0] != "0" || mobile[1] != "1") {
        alert("❌ Invalid mobile");
        continue;
    }

    document.body.innerHTML = `
        <h2>✅ Your Data</h2>
        <p>Name: ${name}</p>
        <p>Birth Year: ${year}</p>
        <p>Mobile: ${mobile}</p>
    `;

    break;
} 