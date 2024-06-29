

const Evolution = require("./Evolution");
const Gladiator = require("./Gladiator");
const Mummy = require("./Mummy");
class Rook extends Evolution {
    constructor() {
        super();
        this.name = "rook";
        this.abilityDuration = 8000;
        this.abilityCooldown = 60000;
        this.subEvolutions = [30000, new Gladiator(), new Mummy()];
    }
    default() {
        return {
            maxHealth: 1.4,
            health: 1.4,
            speed: 0.8,
            scale: 1.3,
            power: 1,
            resistance: 5.5,
            damage: 1.6,
            damageCooldown: 1.3,
            healAmount: 1.5,
            healWait: 2
        };
    }
    ability() {
        return {
            healWait: 0,
            healAmount: 2,
            scale: 5,
            power: 2,
            damageCooldown: 0.7,
            resistance: 1,
            speed: 0.5
        };
    }
}
module.exports = Rook;
