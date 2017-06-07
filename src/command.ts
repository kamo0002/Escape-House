class Command {
 
 game : Game;

    constructor(game: Game)
    {
        this.game = game;
    }

    /**
     * Executes this command. Subclasses should override this method and
     * implement the desired behavior for that specific command.
     * 
     * @param params array containing all parameters
     * @return true, if this command quits the game, false otherwise.
     */
    public execute(params : string[]) : boolean
    {
        return false;
    }
}