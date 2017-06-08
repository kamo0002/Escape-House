class Restart extends Command {
  
execute(params : string[]) : boolean {
        this.game.currentRoom = this.game.startRoom;
        this.game.out.println("Je bent " + this.game.currentRoom.description);
        return false;
    }
}
