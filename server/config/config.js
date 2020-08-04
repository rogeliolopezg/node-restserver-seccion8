//===========================
//      Puerto
//===========================

process.env.PORT = process.env.PORT || 3000;




//===========================
//      Entorno
//===========================

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//===========================
//      Bases de Datos
//===========================

let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = 'mongodb+srv://cafe-user:nGuhL1Gh2dv6bizY@cluster0.xj7yy.mongodb.net/cafe?retryWrites=true&w=majority';
}

process.env.URLDB = urlDB;