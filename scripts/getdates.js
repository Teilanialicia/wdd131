const currentYear = document.querySelector("#currentYear")
const today = new Date();
const lastModified = document.querySelector("#lastModified")

currentYear.textContent = "©" + today.getFullYear() + currentYear.textContent

lastModified.textContent = lastModified.textContent + " " + today.getDate() + "/0" + (today.getUTCMonth() + 1) + "/" +  today.getFullYear() 