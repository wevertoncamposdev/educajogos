window.app = new Controller();



//Game 1 - Acerte o numero
if (app.el.inputNumber) {
    app.el.inputNumber.value = Math.floor(Math.random() * 10)
    app.el.inputAnswer.focus();

    //Assim que digita o numero fica estucando a tecla enter
    //assim que teclar ele ativa o click do btnCheck
    app.el.inputAnswer.addEventListener('keyup', (e) => {
        if (e.keyCode === 13) {
            event.preventDefault();
            app.el.btnCheck.click();
        }
    })

    app.el.btnCheck.addEventListener('click', (e) => {


        if (app.el.inputNumber.value == app.el.inputAnswer.value) {
            
            app.el.labelResult.innerHTML = 'Parabéns';  
            
        } else {

            app.el.labelResult.style.color = 'red';
            app.el.labelResult.innerHTML = 'Não foi dessa vez';  
    
        }
        
    
    })

    if(app.el.btnReload){

        app.el.btnReload.addEventListener('click', (e) => {
            location.reload();
        })
    }

}





