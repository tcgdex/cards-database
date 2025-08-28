import { Card } from "../../../interfaces"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		en: "Fletchling"
	},

	illustrator: "Shibuzoh.",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 50,
	types: ["Colorless"],

	description: {
		en: "This Pokémon is normally calm, but once it enters battle,\nits hormonal balance changes and it becomes aggressive."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Quick Attack"
		},

		damage: 10,
		cost: ["Colorless"],

		effect: {
			en: "Flip a coin. If heads, this attack does 30 more damage."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1
}

export default card