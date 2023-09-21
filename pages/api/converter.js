let fs = require('fs');

export default function createFile(req, res){
    let {method} = req.method

    if(method!== 'POST'){

        let {data} = req.body

        fs.writeFile('pages/test.html',
        `<!DOCTYPE html>
        <html lang="en">
        
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        
        <body>
        ${data}
        </body>
            <script src="index.js"></script>
        </html>
        ` 
         , function(err){
            if(err){
                return res.status(500).send(err);
            }
        });
        
        return res.status(200).send('The file was saved!');
    }

}