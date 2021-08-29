const fs = require("fs");

const nexusDb = JSON.parse(fs.readFileSync("db.json"));

fs.readdir("./small", (err, files) => {
    let keys = Object.keys(nexusDb);
    let fileKeys = files.map(fileName => parseInt(fileName, 10).toString());
    
    let diffKeys = keys.filter(key => fileKeys.indexOf(key) === -1);
    
    fs.writeFile("ids.json", JSON.stringify(diffKeys),
        () => console.log("done, wrote " + diffKeys.length + " id(s) to ids.json")
    );
});

/*
//CODE TO GET NEXUS IDS
(function(){
    let json = JSON.stringify(Engine.database.cards);
    EXT.download(json, "db.json", "text/json")
})();
*/