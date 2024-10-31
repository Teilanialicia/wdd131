
// ham button styling 

const mainnav = document.querySelector(".nav")
const hambutton = document.querySelector(".menu")

// this is the on-click event
hambutton.addEventListener("click", () => {
    mainnav.classList.toggle("show");
    // this toggles by having an "X" when list is extended
    hambutton.classList.toggle("show");
});

const currentYear = document.querySelector("#currentYear")
const today = new Date();
const lastModified = document.querySelector("#lastModified")

currentYear.textContent = "©" + today.getFullYear() + currentYear.textContent

lastModified.textContent = lastModified.textContent + " " + today.getDate() + "/" + (today.getUTCMonth() + 1) + "/" +  today.getFullYear()