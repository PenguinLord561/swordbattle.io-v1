const Evolution = require("./Evolution");
const Gladiator = require("./Gladiator");
const Lumberjack = require("./Lumberjack");
class Warrior extends Evolution {
    constructor() {
        super();
        this.name = "warrior";
        this.abilityDuration = 5000;
        this.abilityCooldown = 50000;
        this.subEvolutions = [30000, new Lumberjack(), new Gladiator(),];
    }
    default() {
        return {
            maxHealth: 1.05,
            health: 1.05,
            speed: 0.9,
            scale: 1.15,
            power: 1,
            resistance: 2.5,
            damage: 1.5,
            damageCooldown: 1,
            healAmount: 1.5,
        };
    }
    ability() {
        return {
            healWait: 0,
            healAmount: 2,
            speed: 1.5,
            scale: 1.5,
            power: 1.3,
            resistance: 4,
            damage: 1.5,
            damageCooldown: 1,
            healAmount: 1.5,
        };
    }
}
module.exports = Warrior;