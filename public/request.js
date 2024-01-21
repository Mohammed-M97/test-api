

// https://catfact.ninja/fact
const button = document.querySelector('.centered-button');

button.addEventListener("click", () => {
    fetch('https://catfact.ninja/fact')
    .then(response => response.json())
    .then((res) => {
        let fact = res.fact
        document.getElementById("response-output").innerHTML = fact
    })

});
