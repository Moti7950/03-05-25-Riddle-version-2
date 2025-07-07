import { readFile,writeFile } from "node:fs/promises"
import readlineSync from "readline-sync";


//Utility function
// function MaxId(path) {
//     let counter = 1;
//     // arrayOfObjects = JSON.parse(Read(path))
//     path.forEach(item => {
//         if ("ID" in item) {
//             counter += 1;
//         }
//     });

//     return counter;
// }

async function Create(DBPath, name, TimeStatistics) {
    const templitJson =
    {
        "ID": MaxId(DBPath),
        "name": name,
        "TimeStatistics": TimeStatistics
    };

    console.log("Cehck print from func Create: ", templitJson);
    try {
        await writeFile("../DB/TestingFile.txt", JSON.stringify(templitJson));
        console.log("Write successful!");
    } catch (err) {
        console.error("Error writing file:", err);
    }

}

async function Read(path) {
    try {
        const asyncRead = await readFile(path, "utf8")
        return JSON.parse(asyncRead);
    }
    catch (err) {
        return err;
    }
}

async function Update() {

}

async function Delete() {

}

const res = await Read("../DB/TestingFile.txt");
console.log(res, "\n", "Type:", typeof res);
// const testReadLine = readlineSync.question("Enter name: " )
// console.log("Hi", testReadLine);
// console.log(MaxId(res));c
// Create(res, "Moti", "5")




