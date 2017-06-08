var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Command = (function () {
    function Command(game) {
        this.game = game;
    }
    Command.prototype.execute = function (params) {
        return false;
    };
    return Command;
}());
var Default = (function (_super) {
    __extends(Default, _super);
    function Default() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Default.prototype.execute = function (params) {
        this.game.out.println("Ik begrijp niet wat je bedoeld...");
        this.game.out.println();
        this.game.out.println("De beschikbare commando's zijn:");
        this.game.out.println("   go quit help look restart");
        return false;
    };
    return Default;
}(Command));
var Game = (function () {
    function Game(output, input) {
        this.parser = new Parser(this, input);
        this.out = new Printer(output);
        this.isOn = true;
        this.createRooms();
        this.printWelcome();
    }
    Game.prototype.createRooms = function () {
        var zonnebank = new Room("bij de zonnebank op zolder.");
        var fitnessruimte = new Room("in de fitnessruimte op zolder.");
        var sauna = new Room("bij de sauna op zolder.");
        var speelkamer = new Room("in de speelkamer op zolder.");
        var speelkamerraam = new Room("bij het raam in de speelkamer op zolder helaas is dit raam te klein om door heen te gaan.");
        var zoldertrap = new Room("op de zoldertrap.");
        var studeerkamer = new Room("in de studeerkamer op zolder.");
        var studeerkamerraam = new Room("bij het raam in de studeerkamer op zolder helaas is dit raam te klein om door heen te gaan.");
        var berging = new Room("in de berging op zolder.");
        var badkamer2 = new Room("in de 2de badkamer op de 1ste verdieping.");
        var badkamer2raam = new Room("bij het raam in badkamer2 helaas is dit raam te klein om door heen te gaan.");
        var kinderkamer = new Room("in de kinderkamer op de 1ste verdieping.");
        var kinderkamerraam = new Room("bij het raam in de kinderkamer helaas dit raam kan niet ver genoeg open.");
        var kantoor = new Room("in het kantoor op de 1ste verdieping.");
        var kantoorraam = new Room("bij het raam in het kantoor helaas dit raam kan niet open.");
        var logeerkamer = new Room("in de logeerkamer op de 1ste verdieping.");
        var logeerkamerraam = new Room("bij het raam in de logeerkamer helaas dit raam kan niet ver genoeg open.");
        var gang = new Room("in de gang op de 1ste verdieping.");
        var slaapkamer2 = new Room("in de 2de slaapkamer op de 1ste verdieping.");
        var slaapkamer2raam = new Room("bij het raam in slaapkamer2 helaas dit raam kan niet ver genoeg open.");
        var kledingkast2 = new Room("in de 2de kledingkast op de 1ste verdieping.");
        var slaapkamer = new Room("in de 1ste slaapkamer op de 1ste verdieping.");
        var kledingkast = new Room("in de 1ste kledingkast op de 1ste verdieping.");
        var badkamer = new Room("in de 1ste badkamer op de 1ste verdieping.");
        var badkamerraam = new Room("bij het raam in de badkamer helaas is dit raam te klein om door heen te gaan.");
        var oprit2 = new Room("op de oprit van de 2de garage.");
        var oprit = new Room("op de oprit van de 1ste garage. Hier is helaas geen uitgang de hekken voor de oprit zijn op slot.");
        var garage2 = new Room("in de 2de garage op de begane grond. Hier is helaas geen uitgang de hekken voor de oprit zijn op slot.");
        var garage = new Room("in de 1ste garage op de begane grond.");
        var garagetuinpad = new Room("op het tuinpad naar de garages.");
        var wc = new Room("in de wc op de begane grond.");
        var wcraam = new Room("bij het wc raam helaas is deze te klein om er doorheen te gaan.");
        var keldertrapboven = new Room("bovenaan de keldertrap.");
        var ontspanningsruimte = new Room("in de ontspanningsruimte op de begane grond.");
        var zithoek = new Room("in de zithoek onder de veranda in de tuin.");
        var grasveld = new Room("op het grasveld in de tuin.");
        var zwembad = new Room("bij het zwembad in de tuin.");
        var ingang = new Room("De voordeur is gebarricadeerd zoek een andere uitgang.");
        var inkomhal = new Room("in de inkomhal op de begane grond.");
        var hal = new Room("in de hal op de begane grond.");
        var woonkamer = new Room("in de woonkamer op de begane grond.");
        var veranda = new Room("in de veranda in de tuin.");
        var tuinpad = new Room("op het tuinpad in de tuin.");
        var terras = new Room("op het terras in de tuin.");
        var achteringang = new Room("De Achteringang is op slot zoek een andere uitgang.");
        var garderobe = new Room("in de garderobe op de begane grond.");
        var keuken = new Room("in de keuken op de begane grond.");
        var eetkamer = new Room("in de eetkamer op de begane grond.");
        var eetkamerraam = new Room("bij het raam in de eetkamer dit raam kan helaas niet open.");
        var buitenkeuken = new Room("in de buitenkeuken onder de veranda in de tuin.");
        var vijver = new Room("bij de vijver in de tuin.");
        var tuinhuis = new Room("in het tuinhuis in de tuin.");
        var tuinhuisraam = new Room("bij het raam in het tuinhuis helaas dit raam kan niet open. Je kan door het raam de vijver zien.");
        var keukenberging = new Room("in de keuken berging op de begane grond.");
        var keukenbergingraam = new Room("bij het raam in de keuken berging helaas dit raam zit op slot.");
        var kelder = new Room("in de kelder.");
        var kelderraam = new Room("bij het kelder raam in de kelder helaas is dit raam te klein om er door heen te kunnen.");
        var keldertraponder = new Room("onderaan de keldertrap.");
        var zoldergarages = new Room("op de zolder van de garages.");
        var raamzoldergarages = new Room("bij het raam op de zolder van de garages. Er loopt een trap naar beneden aan de buitenkant van het raam. Klim uit het raam om op de trap te gaan.");
        var trapraamzoldergaragesboven = new Room("bovenaan de trap van het raam. Klim door het raam om naar de zolder van de garages te gaan.");
        var trapraamzoldergaragesonder = new Room("onderaan de trap van het raam. Je hangt nu boven een donker gat durf je hier in te springen? Wanneer je springt kun je niet meer terug.");
        var zwartegat = new Room("in het zwarte gat gesprongen en het was een val. Game Over!!! Typ restart om opnieuw te beginnen.");
        var raam2zoldergarages = new Room("bij het 2de raam op de zolder van de garages. Er loopt een trap naar het dak aan de buitenkant van het raam. Klim uit het raam om op de trap te gaan.");
        var trapraam2zoldergaragesboven = new Room("bovenaan de trap van het 2de raam naar het dak van de garages.");
        var trapraam2zoldergaragesonder = new Room("onderaan de trap van het 2de raam naar het dak van de garages. Klim door het raam om naar de zolder van de garages te gaan.");
        var raam3zoldergarages = new Room("bij het 3de raam op de zolder van de garages. Helaas deze zit op slot.");
        var dakgarages = new Room("op het dak van de garages.");
        var dakhuis = new Room("op het dak van het huis.");
        var trapdakhuisonder = new Room("onderaan de trap naar het dak van het huis.");
        var trapdakhuisboven = new Room("bovenaan de trap naar het dak van het huis.");
        var kabelbaanvoorkantdak = new Room("bij de kabelbaan aan de voorkant van het dak van het huis. Durf je te springen? De kabel ziet er niet erg stevig uit en je kan niet zien waar hij naar toe gaat.");
        var kabelbaanvoorkantdakonder = new Room("gesprongen en hebt de goede keus gemaakt. Je bent vrij gefeliciteerd je hebt gewonnen!!! Typ restart om opnieuw te beginnen.");
        var kabelbaanachterkantdak = new Room("bij de kabelbaan aan de achterkant van het dak van het huis. Durf je te springen? De kabel ziet er niet erg stevig uit en je kan niet zien waar hij naar toe gaat.");
        var kabelbaanachterkantdakonder = new Room("dood de kabel is afgebroken hij was niet stevig genoeg. Game over!!! Typ restart om opnieuw te beginnen.");
        zonnebank.setExits(null, fitnessruimte, null, null, null, null, null, null);
        fitnessruimte.setExits(null, sauna, zoldertrap, zonnebank, null, null, null, null);
        sauna.setExits(null, null, null, fitnessruimte, null, null, null, null);
        speelkamer.setExits(null, zoldertrap, null, speelkamerraam, null, null, null, null);
        speelkamerraam.setExits(null, speelkamer, null, null, null, null, null, null);
        zoldertrap.setExits(fitnessruimte, studeerkamer, berging, speelkamer, null, gang, null, null);
        studeerkamer.setExits(null, studeerkamerraam, null, zoldertrap, null, null, null, null);
        studeerkamerraam.setExits(null, null, null, studeerkamer, null, null, null, null);
        berging.setExits(zoldertrap, null, null, null, null, null, null, null);
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
        kledingkast2.setExits(logeerkamer, slaapkamer, null, null, null, null, null, null);
        slaapkamer.setExits(gang, kledingkast, badkamer, kledingkast2, null, null, null, null);
        kledingkast.setExits(slaapkamer2, null, null, slaapkamer, null, null, null, null);
        badkamer.setExits(slaapkamer, badkamerraam, null, null, null, null, null, null);
        badkamerraam.setExits(null, null, null, badkamer, null, null, null, null);
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
        kelder.setExits(kelderraam, null, keldertraponder, null, null, null, null, null);
        kelderraam.setExits(null, null, kelder, null, null, null, null, null);
        keldertraponder.setExits(kelder, null, null, null, keldertrapboven, null, null, null);
        zoldergarages.setExits(raamzoldergarages, raam2zoldergarages, null, raam3zoldergarages, null, garage2, null, null);
        raamzoldergarages.setExits(null, null, zoldergarages, null, null, null, null, trapraamzoldergaragesboven);
        trapraamzoldergaragesboven.setExits(null, null, null, null, null, trapraamzoldergaragesonder, null, raamzoldergarages);
        trapraamzoldergaragesonder.setExits(null, null, null, null, trapraamzoldergaragesboven, null, zwartegat, null);
        zwartegat.setExits(null, null, null, null, null, null, null, null);
        raam2zoldergarages.setExits(null, null, null, zoldergarages, null, null, null, trapraam2zoldergaragesonder);
        trapraam2zoldergaragesboven.setExits(null, null, null, dakgarages, null, trapraam2zoldergaragesonder, null, null);
        trapraam2zoldergaragesonder.setExits(null, null, null, null, trapraam2zoldergaragesboven, null, null, raam2zoldergarages);
        raam3zoldergarages.setExits(null, zoldergarages, null, null, null, null, null, null);
        dakgarages.setExits(null, trapraam2zoldergaragesboven, trapdakhuisonder, null, null, null, null, null);
        dakhuis.setExits(trapdakhuisboven, kabelbaanachterkantdak, null, kabelbaanvoorkantdak, null, null, null, null);
        trapdakhuisboven.setExits(null, null, dakhuis, null, null, trapdakhuisonder, null, null);
        trapdakhuisonder.setExits(dakgarages, null, null, null, trapdakhuisboven, null, null, null);
        kabelbaanvoorkantdak.setExits(null, dakhuis, null, null, null, null, kabelbaanvoorkantdakonder, null);
        kabelbaanvoorkantdakonder.setExits(null, null, null, null, null, null, null, null);
        kabelbaanachterkantdak.setExits(null, null, null, dakhuis, null, null, kabelbaanachterkantdakonder, null);
        kabelbaanachterkantdakonder.setExits(null, null, null, null, null, null, null, null);
        this.currentRoom = slaapkamer;
        this.startRoom = slaapkamer;
    };
    Game.prototype.printWelcome = function () {
        this.out.println();
        this.out.println("Welkom bij Escape House");
        this.out.println("Escape House is een nieuw op tekst gebaseerd avonturen spel");
        this.out.println("Typ 'help' wanneer je hulp nodig hebt.");
        this.out.println();
        this.out.println("Je bent " + this.currentRoom.description);
        this.out.print("Exits: ");
        if (this.currentRoom.northExit != null) {
            this.out.print("north ");
        }
        if (this.currentRoom.eastExit != null) {
            this.out.print("east ");
        }
        if (this.currentRoom.southExit != null) {
            this.out.print("south ");
        }
        if (this.currentRoom.westExit != null) {
            this.out.print("west ");
        }
        if (this.currentRoom.upExit != null) {
            this.out.print("up ");
        }
        if (this.currentRoom.downExit != null) {
            this.out.print("down ");
        }
        if (this.currentRoom.jumpExit != null) {
            this.out.print("jump ");
        }
        if (this.currentRoom.climbExit != null) {
            this.out.print("climb ");
        }
        this.out.println();
        this.out.print(">");
    };
    Game.prototype.gameOver = function () {
        this.isOn = false;
        this.out.println("Bedankt voor het spelen. Tot ziens.");
        this.out.println("Typ restart om de game te herstarten.");
    };
    return Game;
}());
var Go = (function (_super) {
    __extends(Go, _super);
    function Go() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Go.prototype.execute = function (params) {
        if (params.length == 0) {
            this.game.out.println("Ga waar?");
            return;
        }
        var direction = params[0];
        var nextRoom = null;
        switch (direction) {
            case "north":
                nextRoom = this.game.currentRoom.northExit;
                break;
            case "east":
                nextRoom = this.game.currentRoom.eastExit;
                break;
            case "south":
                nextRoom = this.game.currentRoom.southExit;
                break;
            case "west":
                nextRoom = this.game.currentRoom.westExit;
                break;
            case "up":
                nextRoom = this.game.currentRoom.upExit;
                break;
            case "down":
                nextRoom = this.game.currentRoom.downExit;
                break;
            case "jump":
                nextRoom = this.game.currentRoom.jumpExit;
                break;
            case "climb":
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
            if (this.game.currentRoom.northExit != null) {
                this.game.out.print("north ");
            }
            if (this.game.currentRoom.eastExit != null) {
                this.game.out.print("east ");
            }
            if (this.game.currentRoom.southExit != null) {
                this.game.out.print("south ");
            }
            if (this.game.currentRoom.westExit != null) {
                this.game.out.print("west ");
            }
            if (this.game.currentRoom.upExit != null) {
                this.game.out.print("up ");
            }
            if (this.game.currentRoom.downExit != null) {
                this.game.out.print("down ");
            }
            if (this.game.currentRoom.jumpExit != null) {
                this.game.out.print("jump ");
            }
            if (this.game.currentRoom.climbExit != null) {
                this.game.out.print("climb ");
            }
            this.game.out.println();
        }
        return false;
    };
    return Go;
}(Command));
var Help = (function (_super) {
    __extends(Help, _super);
    function Help() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Help.prototype.execute = function (params) {
        if (params.length > 0) {
            this.game.out.println("Help wat?");
            return false;
        }
        this.game.out.println("Je bent verdwaald. Je bent alleen. Je dwaalt");
        this.game.out.println("Je bent in een Escape House.");
        this.game.out.println();
        this.game.out.println("De beschikbare commando's zijn:");
        this.game.out.println("   go quit help look restart");
        return false;
    };
    return Help;
}(Command));
var Look = (function (_super) {
    __extends(Look, _super);
    function Look() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Look.prototype.execute = function (params) {
        this.game.out.println("Je bent " + this.game.currentRoom.description);
        return false;
    };
    return Look;
}(Command));
var Parser = (function () {
    function Parser(game, input) {
        var _this = this;
        this.commands = {};
        this.game = game;
        this.input = input;
        this["default"] = new Default(game);
        this.commands["help"] = new Help(game);
        this.commands["quit"] = new Quit(game);
        this.commands["go"] = new Go(game);
        this.commands["look"] = new Look(game);
        this.commands["restart"] = new Restart(game);
        input.onkeyup = function (e) {
            if (e.keyCode == 13 && _this.game.isOn) {
                var commands = _this.input.value;
                _this.game.out.println(commands);
                _this.parse(commands.split(" "));
                _this.input.value = "";
                _this.game.out.print(">");
            }
        };
    }
    Parser.prototype.parse = function (words) {
        var wantToQuit = false;
        var params = words.slice(1);
        if (words[0] == "") {
            return;
        }
        var command;
        command = this.commands[words[0]];
        if (command == null) {
            command = this["default"];
        }
        wantToQuit = command.execute(params);
        if (wantToQuit) {
            this.input.disabled = true;
            this.game.gameOver();
        }
    };
    return Parser;
}());
var Printer = (function () {
    function Printer(output) {
        this.output = output;
    }
    Printer.prototype.print = function (text) {
        this.output.innerHTML += text;
    };
    Printer.prototype.println = function (text) {
        if (text === void 0) { text = ""; }
        this.print(text + "<br/>");
        this.output.scrollTop = this.output.scrollHeight;
    };
    return Printer;
}());
var Quit = (function (_super) {
    __extends(Quit, _super);
    function Quit() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Quit.prototype.execute = function (params) {
        if (params.length > 0) {
            this.game.out.println("Verlaat wat?");
            return false;
        }
        else {
            return true;
        }
    };
    return Quit;
}(Command));
var Restart = (function (_super) {
    __extends(Restart, _super);
    function Restart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Restart.prototype.execute = function (params) {
        this.game.currentRoom = this.game.startRoom;
        this.game.out.println("Je bent " + this.game.currentRoom.description);
        return false;
    };
    return Restart;
}(Command));
var Room = (function () {
    function Room(description) {
        this.description = description;
    }
    Room.prototype.setExits = function (north, east, south, west, up, down, jump, climb) {
        if (north != null) {
            this.northExit = north;
        }
        if (east != null) {
            this.eastExit = east;
        }
        if (south != null) {
            this.southExit = south;
        }
        if (west != null) {
            this.westExit = west;
        }
        if (up != null) {
            this.upExit = up;
        }
        if (down != null) {
            this.downExit = down;
        }
        if (jump != null) {
            this.jumpExit = jump;
        }
        if (climb != null) {
            this.climbExit = climb;
        }
    };
    return Room;
}());
