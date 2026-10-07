// Learn More button
function learnMore() {
    document.getElementById("services").scrollIntoView({
        behavior: "smooth"
    });
}

// Contact form
function submitForm(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const result = document.getElementById("result");

    result.textContent =
        "Thank you, " + name + "! Your message has been submitted.";

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
}
