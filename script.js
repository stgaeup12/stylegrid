function sendMail(){
    let parms = { 
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        subject : document.getElementById("subject").value,
        message : document.getElementById("message").value,
    }

    emailjs.send("service_y4bq6vj","template_uyyf48g",parms).then(alert("Email Sent!"))
}
let index = 0;

function slide(direction) {
    const carousel = document.getElementById('carousel');
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;

    index += direction;

    if (index < 0) {
        index = totalItems - 1;
    } else if (index >= totalItems) {
        index = 0;
    }

    carousel.style.transform = `translateX(${-index * 100}%)`;
}
