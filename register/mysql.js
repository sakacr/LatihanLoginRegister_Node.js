const mysql = require('mysql');

db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db_coba2',
    multipleStatements: true
});

db.connect(function(err){
    if (err) throw err;
    else{
        console.log('Koneksi Berhasil!');
    }
});

module.exports = db;
