/**
 * This class is part of the "Zorld of Wuul" application. 
 * "Zorld of Wuul" is a very simple, text based adventure game.  
 * 
 * This parser reads user input and tries to interpret it as an "Adventure"
 * command. Every time it is called it reads a line from the terminal and
 * tries to interpret the line as a two word command. 
 *
 * The parser has a set of known command words. It checks user input against
 * the known commands, and invokes a relevant method on the Game object.
 * 
 * @author  Michael Kölling, David J. Barnes, Bugslayer and kamo0002
 * @version 2017.03.31
 */
class Parser {
    input : HTMLInputElement;
    private game : Game;

    commands :  { [key: string] : Command }={};
    default : Default;

    /**
     * Creates the parser object.
     * 
     * @param game the game object to prse commands for
     * @param input the HTMLInputElement to parse the value from
     */
    constructor(game: Game, input : HTMLInputElement) {
        this.game = game;
        this.input = input;
        this.default = new Default(game);
        this.commands["help"] = new Help(game);
        this.commands["quit"] = new Quit(game);
        this.commands["go"] = new Go(game);
        this.commands["look"] = new Look(game);
        this.commands["restart"] = new Restart(game);
        input.onkeyup = (e) => { // event handler function
            if (e.keyCode == 13 && this.game.isOn) {
                // Invoke parse method wehen user pressed enter
                let commands = this.input.value; 
                this.game.out.println(commands);
                this.parse(commands.split(" "));
                this.input.value = ""; // clears the input element 
                this.game.out.print(">");
            } 
        }
    }

    /**
     * Parses the specified words and invokes the corresponding method
     * on the game object.
     * 
     * @param words an array of words to parse
     */
    parse(words : string[]) : void {
        let wantToQuit = false;
        let params = words.slice(1);
        if (words[0] =="")
        {   // Do nothing when user enters nothing
            return;
        }

        // Find the command to execute
        let command : Command;
        command = this.commands[words[0]];
        if ( command == null )
        {   // Take the default command when command does not match
            command = this.default;
        }

        wantToQuit = command.execute(params);

        if (wantToQuit) {
            this.input.disabled = true;
            this.game.gameOver();
        }
    }
}