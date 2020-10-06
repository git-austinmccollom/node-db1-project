const db = require("./dbConfig.js");

module.exports = {
  get,
  insert,
  getById,
  update,
  remove
};

//CRUD
//Create
async function insert(account) {
  const id = await db("accounts").insert(account);
  return getById(id[0]);
}

//Read
function get() {
  return db("accounts");
}

function getById(id) {
  return db("accounts").where({ id }).first();
}

//Update

function update(id, changes) {
  return db("accounts").where({ id }).update(changes);
}

//Delete

function remove(id) {
    return db("accounts").where({ id }).del()
}
