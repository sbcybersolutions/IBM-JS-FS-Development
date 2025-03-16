function submitFeedback() {
    // Retrieve values inside the function to get the latest input
    const username = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const job = document.getElementById('job').value;
    const designation = document.getElementById('designation').value;
    const productType = document.getElementById('productType').value;
    const feedback = document.getElementById('feedbackText').value;
    const experience = document.getElementById('userExperience').value; // ✅ Get user experience value

    // Display feedback in the user info section
    document.getElementById('userName').innerText = username;
    document.getElementById('userAge').innerText = age;
    document.getElementById('userEmail').innerText = email;
    document.getElementById('userJob').innerText = job;
    document.getElementById('userDesignation').innerText = designation;
    document.getElementById('userProductChoice').innerText = productType;
    document.getElementById('userFeedback').innerText = feedback;
    document.getElementById('userExperienceDisplay').innerText = experience; // ✅ Display correctly

    // Make the user info section visible
    document.getElementById('userInfo').style.display = 'block';

    // ✅ Show alert AFTER updating the page
    setTimeout(() => {
        alert('Thank you for your valuable feedback');
    }, 100); // Slight delay to ensure visibility
}

// Attach event listener correctly
document.getElementById('submitBtn').addEventListener('click', submitFeedback);

// ✅ Allow pressing "Enter" to submit feedback
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        submitFeedback();
    }
});
