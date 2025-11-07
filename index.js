// THIS IS !VIBE CODED (! means not in js )

let admin;
let feedback;

window.onload = () => {
    admin = false;

    if (typeof(Storage) !== undefined) {
        console.log('Warning twin u dont hav local storage')
    }
}

function feedbackAlert() {
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
