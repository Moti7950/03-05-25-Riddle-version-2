import readline from 'readline-sync';
import {AllRiddles} from '../Riddles/AllRiddlesImport.js';

export class Riddles
{
    idCount = Object.keys(AllRiddles).length;
    // WhitchGame = 0;
    constructor (WhitchGame)
    {
        for (const questin of AllRiddles[WhitchGame])
        { 
            let userAnswer = '';
            while (userAnswer !== questin.correctAnswer)
            { 
                console.log(`question: ${questin.taskDescription}`);
                userAnswer = readline.question(`Write answer: `)

                if (userAnswer !== questin.correctAnswer)
                {
                    console.log("Incorrect 😢. Try agein");  
                }
            }
        console.log("Correct 🙂");
        }   
    }
}


