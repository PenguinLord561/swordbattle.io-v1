const Evolution = require("./Evolution");
const Touketsu = require("./Touketsu");
const Inferno = require("./Inferno");
class Samurai extends Evolution {
    constructor() {
        super();
        this.name = "samurai";
        this.abilityDuration = 2000;
        this.abilityCooldown = 7000;
        this.subEvolutions = [50000, new Inferno(), new Touketsu()];
    }
    default() {
        return {
            maxHealth: 1.1,
            health: 1.1,
            speed: 1.4,
            scale: 1.3,
            power: 1,
            resistance: 4,
            damage: 1.8,
            damageCooldown: 1.5,
            healAmount: 1.5,
            healWait: 2,
        };
    }
    ability() {
        return {
            healWait: 0.1,
            healAmount: 1,
            scale: 1.5,
            power: 1.5,
            damageCooldown: 0.7,
            speed: 2.2,
        };
    }
}
module.exports = Samurai;