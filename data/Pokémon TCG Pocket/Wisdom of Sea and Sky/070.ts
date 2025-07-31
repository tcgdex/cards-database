import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Elekid"
	},

	illustrator: "Miki Tanaka",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 30,
	types: ["Lightning"],

	description: {
		en: "When a storm approaches, this Pokémon gets\nrestless. Once Elekid hears the sound of thunder,\nit gets full-on rowdy."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Zappy Shot"
		},

		effect: {
			en: "This attack does 20 damage to 1 of your opponent's Benched Pokémon."
		}
	}],

	weaknesses: [{
		type: "Colorless",
		value: "+20"
	}],

	retreat: 0
}

export default card