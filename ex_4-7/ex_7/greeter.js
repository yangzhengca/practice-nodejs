var third=()=>{
    console.log('This code gets executed after the greet function call');
};

var greet=(firstName,secondName,thirdP)=>{
    console.log(`Hi ${firstName} ${secondName}`);
    thirdP();
}
// greet('Ethan','Hunt',third);

module.exports=greet;