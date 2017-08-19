function initiate() {
    
    document.getElementById("fisico").checked = true;
    document.getElementById("juridico").checked = false;   
    clientetype();
}

function clientetype(){
    var isFisico = document.getElementById("fisico").checked;
    
    if(isFisico){
        document.getElementById("cnpj").disabled = true;        
        document.getElementById("cpf").disabled = false;
    } else {
        document.getElementById("cnpj").disabled = false;
        document.getElementById("cpf").disabled = true;
    }
}