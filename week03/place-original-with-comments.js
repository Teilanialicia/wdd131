// code for footer here
const currentYear = document.querySelector("#currentYear")
const today = new Date();
const lastModified = document.querySelector("#lastModified")

currentYear.textContent = "©" + today.getFullYear() + currentYear.textContent

lastModified.textContent = lastModified.textContent + " " + today.getDate() + "/" + (today.getUTCMonth() + 1) + "/" + today.getFullYear()
// code for windchill
//  add wcf id in html span tag in weatehr card

// Wind Chill=13.12+0.6215T−11.37(V 0.16)+0.3965T(V 0.16)
// Where:

// 𝑇
// T is the air temperature in Celsius.
// 𝑉
// V is the wind speed in kilometers per hour (kph).

const wcf =  document.querySelector("#wcf");
let tempC  = 8;
let speedK = 10;

function windchill(tempC, speedK){
    // can use chat gpt to look up formula
    //  example "formula to calculate windchil in celsiu if given the temp and speed"
    return 13.12 + ((0.621 * tempC)) -(speedK * Math.pow(speedK, 0.16))
    
};


//  ALSO STUDY LOGIC FOR THIS THE USING CHAT GPT and searches

// eventually you will not put in values put pull them in api 
if (tempC <= 10 && speedK > 4.8){
    wcf.textContent = windchill(tempC,speedK).toFixed(1)
} else {
    wcf.textContent = "N/A"
}
