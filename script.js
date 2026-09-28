emailjs.init({
    publicKey: "YOUR_PUBLIC_KEY"
});

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", this)
        .then(function() {
            alert("Message sent successfully!");
            document.getElementById("contact-form").reset();
        })
        .catch(function(error) {
            alert("Failed to send message. Please try again.");
            console.log(error);
        });
});

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", function() {
        document.querySelectorAll(".nav-links a").forEach(item => {
            item.classList.remove("active");
        });
        this.classList.add("active");
    });
});