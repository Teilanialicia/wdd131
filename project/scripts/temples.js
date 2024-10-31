var temples = [
    {
        name: "Borobudur",
        address: "Taman Wisata Candi Borobudur, Borobudur, Magelang 56553 Indonesia.",
        imageDescription: "The Borobudur Temple Compounds is one of the greatest Buddhist monuments in the world, and was built in the 8th and 9th centuries AD",
        imagePath: "https://borobudurpark.com/wp-content/uploads/2017/05/Borobudur-000141-768x512.jpg"
    },
    {
        name: "Semu Temple",
        address: "Jalan Raya Solo-Yogyakarta Km 16, Sleman, Central Java",
        imageDescription: "Semu Temple (Candi Sewu) is an 8th-century Buddhist temple (the second largest behind Borobudur) located 800 meters north of Prambanan in Central Java.",
        imagePath: "https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/39/93/f7.jpg"
    },
    {
        name: "Candi Bubra",
        address: "Sleman , Daerah Istimewa Yogyakarta, Klurakbaru, Kabupaten Klaten, Jawa Tengah 57454, Indonesia",
        imageDescription: "Candi Bubrah is a 9th-century Buddhist temple located within the complex of the Prambanan Temple Archaeological Park, in Central Java, Indonesia.",
        imagePath: "https://muylindatravels.com/wp-content/uploads/2023/03/DSC09403-fixcrop800px.jpg.webp"
    },
    {
        name: "Candi Sukuh",
        address: "94FJ+3JC, Tambak, Berjo, Kec. Ngargoyoso, Kabupaten Karanganyar, Jawa Tengah 57793, Indonesia",
        imageDescription: "Candi Sukuh is a 15th-century Javanese-Hindu temple that is located in Berjo, Ngargoyoso district, Karanganyar Regency, Central Java, Indonesia on the western slope of Mount Lawu.",
        imagePath: "https://muylindatravels.com/wp-content/uploads/2023/03/DSC09229-cropfix800px.jpg.webp"
    }
]


document.querySelector(".temples").innerHTML = ""
temples.forEach(temple => {
    // Create a new card and 
    let card = document.createElement("section");
    let name = document.createElement("h2");
    // let address = document.createElement("p");
    let imageDescription = document.createElement("p");
    let image = document.createElement("img");

    name.textContent = temple.name;
    imageDescription.textContent = temple.imageDescription;
    image.setAttribute("src", temple.imagePath)
    image.setAttribute("alt", `Picture of the ${temple.name} temple`);
    image.setAttribute("loading", "lazy");
    image.setAttribute("width", "175vw");

    // append the newly created temple elements and their content to the cards 
    card.appendChild(image);
    card.appendChild(name);
    card.appendChild(imageDescription);

    // append cards to their parent class to div "image-grid"
    document.querySelector(".temples").appendChild(card);
    document.querySelector(".temples").appendChild(document.createElement("section"));
});
