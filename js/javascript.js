window.app = new Controller();




//Game 1 - Acerte o numero
if (app.el.inputNumber) {
    app.el.inputNumber.value = Math.floor(Math.random() * 10)
    app.el.inputAnswer.focus();


    var audioAcertou = new Audio('../audio/acertou.mp3');
    var audioErrou = new Audio('../audio/errou.mp3');

    //Assim que digita o numero fica estucando a tecla enter
    //assim que teclar ele ativa o click do btnCheck
    app.el.inputAnswer.addEventListener('keyup', (e) => {
        if (e.keyCode === 13) {
            event.preventDefault();
            app.el.btnCheck.click();
        }
    })

    app.el.btnCheck.addEventListener('click', (e) => {

        console.log('click')

        if (app.el.inputNumber.value == app.el.inputAnswer.value) {

            console.log('aqui')

            app.el.imgOk.style.display = 'block';
            audioAcertou.play();  
            
        } else {

            
            app.el.imgNo.style.display = 'block';
            audioErrou.play();  
    
        }
        
    
    })

    if(app.el.btnReload){

        app.el.btnReload.addEventListener('click', (e) => {
            location.reload();
        })
    }

}





