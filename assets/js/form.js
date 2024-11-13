// partnerForm.js

// Initialize EmailJS
(function () {
    emailjs.init("oiLrxl5keniwuxA66"); // Replace with your EmailJS public key
})();

// Function to handle form submission
document.getElementById("partnerForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting normally

    // Collect form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const twitter = document.getElementById("twitter").value;
    const telegram = document.getElementById("telegram").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    // Prepare parameters for EmailJS
    const templateParams = {
        user_name: name,
        user_email: email,
        user_twitter: twitter,
        user_telegram: telegram,
        subject: subject,
        message: message
    };

    // Send email using EmailJS
    emailjs.send("service_va9i4bd", "template_380qcj7", templateParams)
        .then(function(response) {
            alert("Message sent successfully!");
            console.log("Email sent successfully:", response.status, response.text);
            document.getElementById("partnerForm").reset(); // Clear form
        }, function(error) {
            alert("Failed to send message. Please try again.");
            console.error("Failed to send email:", error);
        });
});
