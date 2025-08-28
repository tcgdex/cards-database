import { Card } from "../../../interfaces"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		en: "Raikou ex"
	},

	illustrator: "Tsuyoshi Nagano",
	rarity: "Two Star",
	category: "Pokemon",
	hp: 130,
	types: ["Lightning"],
	stage: "Basic",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			en: "Legendary Pulse"
		},

		effect: {
			en: "At the end of your turn, if this Pokémon is in the Active Spot, draw a card."
		}
	}],

	attacks: [{
		name: {
			en: "Voltaic Bullet"
		},

		damage: 60,
		cost: ["Lightning", "Lightning"],

		effect: {
			en: "This attack also does 10 damage to 1 of your opponent's Benched Pokémon."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2
}

export default card