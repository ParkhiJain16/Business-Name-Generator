// /*
// Adjectives:-
// Crazy 
// Amazing
// Fire

// Shop Name:-
// Engine
// Food
// Garments

// Another Word
// Bros
// Limited
// Hub

// */

function Enter(){
    const add ={
        name1 : "Crazy",
        name2 : "Amazing",
        name3: "Fire"
    }
    const sh ={
        sh1 : "Engine",
        sh2 : "Food",
        sh3 : "Garments"
    }
    const an ={
        an1 : "Bros",
        an2 : "Limited",
        an3 : "Hub"
    }
    
    let random = Math.random();
    let first , second, third;
    if(random<0.33){
        first = "Crazy";
    }
    else if(random<0.66 && random>=0.33){
        first = "Amazing";
    }
    else{
        first = "Fire";
    }
    random = Math.random();
    if(random<0.33){
        second = "Engine";
    }
    else if(random<0.66 && random>=0.33){
        second = "Food";
    }
    else{
        second = "Garments";
    }
    random = Math.random();
    if(random<0.33){
        third = "Bros";
    }
    else if(random<0.66 && random>=0.33){
        third = "Limited";
    }
    else{
        third = "Hub";
    }
    
    let buss = `${first} ${second} ${third}`;
    // alert("Bussiness Name generated: " + buss);
    // console.log("Generated Business Name is: ",buss);
    document.getElementById("output").innerText = "Generated Business Name: " + buss;


}

