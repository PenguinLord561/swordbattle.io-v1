
const Evolution = require("./Evolution");
const Illusioner = require("./Illusioner");
const Vangaurd = require("./Vangaurd");

class Revenant extends Evolution {
    constructor() {
        super();
        this.name = "revenant";
        this.abilityDuration = 7000;
        this.abilityCooldown = 30000;
        this.subEvolutions = [50000, new Vangaurd(), new Illusioner()];
    }
    default() {
        return {
            maxHealth: 0.7,
            health: 0.7,
            speed: 1.3,
            scale: 1.2,
            power: 0.9,
            resistance: 0.7,
            damage: 1.3,
            damageCooldown: 0.85,
            healAmount: 0.7,
            leech: 2.5,
        };
    }
    ability() {
        return {
            leech: 3.5,
            speed: 1.8,
            resistance: 1.5,
            power: 1.5,
        };
    }
}
module.exports = Revenant;