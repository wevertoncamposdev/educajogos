const fs = require('fs');
const assets = ['css', 'js', 'img', 'fonts', 'lib', 'view'];

function make(dir){

    dir.forEach((item)=>{

        fs.mkdir(__dirname + `/${item}`,{recursive:true},(err)=>{
            if(err) throw err;
            console.log('Sucess creating:', item);
        });
    
    })

}

make(assets)


