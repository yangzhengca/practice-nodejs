// const greet=(firstName,secondName)=>{
//     console.log(`Hi ${firstName} ${secondName}`)
// }
// greet('Ethan','Hunt');

// Hi Ethan Hunt


var third=()=>{
    console.log('This code gets executed after the greet function call');
};

var greet=(firstName,secondName,thirdP)=>{
    console.log(`Hi ${firstName} ${secondName}`);
    thirdP();
}
greet('Ethan','Hunt',third);

// Hi Ethan Hunt
// This code gets executed after the greet function call