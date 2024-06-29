

const Evolution = require("./Evolution");



class Pharoah extends Evolution {
    constructor() {
        super();
        this.name = "pharoah";
        this.abilityDuration = 9000;
        this.abilityCooldown = 60000;
        this.subEvolutions = [];
    }
    default() {
        return {
            maxHealth: 1.5,
            health: 1.5,
            speed: 1,
            scale: 1.25,
            power: 1.25,
            resistance: 2,
            damage: 2.5,
            damageCooldown: 3,
            healAmount: 1.25,
            leech: 1.25,
        };
    }
    ability() {
        return {
            speed: 1.5,
            healWait: 0,
            healAmount: 5,
            scale: 2,
            power: 1.75,
            damage: 4.5,
            resistance: 2,
        };
    }
}
module.exports = Pharoah;