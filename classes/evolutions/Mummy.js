
const Runic = require("./Runic")
const Evolution = require("./Evolution");
const Pharoah = require("./Pharoah");


class Mummy extends Evolution {
    constructor() {
        super();
        this.name = "mummy";
        this.abilityDuration = 5000;
        this.abilityCooldown = 60000;
        this.subEvolutions = [50000, new Pharoah(), new Runic()];
    }
    default() {
        return {
            maxHealth: 1.2,
            health: 1.2,
            speed: 1,
            scale: 1,
            power: 1.25,
            resistance: 0.9,
            damage: 1.4,
            damageCooldown: 1.5,
            healAmount: 1.25,
            leech: 1.3,
        };
    }
    ability() {
        return {
            speed: 2.5,
            healWait: 0,
            power: 1.5,
            damageCooldown: 0.75,
            damage: 1.3,
            resistance: 2,
            leech: 2.3,
        };
    }
}
module.exports = Mummy;