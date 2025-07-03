import { readFile } from "node:fs/promises"

async function Create()
{

}

async function Read(path) {
    try
    {
        const asyncRead = await readFile(path, "utf8")
        return asyncRead;
    }
    catch (err)
    {   
        return err;
    }
}

async function Update() {

}

async function Delete() {

}

const res = await Read("../DB/TestingFile.txt");
console.log(res);

