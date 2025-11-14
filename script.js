document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("btn");
    button.addEventListener("click", function() {
        const name = document.getElementById("name").value;
        const age = document.getElementById("age").value;
        const email = document.getElementById("email").value;
        const contact = document.getElementById("contact").value;

        const message = `Hello ${name}! You are ${age} years old. Your email is ${email} and your contact number is ${contact}.`;

        document.getElementById("Result").textContent = message;
    });
});