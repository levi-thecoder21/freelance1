document.addEventListener('DOMContentLoaded', function() {
    const subbtnn = document.getElementById("subbtn");
    subbtnn.addEventListener("click", (e) => {
        e.preventDefault();
        var emailvar = document.getElementById("subbtn-input").value;
        const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        var message = document.getElementById("message");
        if(emailvar === ""){
            alert("Please enter an email address");
        }
        else if(!emailvar.toLowerCase().match(regex)){
            message.innerText = "enter valid email";
                setTimeout(function() {
                    message.innerText = "";
                }, 5000);
        }
        else {
            if (message) {
                message.innerText = "Thanks for subscribing!";
                setTimeout(function() {
                    message.innerText = "";
                }, 5000);
            }
        }
    });

});
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    } else {
        console.error(`Section with ID '${sectionId}' not found.`);
    }
}
