

const Evolution = require("./Evolution");
class Archergod extends Evolution {
    constructor() {
        super();
        this.name = "archergod";
        this.abilityDuration = 3000;
        this.abilityCooldown = 60000;
        this.subEvolutions = [];
    }
    default() {
        return {
            maxHealth: 0.5,
            health: 0.5,
            speed: 1.2,
            scale: 1,
            power: 1.5,
            resistance: 0.8,
            damage: 0.01,
            damageCooldown: 0.9,
            healAmount: 1.8,
            healWait: 2,
            throwCooldown: 0.7,
            throwDamageMultiplier: 900,
        };
    }
    ability() {
        return {
            speed: 1.8 ,
            scale: 0.8,
            resistance: 0.2,
            healAmount: 0.9,
            healWait: 0,
            throwCooldown: 0.5,
            throwDamageMultiplier: 1200
        };
    }
}
module.exports = Archergod;
