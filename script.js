function validation(){
    var name = document.getElementById("name").value;
    var name2 = document.getElementById("name2").value;
    var education = document.getElementById("education").value;
    var error_msg = document.getElementById("error_msg");
    var text;

    error_msg.style.padding = "10px"
    if(name.length <=0){
        text = ("Моля, въведете Вашето име");
        error_msg.innerHTML = text;
        return false;
    }
    if(name2.length <=0){
        text = ("Моля, въведете Вашата фамилия");
        error_msg.innerHTML = text;
        return false;
    }
    if(education.value = "0"){
        text = ("Моля, изберете степен на образование");
        error_msg.innerHTML = text;
        return false;
    }
    return false;
}
