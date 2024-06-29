const Evolution = require("./Evolution");

class archerblade extends Evolution {
    constructor() {
        super();
        this.name = "archerblade";
        this.abilityDuration = 5000;
        this.abilityCooldown = 30000;
        this.subEvolutions = [];
    }
    default() {
        return {
            maxHealth: 0.9,
            health: 0.9,
            speed: 1.5,
            scale: 1,
            power: 1.5,
            resistance: 0.5,
            damage: 1.2,
            damageCooldown: 1,
            healAmount: 2,
            healWait: 1,
            throwCooldown: 1.5,
            throwDamageMultiplier: 3,
        };
    }
    ability() {
        return {
            scale: 1.1,
            resistance: 0.2,
            healAmount: 0.9,
            healWait: 0.3,
            throwCooldown: 0.5,
        };
    }
}
module.exports = archerblade;
