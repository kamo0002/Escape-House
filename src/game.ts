/**
 * This class is part of the "Zorld of Wuul" application. 
 * "Zorld of Wuul" is a very simple, text based adventure game.  
 * 
 * Users can walk around some scenery. That's all. It should really be 
 * extended to make it more interesting!
 * 
 * To play this game, create an instance of this class and call the "play"
 * method.
 * 
 * This main class creates and initialises all the others: it creates all
 * rooms, creates the parser and starts the game.  It also evaluates and
 * executes the commands that the parser returns.
 * 
 * @author  Michael Kölling, David J. Barnes, Bugslayer and kamo0002
 * @version 2017.03.31
 */
class Game {
    parser : Parser;
    out : Printer;

    currentRoom : Room;

    isOn : boolean;

    /**
     * Create the game and initialise its internal map.
     */
    constructor(output: HTMLElement, input: HTMLInputElement) {
        this.parser = new Parser(this, input);
        this.out = new Printer(output);
        this.isOn = true;
        this.createRooms();
        this.printWelcome();
    }

    /**
     * Create all the rooms and link their exits together.
     */
    createRooms() : void {
        // create the rooms
        let zonnebank = new Room("bij de zonnebank op zolder");
        let fitnessruimte = new Room("in de fitnessruimte op zolder");
        let sauna = new Room("bij de sauna op zolder");
        let speelkamer = new Room("in de speelkamer op zolder");
        let zoldertrap = new Room("op de zoldertrap");
        let studeerkamer = new Room("in de studeerkamer op zolder");
        let berging = new Room("in de berging op zolder");

        let badkamer2 = new Room("in de 2de badkamer op de 1ste verdieping");
        let kinderkamer = new Room("in de kinderkamer op de 1ste verdieping");
        let kantoor = new Room("in het kantoor op de 1ste verdieping");
        let logeerkamer = new Room("in de logeerkamer op de 1ste verdieping");
        let gang = new Room("in de gang op de 1ste verdieping");
        let slaapkamer2 = new Room("in de 2de slaapkamer op de 1ste verdieping");
        let kledingkast2 = new Room("in de 2de kledingkast op de 1ste verdieping");
        let slaapkamer = new Room("in de 1ste slaapkamer op de 1ste verdieping");
        let kledingkast = new Room("in de 1ste kledingkast op de 1ste verdieping");
        let badkamer = new Room("in de 1ste badkamer op de 1ste verdieping");

        let oprit2 = new Room("op de oprit van de 2de garage");
        let oprit = new Room("op de oprit van de 1ste garage");
        let garage2 = new Room("in de 2de garage op de begane grond");
        let garage = new Room("in de 1ste garage op de begane grond");
        let garagetuinpad = new Room("op het tuinpad naar de garages");
        let wc = new Room("In de wc op de begane grond");
        let keldertrapboven = new Room("bovenaan de keldertrap");
        let ontspanningsruimte = new Room("in de ontspanningsruimte op de begane grond");
        let zithoek = new Room("in de zithoek onder de veranda in de tuin");
        let grasveld = new Room("op het grasveld in de tuin");
        let zwembad = new Room("bij het zwembad in de tuin");
        let ingang = new Room("bij de vooringang");
        let inkomhal = new Room("in de inkomhal op de begane grond");
        let hal = new Room("in de hal op de begane grond");
        let woonkamer = new Room("in de woonkamer op de begane grond");
        let veranda = new Room("in de veranda in de tuin");
        let tuinpad = new Room("op het tuinpad in de tuin");
        let terras = new Room("op het terras in de tuin");
        let achteringang = new Room("bij de achteringang");
        let garderobe = new Room("in de garderobe op de begane grond");
        let keuken = new Room("in de keuken op de begane grond");
        let eetkamer = new Room("in de eetkamer op de begane grond");
        let buitenkeuken = new Room("in de buitenkeuken onder de veranda in de tuin");
        let vijver = new Room("bij de vijver in de tuin");
        let tuinhuis = new Room("in het tuinhuis in de tuin");
        let keukenberging = new Room("in de keuken berging op de begane grond");
        let kelder = new Room("in de kelder");
        let keldertraponder = new Room("onderaan de keldertrap");



        // initialise room exits  
        //zolder floor
        zonnebank.setExits(null, fitnessruimte, null, null, null, null);
        fitnessruimte.setExits(null, sauna, zoldertrap, zonnebank, null, null);
        sauna.setExits(null, null, null, fitnessruimte, null ,null);
        speelkamer.setExits(null, zoldertrap, null, null, null, null);
        zoldertrap.setExits(fitnessruimte, studeerkamer, berging, speelkamer, null, gang);
        studeerkamer.setExits(null, null, null, zoldertrap, null, null);
        berging.setExits(zoldertrap, null, null, null, null, null);
        //1ste floor
        badkamer2.setExits(null, kinderkamer, logeerkamer, null, null, null);
        kinderkamer.setExits(null, null, gang, badkamer2, null, null);
        kantoor.setExits(null, null, slaapkamer2, null, null, null);
        logeerkamer.setExits(badkamer2, gang, kledingkast2, null, null, null);
        gang.setExits(kinderkamer, slaapkamer2, slaapkamer, logeerkamer, zoldertrap, hal);
        slaapkamer2.setExits(kantoor, null, kledingkast, gang, null, null);
        kledingkast2.setExits(logeerkamer,slaapkamer, null, null, null, null);
        slaapkamer.setExits(gang, kledingkast, badkamer, kledingkast2, null, null);
        kledingkast.setExits(slaapkamer2, null, null, slaapkamer, null, null);
        badkamer.setExits(slaapkamer, null, null, null, null, null);
        //ground floor
        oprit2.setExits(null, garage2, oprit, null, null, null);
        garage2.setExits(null, null, garage, oprit2, null, null);
        oprit.setExits(oprit2, garage, null, null, null, null);
        garage.setExits(garage2, garagetuinpad, ontspanningsruimte, oprit, null, null);
        garagetuinpad.setExits(null, null, zithoek, garage, null, null);
        wc.setExits(null, null, inkomhal, null, null, null);
        keldertrapboven.setExits(null, null, hal, null, null, keldertraponder);
        ontspanningsruimte.setExits(garage, null, woonkamer, null, null, null);
        zithoek.setExits(garagetuinpad, null, veranda, null, null, null);
        grasveld.setExits(null, zwembad, tuinpad, null, null, null);
        zwembad.setExits(null, null, terras, grasveld, null, null);
        ingang.setExits(null, inkomhal, null, null, null, null);
        inkomhal.setExits(wc, hal, garderobe, ingang, null, null);
        hal.setExits(keldertrapboven, woonkamer, keuken, inkomhal, gang, null);
        woonkamer.setExits(ontspanningsruimte, veranda, eetkamer, hal, null, null);
        veranda.setExits(zithoek, tuinpad, buitenkeuken, woonkamer, null, null);
        tuinpad.setExits(grasveld, terras, vijver, veranda, null, null);
        terras.setExits(zwembad, achteringang, tuinhuis, tuinpad, null, null);
        achteringang.setExits(null, null, null, terras, null, null);
        garderobe.setExits(inkomhal, null, null, null, null, null);
        keuken.setExits(hal, eetkamer, keukenberging, null, null, null);
        eetkamer.setExits(woonkamer, null, null, keuken, null, null);
        buitenkeuken.setExits(veranda, vijver, null, null, null, null);
        vijver.setExits(tuinpad, null, null, buitenkeuken, null, null);
        tuinhuis.setExits(terras, null, null, null, null, null);
        keukenberging.setExits(keuken, null, null, null, null, null);
        //basement
        kelder.setExits(null, null, keldertraponder, null, null, null);
        keldertraponder.setExits(kelder, null, null, null, keldertrapboven, null);

        // spawn player outside
        this.currentRoom = slaapkamer;
    }

    /**
     * Print out the opening message for the player.
     */
    printWelcome() : void {
        this.out.println();
        this.out.println("Welkom bij Escape Room");
        this.out.println("Escape room is een nieuw op tekst gebaseerd avonturen spel");
        this.out.println("Typ 'help' wanneer je hulp nodig hebt.");
        this.out.println();
        this.out.println("Je bent " + this.currentRoom.description);
        this.out.print("Exits: ");
        if(this.currentRoom.northExit != null) {
            this.out.print("north ");
        }
        if(this.currentRoom.eastExit != null) {
            this.out.print("east ");
        }
        if(this.currentRoom.southExit != null) {
            this.out.print("south ");
        }
        if(this.currentRoom.westExit != null) {
            this.out.print("west ");
        }
        if(this.currentRoom.upExit != null) {
            this.out.print("up ");
        }
        if(this.currentRoom.downExit != null) {
            this.out.print("down ");
        }
        this.out.println();
        this.out.print(">");
    }

    gameOver() : void {
        this.isOn = false;
        this.out.println("Bedankt voor het spelen. Tot ziens.");
        this.out.println("Druk op F5 om de game te herstarten.");
    }

    /**
     * Print out error message when user enters unknown command.
     * Here we print some erro message and a list of the 
     * command words.
     * 
     * @param params array containing all parameters
     * @return true, if this command quits the game, false otherwise.
     */
    printError(params : string[]) : boolean {
        this.out.println("Ik begrijp niet wat je bedoeld...");
        this.out.println();
        this.out.println("De beschikbare commando's zijn:");
        this.out.println("   go quit help look");
        return false;
    }

    /**
     * Print out some help information.
     * Here we print some stupid, cryptic message and a list of the 
     * command words.
     * 
     * @param params array containing all parameters
     * @return true, if this command quits the game, false otherwise.
     */
    printHelp(params : string[]) : boolean {
        if(params.length > 0) {
            this.out.println("Help wat?");
            return false;
        }
        this.out.println("Je bent verdwaald. Je bent alleen. Je dwaalt");
        this.out.println("around at the university.");
        this.out.println();
        this.out.println("De beschikbare commando's zijn:");
        this.out.println("   go quit help look");
        return false;
    }

    /** 
     * Try to go in one direction. If there is an exit, enter
     * the new room, otherwise print an error message.
     * 
     * @param params array containing all parameters
     * @return true, if this command quits the game, false otherwise.
     */
    goRoom(params : string[]) : boolean {
        if(params.length == 0) {
            // if there is no second word, we don't know where to go...
            this.out.println("Ga waar?");
            return;
        }

        let direction = params[0];

        // Try to leave current room.
        let nextRoom = null;
        switch (direction) {
            case "north" : 
                nextRoom = this.currentRoom.northExit;
                break;
            case "east" : 
                nextRoom = this.currentRoom.eastExit;
                break;
            case "south" : 
                nextRoom = this.currentRoom.southExit;
                break;
            case "west" : 
                nextRoom = this.currentRoom.westExit;
                break;
            case "up" :
                nextRoom = this.currentRoom.upExit;
                break;
            case "down":
                nextRoom = this.currentRoom.downExit;
                break;
        }

        if (nextRoom == null) {
            this.out.println("Er is geen deur!");
        }
        else {
            this.currentRoom = nextRoom;
            this.out.println("Je bent " + this.currentRoom.description);
            this.out.print("Uitgangen: ");
            if(this.currentRoom.northExit != null) {
                this.out.print("north ");
            }
            if(this.currentRoom.eastExit != null) {
                this.out.print("east ");
            }
            if(this.currentRoom.southExit != null) {
                this.out.print("south ");
            }
            if(this.currentRoom.westExit != null) {
                this.out.print("west ");
            }
            if(this.currentRoom.upExit != null) {
                this.out.print("up ");
            }
            if(this.currentRoom.downExit != null) {
                this.out.print("down ");
            }
            this.out.println();
        }
        return false;
    }
    
    /** 
     * "Quit" was entered. Check the rest of the command to see
     * whether we really quit the game.
     * 
     * @param params array containing all parameters
     * @return true, if this command quits the game, false otherwise.
     */
    quit(params : string[]) : boolean {
        if(params.length > 0) {
            this.out.println("Verlaat wat?");
            return false;
        }
        else {
            return true;  // signal that we want to quit
        }
    }
    look(params : string[]) : boolean {
        this.out.println("Je bent " + this.currentRoom.description);
        return false;
    }
}