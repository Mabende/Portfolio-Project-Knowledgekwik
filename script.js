// Sample quiz questions for each topic
const quizData = {
    history: [
        { question: "Question 1 for History", answer: "Answer 1" },
        { question: "Question 2 for History", answer: "Answer 2" },
        // Add more questions for History
    ],
    technology: [
        { question: "Question 1 for Technology", answer: "Answer 1" },
        { question: "Question 2 for Technology", answer: "Answer 2" },
        // Add more questions for Technology
    ],
    literature: [
        { question: "Question 1 for Literature", answer: "Answer 1" },
        { question: "Question 2 for Literature", answer: "Answer 2" },
        // Add more questions for Literature
    ],
    // Repeat for other topics
};

// Function to get URL parameter
function getUrlParameter(name) {
    name = name.replace(/[[]/, '\\[').replace(/[\]]/, '\\]');
    let regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    let results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

// Function to initialize quiz
function initializeQuiz() {
    const topic = getUrlParameter('topic');
    const topicTitleElement = document.getElementById('topicTitle');
    const questionContainer = document.getElementById('questionContainer');

    if (topic && quizData.hasOwnProperty(topic)) {
        const questions = quizData[topic];

        topicTitleElement.textContent = topic.charAt(0).toUpperCase() + topic.slice(1); // Capitalize first letter

        // Clear previous questions
        questionContainer.innerHTML = '';

        questions.forEach((q, index) => {
            const questionElement = document.createElement('div');
            questionElement.classList.add('question');
            questionElement.innerHTML = `
                <h3>Question ${index + 1}</h3>
                <p>${q.question}</p>
                <p><strong>Answer:</strong> ${q.answer}</p>
            `;
            questionContainer.appendChild(questionElement);
        });
    } else {
        // Handle invalid topic or no topic provided
        const errorMessage = topic ? `Invalid topic: ${topic}` : 'No topic selected';
        alert(errorMessage);
        window.location.href = 'index.html'; // Redirect to home page
    }
}

// Event listener for next button (if needed)
document.getElementById('nextButton').addEventListener('click', function() {
    // Logic for moving to the next question or quiz flow
    // Add your logic here if the quiz should be interactive
});

// Initialize quiz when the page loads
initializeQuiz();
