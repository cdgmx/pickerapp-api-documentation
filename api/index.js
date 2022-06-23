const $RefParser = require("@apidevtools/json-schema-ref-parser");
const mySchema = require("./openapi.json");
const fs = require('fs');

$RefParser.dereference(mySchema, (err, schema) => {
if (err) {
    console.error(err);
}
else {
  
        fs.writeFile("parsed-openapi.json", JSON.stringify(schema, null, 2), function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("Generated Parsed Schema in parsed-openapi.json");
        });

        fs.writeFile("./postman/schemas/parsed-openapi.json", JSON.stringify(schema, null, 2), function(err) {
            if(err) {
                return console.log(err);
            }
            console.log("Generated Parsed Schema in ./api/postman/schemas/parsed-openapi.json");
        }); 
        
}
})
