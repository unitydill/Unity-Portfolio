// Contact Form

const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const subject = encodeURIComponent("Portfolio Message from " + name);

    const body = encodeURIComponent(
        "Name: " + name +
        "\nEmail: " + email +
        "\n\nMessage:\n" + message
    );

    window.location.href =
        "mailto:UnityDill@gmail.com?subject=" + subject + "&body=" + body;

});

// CHATBOT

const chatbot = document.getElementById("chatbot");
const openChat = document.getElementById("open-chat");
const closeChat = document.getElementById("close-chat");
const sendChat = document.getElementById("send-chat");
const chatbotInput = document.getElementById("chatbot-input");
const chatbotMessages = document.getElementById("chatbot-messages");

// Open chatbot
openChat.addEventListener("click", function () {
    chatbot.style.display = "block";
    openChat.style.display = "none";
});

// Close chatbot
closeChat.addEventListener("click", function () {
    chatbot.style.display = "none";
    openChat.style.display = "block";
});

// Send message
function sendMessage() {

    const question = chatbotInput.value.trim();

    if (question === "") {
        return;
    }

    // Display user's message
    const userMessage = document.createElement("p");
    userMessage.classList.add("user-message");
    userMessage.textContent = question;
    chatbotMessages.appendChild(userMessage);

    // Find chatbot response
    const lowerQuestion = question.toLowerCase();
    let response;

    if (lowerQuestion.includes("skill")) {
        response =
            "Unity's skills include enterprise networking, cybersecurity, security engineering, IPv4 and IPv6, SD-WAN, MPLS, network segmentation, Zero Trust, packet analysis, and cloud technologies.";

    } else if (
        lowerQuestion.includes("experience") ||
        lowerQuestion.includes("faa") ||
        lowerQuestion.includes("intern")
    ) {
        response =
            "Unity has professional experience as an Engineering Enterprise Solutions Intern with the FAA, where she has gained experience with security engineering, network infrastructure, cybersecurity, technical documentation, and infrastructure modernization.";

    } else if (
        lowerQuestion.includes("education") ||
        lowerQuestion.includes("school") ||
        lowerQuestion.includes("college") ||
        lowerQuestion.includes("degree")
    ) {
        response =
            "Unity studies Computer Technology at Bowie State University with a concentration in Network Enterprise Infrastructure.";

    } else if (
        lowerQuestion.includes("project") ||
        lowerQuestion.includes("wireshark") ||
        lowerQuestion.includes("delta") ||
        lowerQuestion.includes("azure")
    ) {
        response =
            "Unity's portfolio projects include Wireshark Network Traffic Analysis, a Delta Air Lines Enterprise Network Design, and Microsoft Azure Cloud Infrastructure projects.";

    } else if (
        lowerQuestion.includes("contact") ||
        lowerQuestion.includes("email")
    ) {
        response =
            "You can contact Unity using the Contact section of this portfolio.";

    } else {
        response =
            "I can answer questions about Unity's skills, experience, education, projects, or contact information.";
    }

    // Display chatbot response
    const botMessage = document.createElement("p");
    botMessage.classList.add("bot-message");
    botMessage.textContent = response;
    chatbotMessages.appendChild(botMessage);

    // Clear input
    chatbotInput.value = "";

    // Scroll to newest message
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

// Send button
sendChat.addEventListener("click", sendMessage);

// Allow Enter key to send
chatbotInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});