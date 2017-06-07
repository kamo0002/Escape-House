class Look extends Command {

execute(params : string[]) : boolean {
        this.game.out.println("Je bent " + this.game.currentRoom.description);
        return false;
    }
}