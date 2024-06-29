

const Evolution = require("./Evolution");

class Nexus extends Evolution {
    constructor() {
        super();
        this.name = "nexus";
        this.abilityDuration = 5000;
        this.abilityCooldown = 50000;
        this.subEvolutions = [];
    }
    default() {
        return {
            maxHealth: 1.2,
                health: 1.2,
                speed: 1.1,
                scale: 1.25,
                power: 1.5,
                resistance: 4,
                damage: 1.55,
                damageCooldown: 1,
                healAmount: 1.5,
        };
    }
    ability() {
        return {
            healWait: 0,
            healAmount: 2,
            speed: 2,
            scale: 3,
            power: 1.5,
            resistance: 4,
            damage: 1.9,
            damageCooldown: 1,
            healAmount: 1.5,
        };
    }
}
module.exports = Nexus;
