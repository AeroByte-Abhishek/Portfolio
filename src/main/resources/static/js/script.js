window.addEventListener('load', () => {
    setTimeout(() => {
        document.querySelector('.loader-wrapper').style.opacity = '0';
        setTimeout(() => {
            document.querySelector('.loader-wrapper').style.display = 'none';
        }, 500)
    }, 1000);
})


// Typing animation for main terminal
new Typed("#typed-text", {
  strings: [
    "> Initializing profile...\n> System: Online ✅\n> Welcome to my portfolio!\n> Username: Abhishek_Mishra\n> Role: Backend Engineer\n> Skills: Mention below \n> Mission: Write clean code.\n> Explore my projects & skills.\n> Let's connect & collaborate!\n> Enjoy your visit! 😊"
  ].map(str => str.replace(/&/g, "&amp;")),
  typeSpeed: 20,
  startDelay: 500,
  showCursor: true,
  cursorChar: '|',
  smartBackspace: false
});


// Smooth scroll for navigation links
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  if (window.scrollY > 10) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

document.querySelector(".contact-form").addEventListener("submit", function(e){
  const name = document.querySelector("#name").value.trim();
  const email = document.querySelector("#email").value.trim();
  const message = document.querySelector("#message").value.trim();

  if( !name || !email || !message){
    e.preventDefault();
    alert("Please fill in all fields before submitting.");
  }
});