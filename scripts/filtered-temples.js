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
    // this toggles by having an "X" when list is extended
    hambutton.classList.toggle("show");
});

// below is filtered temple array stuff

const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Add more temple objects here...
    {
      templeName: "Adelaide Australia Temple",
      location: "Adelaide, Australia",
      dedicated: "2000, June, 3",
      area: 10700,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/adelaide-australia/400x225/adelaide-australia-temple-lds-866420-wallpaper.jpg"
    },
    {
        templeName: "Edmonton Alberta Temple",
        location: "Edmonton, Alberta, Canada",
        dedicated: "1999, December, 11",
        area: 10700,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/edmonton-alberta/400x250/edmonton-alberta-temple-lds-83329-wallpaper.jpg"
    },
    {
        templeName: "Fort Lauderdale Florida Temple",
        location: "Fort Lauderdale, Florida, United States",
        dedicated: "2014, May, 4",
        area: 30500,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/fort-lauderdale-florida/400x250/fort-lauderdale-florida-temple-1220611-wallpaper.jpg"
    }
  ];

  // variables for filter function 

  const newLink = document.querySelector("#new");
  const oldLink = document.querySelector("#old");
  const bigLink = document.querySelector("#big");
  const smallLink = document.querySelector("#small");
  const allLink = document.querySelector("#all");

  // creating event, anonymous function for new temples must use "" around numbers

  newLink.addEventListener("click", () => (
    newTempleCard(temples.filter(temple => temple.dedicated > "2000"))
  ));

// creating all the other links old below
  oldLink.addEventListener("click", () => (
  newTempleCard(temples.filter(temple => temple.dedicated < "1900"))
  ));

// big
  bigLink.addEventListener("click", () => (
    newTempleCard(temples.filter( temple => temple.area > 90000))
  ));

// small
  smallLink.addEventListener("click", () => (
    newTempleCard(temples.filter( temple => temple.area < 10000))
  ))

// all
  allLink.addEventListener("click", () => (
    newTempleCard(temples.filter( temple => temple.templeName != NaN))
  ));

// QESUTION FOR CHAT GPT: what is valid syntax for an arrow function, and shwo me use cases?

// Loop through the array and create "temple cards" for each temple by displaying:
// The name of the temple.
// The location of the temple.
// The date the temple was dedicated.
// The total area of the temple in square feet.
// The provided image of the temple (an absolute address). Make sure to provide an appropriate alt value such as the name of the temple.
// Use native lazy loading to each temple image

newTempleCard(temples);

function newTempleCard(temples){
  document.querySelector(".image-grid").innerHTML = ""
    temples.forEach(temple => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p"); 
        let img = document.createElement("img");

        name.textContent = temple.templeName;
        location.textContent = temple.location;
        dedication.textContent = temple.dedicated;
        area.textContent = temple.area;
        img.textContent = temple.imageUrl;
        img.setAttribute("src", temple.imageUrl)
        img.setAttribute("alt", `Picture of the !{temple.temple.Name}`);
        img.setAttribute("loading", "lazy");
        img.setAttribute("width", "175vw");
        
        // append the newly created temple elements and their content to the cards 
        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);  

        // append cards to their parent class to div "image-grid"

        document.querySelector(".image-grid").appendChild(card);
    });

};



