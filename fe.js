window.onload = function() {
    alert("Welcome to my Portfolio!");
}

function toggleSkills1(event) {
    const extraSkills1 = document.getElementById("extraSkills1");
    const button = event.target;
    const displayStyle = window.getComputedStyle(extraSkills1).display;

    if (displayStyle === "none") {
        extraSkills1.style.display = "block";
        button.innerHTML = "Hide";
    } else {
        extraSkills1.style.display = "none";
        button.innerHTML = "More...";
    }
}

const quotes = [
    "Porramin Meeyam",
    "Student id : 65120501010"
];

function changeQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quoteDisplay').innerText = quotes[randomIndex];
}