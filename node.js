function find(){
    if(document.getElementById('countryCode').value & document.getElementById('phonenumber').value){
        console.log("!! DETAILS AVAILABLE !!");
    }
    else{
        document.getElementById('appBanner').style.background='url("error.png")';
        setTimeout(() => {
            document.getElementById('appBanner').style.background='url("Private-Vault-01.jpg")';
        }, 500);
    }
}