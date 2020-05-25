let paragraph = document.getElementById("paragraph")
let button = document.getElementById("button")
let output = document.getElementById("output");

button.addEventListener('click', () => {
    let count = 0;
    
    paragraph.value.toLowerCase().split('').map(char => {
        if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u') {
            count++;
        }
    })
    output.innerHTML = 5;
    
})