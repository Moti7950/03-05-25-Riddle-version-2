import {Player} from './needOrder/Classes/ClassPlayer.js';
import {Riddles} from './needOrder/Classes/ClassRiddle.js';
import readline from 'readline-sync';

function timeStrTOint(timeStr)
{
    const parts =timeStr.split(":");
    const hours = Number(parts[0]);
    const minuts = Number(parts[1]);
    const seconds = Number(parts[2]);
    return minuts+ seconds / 60;

}

export class StartGame
{
    constructor()
    {
            let gamesName = {}
        const motiPlayer = new Player()
        console.log(motiPlayer.getCurrentTime());
        gamesName[motiPlayer.GetName()] = {timeStart: motiPlayer.getCurrentTime()}

        let userInput = readline.question("Please select : ")
        switch (userInput)
        {
            case "1":
                const RidiMath = new Riddles(0);
                console.log("Hi frome 1");
                gamesName[motiPlayer.GetName()].timeEnd = motiPlayer.getCurrentTime();
                console.log("Everage are: " ,timeStrTOint(gamesName[motiPlayer.GetName()].timeEnd) + timeStrTOint(gamesName[motiPlayer.GetName()].timeStart));
                console.log("Len ",Number(RidiMath.idCount), typeof RidiMath.idCount);
                
                break;
            case "2":
                const RidiGegr = new Riddles(1)
                console.log("Hi from 2");
                gamesName[motiPlayer.GetName()].timeEnd = motiPlayer.getCurrentTime();
                console.log(gamesName);
                break;
            default:
                console.log("Please enter a valid syntax: ");
            
        }
    }

    newUser = ()=>{}
}