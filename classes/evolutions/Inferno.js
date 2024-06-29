const Evolution = require("./Evolution");
class Inferno extends Evolution {
    constructor() {
        super();
        this.name = "inferno";
        this.abilityDuration = 5000;
        this.abilityCooldown = 30000;
        this.subEvolutions = [];
    }
    default() {
        return {
            maxHealth: 0.7,
            health: 0.7,
            speed: 1.2,
            scale: 1.4,
            power: 2.1,
            resistance: 6,
            damage: 2.4,
            damageCooldown: 1.5,
            healAmount: 1.5,
            healWait: 2,
        };
    }
    ability() {
        return {
            healWait: 0,
            healAmount: 1,
            scale: 1.5,
            power: 1.7,
            speed: 2.7,
            resistance: 15, 
        };
    }
}
module.exports = Inferno;