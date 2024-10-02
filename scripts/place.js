// code for footer here

// code for windchill
//  add wcf id in html span tag in weatehr card
const wcf =  document.querySelector("#wcf");

function windchill(temp, speed){
    // can use chat gpt to look up formula
    //  example "formula to calculate windchil in celsiu if given the temp and speed"
    return 13.12 + ((0.621 * temp)) -(11.37 * Math.pow(speed, 0.16)) 

};

//  ALSO STUDY LOGIC FOR THIS THE USING CHAT GPT and searches
let tempC  = 10;
let speed = 5;
// eventually you will not put in values put pull them in api 
if (tempC <= 10 && speed > 4.8){

} else {
    wcf.textContent = "N/A"
}

