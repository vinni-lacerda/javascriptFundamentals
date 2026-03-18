const person = {
    name: "Vini",
    age: 28,
    job: "Developer",
    adresses: [
        {type: "on-site work", street: "Tancredo neves, prime work", city: "Salvador"},
        {type: "home office", street: "Faria Lima", city: "São Paulo"}
    ]  
};

// console.log(person.adresses);

for(let i = 0; i<person.adresses.length; i++){
    console.log(person.adresses[i]);
    
};

