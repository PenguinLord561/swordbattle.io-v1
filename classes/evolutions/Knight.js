const Gladiator = require("./Gladiator");
const Evolution = require("./Evolution");
const Samurai = require("./Samurai");

class Knight extends Evolution {
    constructor() {
        super();
        this.name = "knight";
        this.abilityDuration = 5000;
        this.abilityCooldown = 40000;
        this.subEvolutions = [30000, new Gladiator(), new Samurai()];
    }
    default() {
        return {
            maxHealth: 1.2,
            health: 1.2,
            speed: 1.1,
            power: 1.1,
            scale: 1.2,
            resistance: 1.1,
            damage: 1.5,
            damageCooldown: 1.25,
        };
    }
    ability() {
        return {
            speed: 2,
            power: 0.7,
            resistance: 5,
            damage: 1.8,
            healwait: 0.5,
        };
    }
}
module.exports = Knight;