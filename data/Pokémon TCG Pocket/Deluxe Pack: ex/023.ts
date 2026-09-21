import { Card } from "../../../interfaces"
import Set from "../Deluxe Pack: ex"

const card: Card = {
	set: Set,

	name: {
		en: "Shuckle ex"
	},

	illustrator: "PLANETA Mochizuki",
	rarity: "Four Diamond",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],
	stage: "Basic",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			en: "Solid Shell"
		},

		effect: {
			en: "This Pokémon takes −20 damage from attacks."
		}
	}],

	attacks: [{
		name: {
			en: "Triple Slap"
		},

		damage: 20,
		cost: ["Grass"],

		effect: {
			en: "Flip 3 coins. This attack does 20 damage for each heads."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1
}

export default card