const sqlServer = require("mssql");

const sqlServerConfig = {
    user: "sa",
    password: "12345SQL",
    database: "Biblioteca",
    server: "DESKTOP-BESJA9S",
    options: {
        encrypt : false,
        instanceName: 'SQLEXPRESS'
    }
};

const getconnection = async () => {
    try {
        // make sure that any items are correctly URL encoded in the connection string
        await sqlServer.connect(sqlServerConfig);
        //  const result = await sql.query`select * from mytable where id = ${value}`
        //  console.dir(result)
        console.log("Conexión establecida");
    } catch (err) {
        // ... error checks
        console.log(err);
        console.log("Conexión fallida");
    }
};

getconnection();
