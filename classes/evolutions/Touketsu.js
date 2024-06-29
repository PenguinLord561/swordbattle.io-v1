const Evolution = require("./Evolution");

class Touketsu extends Evolution {
    constructor() {
        super();
        this.name = "touketsu";
        this.abilityDuration = 3000;
        this.abilityCooldown = 10000;
        this.subEvolutions = [];
    }
    default() {
        return {
            maxHealth: 1.2,
            health: 1.2,
            speed: 1.3,
            scale: 1.1,
            power: 1.2,
            resistance: 4.5,
            damage: 1.1,
            damageCooldown: 1.3,
            throwCooldown:0.8,
            healAmount: 1.5,
            healWait: 2,
            throwCooldown: 1.3,
        };
    }
    ability() {
        return {
            healWait: 0.1,
            healAmount: 1,
            scale: 1.5,
            power: 1.5,
            speed: 3,
            damagecooldown: 0.9,
        };
    }
}
module.exports = Touketsu;