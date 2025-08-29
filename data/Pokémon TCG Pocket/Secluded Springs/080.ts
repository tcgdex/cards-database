import { Card } from "../../../interfaces"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		en: "Suicune ex"
	},

	illustrator: "PLANETA CG Works",
	rarity: "Two Star",
	category: "Pokemon",
	hp: 140,
	types: ["Water"],
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
			en: "Crystal Waltz"
		},

		damage: 20,
		cost: ["Water", "Water"],

		effect: {
			en: "This attack does 20 damage for each Benched Pokémon (both yours and your opponent's)."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 2
}

export default card