

// The first function that runs to populate the JSON
export function startJSON(start_time, end_time, happiness_level) {
    const fs = require('fs');

    // Creating the information array to insert into the JSON
    var info = [
        { 
            "StartTime": start_time,
            "EndTime": end_time,
            "Quality": happiness_level
        }
    ];

    // Adding the info to the JSON file
    fs.writeFile("csvjson.json", JSON.stringify(info, null, 2), function(err){
        if (err) throw err;
        console.log('The "data to add" was added to file!');
    });
}



// The function for appending to the JSON
export function appendJSON(start_time, end_time, happiness_level) {
    const fs = require('fs');

    // Creating the information array to insert into the JSON
    var info = { 
        "StartTime": start_time,
        "EndTime": end_time,
        "Quality": happiness_level
    };
    
    // Reading the data and then overwriting that data
    fs.readFile('csvjson.json', function (err, data) {
        var json = JSON.parse(data);
        json.push(info);
    
        fs.writeFile("csvjson.json", JSON.stringify(json, null, 2), function(err){
            if (err) throw err;
            console.log('The "data to append" was appended to file!');
        });
    })

    
}

