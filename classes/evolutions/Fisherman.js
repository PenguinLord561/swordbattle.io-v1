

const Evolution = require("./Evolution");
class Fisherman extends Evolution {
    constructor() {
        super();
        this.name = "fisherman";
        this.abilityDuration = 7000;
        this.abilityCooldown = 45000;
        this.subEvolutions = [];
    }
    default() {
        return {
            maxHealth: 0.85,
            health: 0.85,
            speed: 1.1,
            scale: 1,
            power: 1,
            resistance: 1,
            damage: 1.9,
            damageCooldown: 1.3,
            healAmount: 1.5,
            healWait: 1,
            throwCooldown: 0.5,
        };
    }
    ability() {
        return {
            healWait: 0,
            healAmount: 3,
            scale: 1.5,
            power: 1,
            resistance: 1,
            speed: 2,
        };
    }
}
module.exports = Fisherman;
