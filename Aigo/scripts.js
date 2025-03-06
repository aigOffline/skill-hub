document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your message! 🍌 We\'ll get back to you soon!');
});

// Chart.js for Analytics
const ctx = document.getElementById('bananaChart').getContext('2d');
const bananaChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [{
            label: 'Banana Sales',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: 'rgba(94, 174, 255, 0.6)',
            borderColor: 'rgba(94, 174, 255, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});