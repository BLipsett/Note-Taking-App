// const db = require("./11-express/public/Develop/db");
// const uuidv4 = require('uuid/v4')
const fs = require("fs")
//C:\Users\lipse\git\Note-Taker\11-express\public\Develop\db\db.json

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
    // API GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases when a user visits a link
    // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
    // ---------------------------------------------------------------------------

    app.get("/api/notes", function (req, res) {
        res.json(db);

    });


    // API POST Requests
    // Below code handles when a user submits a form and thus submits data to the server.
    // In each of the below cases, when a user submits form data (a JSON object)
    // ...the JSON is pushed to the appropriate JavaScript array
    // (ex. User fills out a reservation request... this data is then sent to the server...
    // Then the server saves the data to the tableData array)
    // ---------------------------------------------------------------------------
    app.post("/api/notes", function (req, res) {
        // req.body hosts is equal to the JSON post sent from the user
        // This works because of our body parsing middleware
        let receivedNote = req.body;
        let newID = uuidv4();
        //console.log(newID);
        receivedNote.id = newID;

        db.push(receivedNote);

        res.json(db);
    });

    app.delete("/api/notes/:id", function (req, res) {
        let dbArray = db.filter((item) => {
            //console.log(typeof(parseInt(item.id)))
            //console.log(typeof(parseInt(req.params)))
            if (item.id === req.params.id) {
                return false;
            }
            else {
                return true;
            }
        })
        db.push(dbArray)
        // console.log(newArray)
        console.log(dbArray)
        res.json(db)
    });

}