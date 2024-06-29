
const Evolution = require("./Evolution");
const Fisherman = require("./Fisherman");
const Illusioner = require("./Illusioner");
class Lumberjack extends Evolution {
    constructor() {
        super();
        this.name = "lumberjack";
        this.abilityDuration = 6000;
        this.abilityCooldown = 40000;
        this.subEvolutions = [50000, new Illusioner(), new Fisherman()];
    }
    default() {
        return {
            maxHealth: 0.5,
            health: 0.5,
            speed: 1.1,
            scale: 1.2,
            power: 1.3,
            resistance: 1.2,
            damage: 4,
            damageCooldown: 1.7,
            healAmount: 1.5,
            healWait: 1.7,
            throwCooldown: 0.4,
            throwDamageMultiplier: 0.5, 
        };
    }
    ability() {
        return {
            healWait: 0,
            healAmount: 1.5,
            scale: 1.2,
            power: 1.5,
            damageCooldown: 1.25,
            resistance: 1,
            speed: 1.2,
        };
    }
}
module.exports = Lumberjack;
