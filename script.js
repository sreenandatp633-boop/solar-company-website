function toggleMenu() {
    document.getElementById("navigation").classList.toggle("show");
}

document.querySelectorAll("#navigation a").forEach(function(link) {
    link.addEventListener("click", function() {
        document.getElementById("navigation").classList.remove("show");
    });
});

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let interest = document.getElementById("interest").value;
    let message = document.getElementById("message").value;

    let enquiry =
        "Hello MAXVOLT SOLAR!" +
        "\nName: " + name +
        "\nPhone: " + phone +
        "\nEnquiry: " + interest +
        "\nMessage: " + message;

    let whatsappURL =
        "https://wa.me/919605476947?text=" +
        encodeURIComponent(enquiry);

    window.open(whatsappURL, "_blank");
});