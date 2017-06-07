class Default extends Command {

    /**
     * Print out error message when user enters unknown command.
     * Here we print some erro message and a list of the 
     * command words.
     * 
     * @param params array containing all parameters
     * @return true, if this command quits the game, false otherwise.
     */
    execute(params : string[]) : boolean {
        this.game.out.println("Ik begrijp niet wat je bedoeld...");
        this.game.out.println();
        this.game.out.println("De beschikbare commando's zijn:");
        this.game.out.println("   go quit help look restart");
        return false;
    }
}