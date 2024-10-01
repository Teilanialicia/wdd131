// Footer 
const currentYear = document.querySelector("#currentYear")
const today = new Date();
const lastModified = document.querySelector("#lastModified")

currentYear.textContent = "©" + today.getFullYear() + currentYear.textContent

lastModified.textContent = lastModified.textContent + " " + today.getDate() + "/0" + (today.getUTCMonth() + 1) + "/" + today.getFullYear()

// js for the hamburger button effect
// line below is where we are storing the infromation info from html into variables
const mainnav = document.querySelector(".ul")
const hambutton = document.querySelector(".menu")

// this is the on-clock event
hambutton.addEventListener("click", () => {
    mainnav.classList.toggle("show");
    hambutton.classList.toggle("show");
});