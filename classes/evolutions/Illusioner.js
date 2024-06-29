
const Evolution = require("./Evolution");

class Illusioner extends Evolution {
    constructor() {
        super();
        this.name = "illusioner";
        this.abilityDuration = 6000;
        this.abilityCooldown = 25000;
        this.subEvolutions = [];
    }
    default() {
        return {
            maxHealth: 0.5,
            health: 0.5,
            speed: 1.3,
            scale: 0.9,
            power: 0.6,
            resistance: 0.5,
            damage: 1.7,
            damageCooldown: 0.8,
            healAmount: 0.6,
            throwCooldown: 1.2,
            throwDamageMultiplier: 1.5,
        };
    }
    ability() {
        return {
            speed: 1.8,
            power: 1.5,
            damage: 2.1,
            damageCooldown: 1.2,
        };
    }
}
module.exports = Illusioner;