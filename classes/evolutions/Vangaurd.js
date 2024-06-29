
const Evolution = require("./Evolution");


class Vangaurd extends Evolution {
    constructor() {
        super();
        this.name = "vangaurd";
        this.abilityDuration = 7000;
        this.abilityCooldown = 30000;
        this.subEvolutions = [];
    }
    default() {
        return {
            maxHealth: 0.55,
            health: 0.55,
            speed: 1.35,
            scale: 1.25,
            power: 1.2,
            resistance: 1.4,
            damage: 1.35,
            damageCooldown: 0.85,
            healAmount: 0.6,
            leech: 2.5,
        };
    }
    ability() {
        return {
            leech: 3.5,
            speed: 1.9,
            resistance: 1.5,
            power: 1.5,
        };
    }
}
module.exports = Vangaurd;