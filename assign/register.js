window.onload = pageLoad;
function pageLoad(){
	var form = document.getElementById("myRegister");
    form.onsubmit = validateForm;
}

function validateForm() {
    let form = document.forms["myRegister"]
    let errorMsg = document.getElementById("errormsg")

    if (form["firstname"].value == "" || form["lastname"].value == "")
    {
        errorMsg.innerHTML = "Please fill in all the forms.";
        return false;
    }

    if (form["gender"].value == "")
    {
        errorMsg.innerHTML = "Please fill in all the forms.";
        return false;
    }

    if (form["bday"].value == "")
    {
        errorMsg.innerHTML = "Please fill in all the forms.";
        return false;
    }    

    if (form["username"].value == "")
    {
        errorMsg.innerHTML = "Please fill in all the forms.";
        return false;
    }

    if (form["password"][0].value == "" || form["password"][1].value == "")
    {
        errorMsg.innerHTML = "Please fill in all the forms.";
        return false;
    }

    if (form["password"][0].value != form["password"][1].value)
    {
        errorMsg.innerHTML = "Password doesn't match.";
        return false;
    }
}