let {db} = require("./index");
let knex = require("knex");
let path = require("path");
var mysql = knex({
    client: 'mysql',
    connection: {
        ...db
    },
    pool: { min: 0, max: 7 }
  });

  var sqlite3 = knex({
    client: 'sqlite3',
    connection: {
        filename: "./mydb.sqlite"
    },
    pool: { min: 0, max: 7 }
  });

  class Database {
      static client;
      constructor(){
          if(Database.client){
              return Database.client;
          }
          Database.client = sqlite3;
          this.client = Database.client;
      }
  }

module.exports = new Database().client;


