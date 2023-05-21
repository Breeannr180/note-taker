const router = require('express').Router();
const fs = require("fs");


//Route to handle API Requests for retrieving saved notes
router.get('/notes', (req, res) => {
    // Read the contents of the JSON file
     fs.readFile("./db/db.json", "utf8", function(err, data) {
        
        // Throw error code of there was issue reading db.json
        if (err) throw err;

        // Pass parsed data from db.json as response to be rendered in index.js 
        res.json(JSON.parse(data));

    });
});

//Route to handle API requests for saving new notes
router.post('/notes', (req, res) => {
    // Read the contents of the JSON file
    fs.readFile("./db/db.json", "utf8", function(err, data) {

        // Throw error code if error reading db.json
        if (err) throw err;

        // Parse and store db.json data to raw
        let raw = JSON.parse(data);

        // Push user's new note content to raw
        raw.push(req.body);

        // Use fs.writeFile to write raw array data to db.json  
        fs.writeFile("./db/db.json", JSON.stringify(raw), function(err) {

            // Throw error code of there was issue writing to db.json
            if(err) return err;

            // log "write success" to console/terminal
            console.log("write success");

        });
    });
     // End response process
     res.end();
});

// Route to handle API requests for deleting notes
router.delete('/notes/:id', (req, res) => {
      // Store id of user-selected note for deletion 
      let noteId = req.params.id;

      // read file
      fs.readFile("./db/db.json", "utf8", function(err, data) {
  
          // Throw error code if issue reading db.json
          if (err) throw err;
  
          // Parse and store db.json data to raw
          let raw = JSON.parse(data);
  
          // Loop through the raw
          for (let i = 0; i < raw.length; i++) {
  
              // See if the user selected id matches any of the id's in raw
              if (noteId == raw[i].id) {
  
                  // If the id's match, splice the indexed note out of raw 
                  raw.splice(i,1);
  
                  // write raw array data to db.json  
                  fs.writeFile("./db/db.json", JSON.stringify(raw), function(err) {
  
                      // Throw error code if issue reading db.json
                      if (err) throw err;
  
                      // log "note deleted" to console/terminal
                      console.log("note deleted");
  
                  });
  
              }
  
        }
          // End response process
      res.end(); 
  
    });
      
      
});

module.exports = router;