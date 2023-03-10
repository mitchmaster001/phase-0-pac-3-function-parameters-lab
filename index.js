function introduction (name) {
    console.log(`Hello, ${name}!`);
}
function introductionwithlanguage (name, language){
    console.log(`Hi, my name is ${name} and i am in coding class ${language}.`);
}
function introductionwithlanguageOptional(name, language = "javas"){
    console.log(`Hi, my name is ${name} and i am in coding class ${language}.`);
}

introduction("charles")
introductionwithlanguage("charles", "javascript")
introductionwithlanguageOptional("charles")