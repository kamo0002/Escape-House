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
    startRoom : Room;
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
        
        // ceiling floor
        let zonnebank = new Room("bij de zonnebank op zolder.");
        let fitnessruimte = new Room("in de fitnessruimte op zolder.");
        let sauna = new Room("bij de sauna op zolder.");
        let speelkamer = new Room("in de speelkamer op zolder.");
        let speelkamerraam = new Room("bij het raam in de speelkamer op zolder helaas is dit raam te klein om door heen te gaan.");
        let zoldertrap = new Room("op de zoldertrap.");
        let studeerkamer = new Room("in de studeerkamer op zolder.");
        let studeerkamerraam = new Room("bij het raam in de studeerkamer op zolder helaas is dit raam te klein om door heen te gaan.");
        let berging = new Room("in de berging op zolder.");
        
        // 1ste floor
        let badkamer2 = new Room("in de 2de badkamer op de 1ste verdieping.");
        let badkamer2raam = new Room("bij het raam in badkamer2 helaas is dit raam te klein om door heen te gaan.");
        let kinderkamer = new Room("in de kinderkamer op de 1ste verdieping.");
        let kinderkamerraam = new Room("bij het raam in de kinderkamer helaas dit raam kan niet ver genoeg open.");
        let kantoor = new Room("in het kantoor op de 1ste verdieping.");
        let kantoorraam = new Room("bij het raam in het kantoor helaas dit raam kan niet open.");
        let logeerkamer = new Room("in de logeerkamer op de 1ste verdieping.");
        let logeerkamerraam = new Room("bij het raam in de logeerkamer helaas dit raam kan niet ver genoeg open.");
        let gang = new Room("in de gang op de 1ste verdieping.");
        let slaapkamer2 = new Room("in de 2de slaapkamer op de 1ste verdieping.");
        let slaapkamer2raam = new Room("bij het raam in slaapkamer2 helaas dit raam kan niet ver genoeg open.");
        let kledingkast2 = new Room("in de 2de kledingkast op de 1ste verdieping.");
        let slaapkamer = new Room("in de 1ste slaapkamer op de 1ste verdieping.");
        let kledingkast = new Room("in de 1ste kledingkast op de 1ste verdieping.");
        let badkamer = new Room("in de 1ste badkamer op de 1ste verdieping.");
        let badkamerraam = new Room("bij het raam in de badkamer helaas is dit raam te klein om door heen te gaan.");
        
        // ground floor
        let oprit2 = new Room("op de oprit van de 2de garage.");
        let oprit = new Room("op de oprit van de 1ste garage. Hier is helaas geen uitgang de hekken voor de oprit zijn op slot.");
        let garage2 = new Room("in de 2de garage op de begane grond. Hier is helaas geen uitgang de hekken voor de oprit zijn op slot.");
        let garage = new Room("in de 1ste garage op de begane grond.");
        let garagetuinpad = new Room("op het tuinpad naar de garages.");
        let wc = new Room("in de wc op de begane grond.");
        let wcraam = new Room("bij het wc raam helaas is deze te klein om er doorheen te gaan.");
        let keldertrapboven = new Room("bovenaan de keldertrap.");
        let ontspanningsruimte = new Room("in de ontspanningsruimte op de begane grond.");
        let zithoek = new Room("in de zithoek onder de veranda in de tuin.");
        let grasveld = new Room("op het grasveld in de tuin.");
        let zwembad = new Room("bij het zwembad in de tuin.");
        let ingang = new Room("De voordeur is gebarricadeerd zoek een andere uitgang.");
        let inkomhal = new Room("in de inkomhal op de begane grond.");
        let hal = new Room("in de hal op de begane grond.");
        let woonkamer = new Room("in de woonkamer op de begane grond.");
        let veranda = new Room("in de veranda in de tuin.");
        let tuinpad = new Room("op het tuinpad in de tuin.");
        let terras = new Room("op het terras in de tuin.");
        let achteringang = new Room("De Achteringang is op slot zoek een andere uitgang.");
        let garderobe = new Room("in de garderobe op de begane grond.");
        let keuken = new Room("in de keuken op de begane grond.");
        let eetkamer = new Room("in de eetkamer op de begane grond.");
        let eetkamerraam = new Room("bij het raam in de eetkamer dit raam kan helaas niet open.");
        let buitenkeuken = new Room("in de buitenkeuken onder de veranda in de tuin.");
        let vijver = new Room("bij de vijver in de tuin.");
        let tuinhuis = new Room("in het tuinhuis in de tuin.");
        let tuinhuisraam = new Room("bij het raam in het tuinhuis helaas dit raam kan niet open. Je kan door het raam de vijver zien.");
        let keukenberging = new Room("in de keuken berging op de begane grond.");
        let keukenbergingraam = new Room("bij het raam in de keuken berging helaas dit raam zit op slot.");
        
        // basement
        let kelder = new Room("in de kelder.");
        let kelderraam = new Room("bij het kelder raam in de kelder helaas is dit raam te klein om er door heen te kunnen.");
        let keldertraponder = new Room("onderaan de keldertrap.");
        
        // seiling garages
        let zoldergarages = new Room("op de zolder van de garages.");
        let raamzoldergarages = new Room("bij het raam op de zolder van de garages. Er loopt een trap naar beneden aan de buitenkant van het raam. Klim uit het raam om op de trap te gaan.");
        let trapraamzoldergaragesboven = new Room("bovenaan de trap van het raam. Klim door het raam om naar de zolder van de garages te gaan.");
        let trapraamzoldergaragesonder = new Room("onderaan de trap van het raam. Je hangt nu boven een donker gat durf je hier in te springen? Wanneer je springt kun je niet meer terug.");
        let zwartegat = new Room("in het zwarte gat gesprongen en het was een val. Game Over!!! Typ restart om opnieuw te beginnen.");
        let raam2zoldergarages = new Room("bij het 2de raam op de zolder van de garages. Er loopt een trap naar het dak aan de buitenkant van het raam. Klim uit het raam om op de trap te gaan.");
        let trapraam2zoldergaragesboven = new Room ("bovenaan de trap van het 2de raam naar het dak van de garages.");
        let trapraam2zoldergaragesonder = new Room ("onderaan de trap van het 2de raam naar het dak van de garages. Klim door het raam om naar de zolder van de garages te gaan.");
        let raam3zoldergarages = new Room ("bij het 3de raam op de zolder van de garages. Helaas deze zit op slot.");
        
        // roof
        let dakgarages = new Room ("op het dak van de garages.");
        let dakhuis = new Room ("op het dak van het huis.");
        let trapdakhuisonder = new Room ("onderaan de trap naar het dak van het huis.");
        let trapdakhuisboven = new Room ("bovenaan de trap naar het dak van het huis.");
        let kabelbaanvoorkantdak = new Room ("bij de kabelbaan aan de voorkant van het dak van het huis. Durf je te springen? De kabel ziet er niet erg stevig uit en je kan niet zien waar hij naar toe gaat.");
        let kabelbaanvoorkantdakonder = new Room("gesprongen en hebt de goede keus gemaakt. Je bent vrij gefeliciteerd je hebt gewonnen!!! Typ restart om opnieuw te beginnen.");
        let kabelbaanachterkantdak = new Room ("bij de kabelbaan aan de achterkant van het dak van het huis. Durf je te springen? De kabel ziet er niet erg stevig uit en je kan niet zien waar hij naar toe gaat.");
        let kabelbaanachterkantdakonder = new Room ("dood de kabel is afgebroken hij was niet stevig genoeg. Game over!!! Typ restart om opnieuw te beginnen.");


        // initialise room exits (north, east, south, west, up, down, jump, climb) 
        
        // ceiling floor
        zonnebank.setExits(null, fitnessruimte, null, null, null, null, null, null);
        fitnessruimte.setExits(null, sauna, zoldertrap, zonnebank, null, null, null, null);
        sauna.setExits(null, null, null, fitnessruimte, null ,null, null, null);
        speelkamer.setExits(null, zoldertrap, null, speelkamerraam, null, null, null, null);
        speelkamerraam.setExits(null, speelkamer, null, null, null, null, null, null);
        zoldertrap.setExits(fitnessruimte, studeerkamer, berging, speelkamer, null, gang, null, null);
        studeerkamer.setExits(null, studeerkamerraam, null, zoldertrap, null, null, null, null);
        studeerkamerraam.setExits(null, null, null, studeerkamer, null, null, null, null);
        berging.setExits(zoldertrap, null, null, null, null, null, null, null);
        
        // 1ste floor
        badkamer2.setExits(null, kinderkamer, logeerkamer, badkamer2raam, null, null, null, null);
        badkamer2raam.setExits(null, badkamer2, null, null, null, null, null, null);
        kinderkamer.setExits(kinderkamerraam, null, gang, badkamer2, null, null, null, null);
        kinderkamerraam.setExits(null, null, kinderkamer, null, null, null, null, null);
        kantoor.setExits(kantoorraam, null, slaapkamer2, null, null, null, null, null);
        kantoorraam.setExits(null, null, kantoor, null, null, null, null, null);
        logeerkamer.setExits(badkamer2, gang, kledingkast2, logeerkamerraam, null, null, null, null);
        logeerkamerraam.setExits(null, logeerkamer, null, null, null, null, null, null);
        gang.setExits(kinderkamer, slaapkamer2, slaapkamer, logeerkamer, zoldertrap, hal, null, null);
        slaapkamer2.setExits(kantoor, slaapkamer2raam, kledingkast, gang, null, null, null, null);
        slaapkamer2raam.setExits(null, null, null, slaapkamer2, null, null, null, null);
        kledingkast2.setExits(logeerkamer,slaapkamer, null, null, null, null, null, null);
        slaapkamer.setExits(gang, kledingkast, badkamer, kledingkast2, null, null, null, null);
        kledingkast.setExits(slaapkamer2, null, null, slaapkamer, null, null, null, null);
        badkamer.setExits(slaapkamer, badkamerraam, null, null, null, null, null, null);
        badkamerraam.setExits(null, null, null, badkamer, null, null, null, null);
        
        // ground floor
        oprit2.setExits(null, garage2, oprit, null, null, null, null, null);
        garage2.setExits(null, null, garage, oprit2, zoldergarages, null, null, null);
        oprit.setExits(oprit2, garage, null, null, null, null, null, null);
        garage.setExits(garage2, garagetuinpad, ontspanningsruimte, oprit, null, null, null, null);
        garagetuinpad.setExits(null, null, zithoek, garage, null, null, null, null);
        wc.setExits(null, null, inkomhal, wcraam, null, null, null, null);
        wcraam.setExits(null, wc, null, null, null, null, null, null);
        keldertrapboven.setExits(null, null, hal, null, null, keldertraponder, null, null);
        ontspanningsruimte.setExits(garage, null, woonkamer, null, null, null, null, null);
        zithoek.setExits(garagetuinpad, null, veranda, null, null, null, null, null);
        grasveld.setExits(null, zwembad, tuinpad, null, null, null, null, null);
        zwembad.setExits(null, null, terras, grasveld, null, null, null, null);
        ingang.setExits(null, inkomhal, null, null, null, null, null, null);
        inkomhal.setExits(wc, hal, garderobe, ingang, null, null, null, null);
        hal.setExits(keldertrapboven, woonkamer, keuken, inkomhal, gang, null, null, null);
        woonkamer.setExits(ontspanningsruimte, veranda, eetkamer, hal, null, null, null, null);
        veranda.setExits(zithoek, tuinpad, buitenkeuken, woonkamer, null, null, null, null);
        tuinpad.setExits(grasveld, terras, vijver, veranda, null, null, null, null);
        terras.setExits(zwembad, achteringang, tuinhuis, tuinpad, null, null, null, null);
        achteringang.setExits(null, null, null, terras, null, null, null, null);
        garderobe.setExits(inkomhal, null, null, null, null, null, null, null);
        keuken.setExits(hal, eetkamer, keukenberging, null, null, null, null, null);
        eetkamer.setExits(woonkamer, null, eetkamerraam, keuken, null, null, null, null);
        eetkamerraam.setExits(eetkamer, null, null, null, null, null, null, null);
        buitenkeuken.setExits(veranda, vijver, null, null, null, null, null, null);
        vijver.setExits(tuinpad, null, null, buitenkeuken, null, null, null, null);
        tuinhuis.setExits(terras, null, null, tuinhuisraam, null, null, null, null);
        tuinhuisraam.setExits(null, tuinhuis, null, null, null, null, null, null);
        keukenberging.setExits(keuken, null, keukenbergingraam, null, null, null, null, null);
        keukenbergingraam.setExits(keukenberging, null, null, null, null, null, null, null);
        
        // basement
        kelder.setExits(kelderraam, null, keldertraponder, null, null, null, null, null);
        kelderraam.setExits(null, null, kelder, null, null, null, null, null);
        keldertraponder.setExits(kelder, null, null, null, keldertrapboven, null, null, null);
        
        // seiliing garages
        zoldergarages.setExits(raamzoldergarages, raam2zoldergarages, null, raam3zoldergarages, null, garage2, null, null);
        raamzoldergarages.setExits(null, null, zoldergarages, null, null, null, null, trapraamzoldergaragesboven);
        trapraamzoldergaragesboven.setExits(null, null, null, null, null, trapraamzoldergaragesonder, null, raamzoldergarages);
        trapraamzoldergaragesonder.setExits(null, null, null, null, trapraamzoldergaragesboven, null, zwartegat, null);
        zwartegat.setExits(null, null, null, null, null, null, null, null);
        raam2zoldergarages.setExits(null, null, null, zoldergarages, null, null, null, trapraam2zoldergaragesonder);
        trapraam2zoldergaragesboven.setExits(null, null, null, dakgarages, null, trapraam2zoldergaragesonder, null, null);
        trapraam2zoldergaragesonder.setExits(null, null, null, null, trapraam2zoldergaragesboven, null, null, raam2zoldergarages);
        raam3zoldergarages.setExits(null, zoldergarages, null, null, null, null, null, null);
        
        // roof
        dakgarages.setExits(null, trapraam2zoldergaragesboven, trapdakhuisonder, null, null, null, null, null);
        dakhuis.setExits(trapdakhuisboven, kabelbaanachterkantdak, null, kabelbaanvoorkantdak, null, null, null, null);
        trapdakhuisboven.setExits(null, null, dakhuis, null, null, trapdakhuisonder, null, null);
        trapdakhuisonder.setExits(dakgarages, null, null, null, trapdakhuisboven, null, null, null);
        kabelbaanvoorkantdak.setExits(null, dakhuis, null, null, null, null, kabelbaanvoorkantdakonder, null);
        kabelbaanvoorkantdakonder.setExits(null, null, null, null, null, null, null, null);
        kabelbaanachterkantdak.setExits(null, null, null, dakhuis, null, null, kabelbaanachterkantdakonder, null);
        kabelbaanachterkantdakonder.setExits(null, null, null, null, null, null, null, null);

        // spawn player in bedroom
        this.currentRoom = slaapkamer;
        this.startRoom = slaapkamer;
    }

/**
     * Print out the opening message for the player.
     */
    printWelcome() : void {
        this.out.println();
        this.out.println("Welkom bij Escape House");
        this.out.println("Escape House is een nieuw op tekst gebaseerd avonturen spel");
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
        if(this.currentRoom.jumpExit != null) {
            this.out.print("jump ");
        }
        if(this.currentRoom.climbExit != null) {
            this.out.print("climb ");
        }
        this.out.println();
        this.out.print(">");
    }

    gameOver() : void {
        this.isOn = false;
        this.out.println("Bedankt voor het spelen. Tot ziens.");
        this.out.println("Typ restart om de game te herstarten.");
    }
}