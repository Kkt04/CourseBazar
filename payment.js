function getCourseName() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('course');
}
const courseName = getCourseName();
if (courseName) {
    document.getElementById('course-name').innerText = `You are enrolling in: ${courseName.charAt(0).toUpperCase() + courseName.slice(1)}`;
}

document.getElementById('payment-form').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('success-message').style.display = 'block';  
});
alert("Payment Successfully Completed");