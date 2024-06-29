

const Evolution = require("./Evolution");
const Archerblade = require("./Archerblade");
const Archergod = require("./Archergod");
class Archer extends Evolution {
    constructor() {
        super();
        this.name = "archer";
        this.abilityDuration = 5000;
        this.abilityCooldown = 70000;
        this.subEvolutions = [50000, new Archergod(), new Archerblade()];
    }
    default() {
        return {
            maxHealth: 0.4,
            health: 0.4,
            speed: 1,
            scale: 1,
            power: 1.3,
            resistance: 0.5,
            damage: 0.01,
            damageCooldown: 1,
            healAmount: 2,
            healWait: 1,
            throwCooldown: 0.7,
            throwDamageMultiplier: 700,
        };
    }
    ability() {
        return {
            speed: 1.5,
            scale: 0.9,
            resistance: 0.2,
            healAmount: 0.9,
            healWait: 0.5,
            throwCooldown: 0.5,
            throwDamageMultiplier: 1000,
        };
    }
}
module.exports = Archer;
