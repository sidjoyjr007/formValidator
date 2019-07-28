
let password = (value, pwdLen,pwdPattern) => {
    let specialCharPattern=/[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;  //Regex to verify password pattern
    let ErrorArr = {
        value: 'ok',
        length:'ok'
    };
    let errors=[];
    if (value ==='' || value === undefined) { 
        ErrorArr['value'] = "not_ok";
        errors.push("Entered Password not holds good")
     };
    if (value.length < pwdLen) {
         ErrorArr['length'] = "not_ok";
         errors.push(`Entered Password  length must be greater than or equal to ${pwdLen}`)
        };
    if(pwdPattern.specialCharacters===true){ 
        let isConatinSpecialChar=specialCharPattern.test(value);
        if(isConatinSpecialChar){ErrorArr['specialCharacter']=true}
        else{
            ErrorArr['specialCharacter']=false;
            errors.push("Password should contain special charcters")
    }
     }
     if(pwdPattern.capitalLetters===true){
         if(value.toLowerCase()!=value){
            ErrorArr['upperCaseLetter']=true
         }
         else{
            ErrorArr['upperCaseLetter']=false;
            errors.push("Password should contain uppercase letter(s)")

         }
     }
    ErrorArr['errorMessages']=errors;
    return ErrorArr;
}

let email = (value) => {
    let ErrorArr = {
        email: 'not_ok'
    };
    let errors=[];
    let pattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/ //Regex to verify email pattern
    if (pattern.test(value)) {
        ErrorArr['email'] = 'ok';
        let domainPosition = value.lastIndexOf('@');
        ErrorArr['domain'] = value.substr(domainPosition + 1)
    }else{
        errors.push("Entered email is not in valid form")
    }
    ErrorArr['errorMessages']=errors;
    return ErrorArr;
}

let isURLValid=(value)=>{
    let ErrorArr = {};
    let urlPattern=/(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/ //Regex to verify URL pattern
    if(urlPattern.test(value)){
        ErrorArr['validURL']=true
        ErrorArr['errorMessages']=[];
        return ErrorArr;
    }
    else{
        ErrorArr['validURL']=false;
        ErrorArr['errorMessages']="Entered URL is not valid";
        return ErrorArr;
    }
 
}
 
module.exports = {
    password: password,
    email: email,
    isURLValid:isURLValid
}


