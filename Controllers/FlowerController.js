var mysql = require('mysql2')

class FlowerController {

    async index(req,res){
        var con = mysql.createConnection({
            host : 'localhost',
            user : "root",
            password : "mt2109",
            database : 'shophoa'

        })
        var listFlowers = await new Promise((resolve,rejects)=>{
            con.query('SELECT*FROM flower',function(err,result){
                if(err)rejects(err);
                resolve(result)
            })
            
        })
        res.send(listFlowers)
    }
}

module.exports = new FlowerController() ; 