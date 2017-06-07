class Help extends Command {

/**
     * Print out some help information.
     * Here we print some stupid, cryptic message and a list of the 
     * command words.
     * 
     * @param params array containing all parameters
     * @return true, if this command quits the game, false otherwise.
     */
    execute(params : string[]) : boolean {
        if(params.length > 0) {
            this.game.out.println("Help wat?");
            return false;
        }
        this.game.out.println("Je bent verdwaald. Je bent alleen. Je dwaalt");
        this.game.out.println("Je bent in een Escape House.");
        this.game.out.println();
        this.game.out.println("De beschikbare commando's zijn:");
        this.game.out.println("   go quit help look restart");
        return false;
    }
}