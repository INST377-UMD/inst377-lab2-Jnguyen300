function validateCheck(){
    var note = document.getElementById("note").value;

    var invalidCharacters = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;

    if(invalidCharacters.test(note)){
        alert("No Special Characters Allowed. Remove Them Please.");
        return false;
    }

    window.location.href = "success.html";
    return false;
}