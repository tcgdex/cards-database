import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Magikarp"
	},

	illustrator: "Tetsu Kayama",
	rarity: "One Star",
	category: "Pokemon",
	hp: 30,
	types: ["Water"],

	description: {
		en: "In the distant past, it was somewhat stronger than\nthe horribly weak descendants that exist today."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Waterfall Evolution"
		},

		cost: ["Water", "Water", "Colorless"],

		effect: {
			en: "Put a random card from your deck that evolves from this Pokémon onto this Pokémon to evolve it."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,

	boosters: ["mega-gyarados"]
}

export default card