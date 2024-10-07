// Admin messages handling

const adminMessages = document.getElementById('adminMessages');

const sendAdminChatBtn = document.getElementById('sendAdminChatBtn');

const adminChatInput = document.getElementById('adminChatInput');

// Handle admin response

sendAdminChatBtn.addEventListener('click', () => {

    const adminMessage = adminChatInput.value.trim();

    if (adminMessage) {

        displayMessage('Admin', adminMessage);

        saveMessage('Admin', adminMessage);

        adminChatInput.value = '';

    }

});

// Display the message in the admin chatbox

function displayMessage(sender, message) {

    const messageElement = document.createElement('p');

    messageElement.textContent = `${sender}: ${message}`;

    adminMessages.appendChild(messageElement);

}

// Save messages to localStorage

function saveMessage(sender, message) {

    const messages = JSON.parse(localStorage.getItem('chatMessages')) || [];

    messages.push({ sender, message });

    localStorage.setItem('chatMessages', JSON.stringify(messages));

}

// Load saved messages on page load

window.addEventListener('load', () => {

    const savedMessages = JSON.parse(localStorage.getItem('chatMessages')) || [];

    savedMessages.forEach(msg => {

        displayMessage(msg.sender, msg.message);

    });

});