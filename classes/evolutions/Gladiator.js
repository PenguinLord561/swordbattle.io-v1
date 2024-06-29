const Nexus = require("./Nexus");
const Juggernaut = require("./Juggernaut");
const Evolution = require("./Evolution");

class Gladiator extends Evolution {
    constructor() {
        super();
        this.name = "gladiator";
        this.abilityDuration = 5000;
        this.abilityCooldown = 50000;
        this.subEvolutions = [50000, new Juggernaut(), new Nexus()];
    }
    default() {
        return {
            maxHealth: 1.2,
            health: 1.2,
            speed: 1,
            scale: 1.2,
            power: 1.3,
            resistance: 3,
            damage: 1.45,
            damageCooldown: 1,
            healAmount: 1.5,
        };
    }
    ability() {
        return {
            healWait: 0,
            healAmount: 2,
            speed: 1.75,
            scale: 2,
            power: 1.5,
            resistance: 4,
            damage: 1.75,
            damageCooldown: 1,
            healAmount: 1.5,
        };
    }
}
module.exports = Gladiator;
