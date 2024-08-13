
var typeData = new Typed(".role", {
    strings: [
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    ],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 1000,
});
function toggleMenu(){
const menu = document.querySelector(".menu-links");
menu.classList.toggle("open");
}
function sendmail(){
    event.preventDefault();
    var parama={
      from_name : document.getElementById("name").value,
      email_id : document.getElementById("email").value,
      message : document.getElementById("message").value
    }
    console.log(parama);
    emailjs.send("service_nrcgogh", "template_nm7gji9", parama).then(function(res){
      alert("email sent successfully")
    })
  }