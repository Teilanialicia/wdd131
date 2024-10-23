let submissions = Number(window.localStorage.getItem("counterKey")) || 0;
ptag = document.getElementById("counter")

// if else 
if (submissions !== 0) {
	ptag.textContent = `have submitted a review this number of times: ${submissions}`;
} else {
	ptag.textContent = `This is your first visit. 🥳 Welcome!`;
}

// counter
submissions++;

// creates, saves or sets the value for the counterKey key, with the value of the submissions variable
window.localStorage.setItem("counterKey", submissions);