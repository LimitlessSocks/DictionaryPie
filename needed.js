const fs = require("fs");

console.log("Reading file...");
const nexusDb = JSON.parse(fs.readFileSync("db.json"));

fs.readdir("./small", (err, files) => {
    console.log("Getting keys...");
    let keys = Object.keys(nexusDb);
    console.log("Mapping names...");
    let fileKeys = files.map(fileName => parseInt(fileName, 10).toString());
    
    console.log("Getting differences...");
    let diffKeys = keys.filter(key => fileKeys.indexOf(key) === -1);
    
    console.log("Writing file...");
    fs.writeFile("ids.json", JSON.stringify(diffKeys),
        () => console.log("done, wrote " + diffKeys.length + " id(s) to ids.json")
    );
});

/*
//CODE TO GET NEXUS IDS
function downloadObjectAsJson(exportObj, exportName){
    var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportObj));
    var downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href",     dataStr);
    downloadAnchorNode.setAttribute("download", exportName + ".json");
    document.body.appendChild(downloadAnchorNode); // required for firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  }
downloadObjectAsJson(Engine.database.cards, "db")
*/