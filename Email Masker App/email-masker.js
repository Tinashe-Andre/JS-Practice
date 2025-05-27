function maskMail(email){
    let indexOfAt = email.indexOf("@");
    let domain = email.slice(indexOfAt,  email.length);
    let name = email.slice(0, indexOfAt);

    if (name.length > 3){
        let mask =  name[0] + "*".repeat(name.length - 1);
        return mask + domain;
    } else{
        let mask =  name[0] + "*".repeat(name.length - 2) + name[name.length -1];
        return mask + domain;
    }   
}

function handleMask() {
    const input = document.getElementById("email").value;
    const result = maskMail(input);
    document.getElementById("result").textContent = result;
}

