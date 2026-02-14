
// The "Structure" (Data Integrity)
class Submission {
    constructor(id, content) {
        this.id = id;
        this.content = content;
        this.timestamp = new Date().toLocaleString();
    }
}

// The "Storage" (The good idea)
const database = [];

function handleSubmit() {
    // 1. Get input value
    const userInput = document.getElementById('userField').value;
    
    // 2. Create a "New Instance" (This is your 'new variable')
    const newEntry = new Submission(database.length + 1, userInput);
    
    // 3. Store it
    database.push(newEntry);
    
    console.log("Data stored! Current count:", database.length);
    console.table(database); 
}