

const Evolution = require("./Evolution");



class Runic extends Evolution {
    constructor() {
        super();
        this.name = "runic";
        this.abilityDuration = 5000;
        this.abilityCooldown = 60000;
        this.subEvolutions = [];
    }
    default() {
        return {
            maxHealth: 1.1,
            health: 1.1,
            speed: 1.4,
            scale: 0.75,
            power: 0.9,
            resistance: 2,
            damage: 1.1,
            damageCooldown: 1,
            healAmount: 1.25,
            leech: 2,
            throwCooldown: 1.2,
           
        };
    }
    ability() {
        return {
            speed: 1.3,
            healWait: 0,
            healAmount: 5,
            scale: 1.5,
            power: 1.75,
            damage: 2,
            resistance: 2,
        };
    }
}
module.exports = Runic;