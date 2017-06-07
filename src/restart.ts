class Restart extends Command {
  
execute(params : string[]) : boolean {
        this.game.currentRoom = slaapkamer;
        this.game.out.println("Je bent " + this.game.currentRoom.description);
        return false;
    }
}
