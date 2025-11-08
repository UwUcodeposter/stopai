// THIS IS !VIBE CODED (! means not in js )

let admin;
let feedback;

window.onload = () => {
    admin = false;

    if (typeof(Storage) !== undefined) {
        console.log('Warning twin u dont hav local storage');
    }
}

function UnderConstruction() {
    alert('This part of the website is under constuction')
}

function feedbackAlert() {
    const email = 'fpsgameplaye@gmail.com';
    const subject = "Website Feedback - Automated Message";
    const body = "Please provide your feedback here:\n\n";
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
}

function oldFeedbackAlert() {
    
    if (localStorage.getItem(feedback) === null && feedback === '' | feedback === undefined) {
        feedback = prompt('Feedback...');
        if (admin === true) {
            alert(feedback);
            console.log(`Feedback ${feedback}`);
        }

        localStorage.setItem('feedback', feedback);
    } else alert('No double feedback');
}

function roleAdmin() {
    admin = !admin;
    console.log(`Admin:  ${admin}`);
}