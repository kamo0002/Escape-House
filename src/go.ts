class Go extends Command {
  
/** 
     * Try to go in one direction. If there is an exit, enter
     * the new room, otherwise print an error message.
     * 
     * @param params array containing all parameters
     * @return true, if this command quits the game, false otherwise.
     */
    execute(params : string[]) : boolean {
        if(params.length == 0) {
            // if there is no second word, we don't know where to go...
            this.game.out.println("Ga waar?");
            return;
        }

        let direction = params[0];

        // Try to leave current room.
        let nextRoom = null;
        switch (direction) {
            case "north" : 
                nextRoom = this.game.currentRoom.northExit;
                break;
            case "east" : 
                nextRoom = this.game.currentRoom.eastExit;
                break;
            case "south" : 
                nextRoom = this.game.currentRoom.southExit;
                break;
            case "west" : 
                nextRoom = this.game.currentRoom.westExit;
                break;
            case "up" :
                nextRoom = this.game.currentRoom.upExit;
                break;
            case "down" :
                nextRoom = this.game.currentRoom.downExit;
                break;
            case "jump" :
                nextRoom = this.game.currentRoom.jumpExit;
                break;
            case "climb" :
                nextRoom = this.game.currentRoom.climbExit;
                break;
        }

        if (nextRoom == null) {
            this.game.out.println("Er is geen deur!");
        }
        else {
            this.game.currentRoom = nextRoom;
            this.game.out.println("Je bent " + this.game.currentRoom.description);
            this.game.out.print("Uitgangen: ");
            if(this.game.currentRoom.northExit != null) {
                this.game.out.print("north ");
            }
            if(this.game.currentRoom.eastExit != null) {
                this.game.out.print("east ");
            }
            if(this.game.currentRoom.southExit != null) {
                this.game.out.print("south ");
            }
            if(this.game.currentRoom.westExit != null) {
                this.game.out.print("west ");
            }
            if(this.game.currentRoom.upExit != null) {
                this.game.out.print("up ");
            }
            if(this.game.currentRoom.downExit != null) {
                this.game.out.print("down ");
            }
            if(this.game.currentRoom.jumpExit != null) {
                this.game.out.print("jump ");
            }
            if(this.game.currentRoom.climbExit != null) {
                this.game.out.print("climb ");
            }
            this.game.out.println();
        }
        return false;
    }
}