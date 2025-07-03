import readline from 'readline-sync';
export class Player
    { 
        constructor()
        {
            this.name = readline.question("Plese enter your name: ")
            this.GetName = function(){return this.name}
            this.getCurrentTime = function ()
            {
                const now = new Date();
                const hours = now.getHours();
                const minuts = now.getMinutes();
                const seconds = now.getSeconds();
                return `${hours}:${minuts}:${seconds}`
            }
            this.times = function(star, end)
            {
                this.star = star;
                this.end = end;
            }
            
        }
    }


