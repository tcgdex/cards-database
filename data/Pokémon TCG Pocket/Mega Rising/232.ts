import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Magikarp",
		fr: "Magicarpe"
	},

	illustrator: "Tetsu Kayama",
	rarity: "One Star",
	category: "Pokemon",

	dexId: [129],
	hp: 30,
	types: ["Water"],

	description: {
		en: "In the distant past, it was somewhat stronger than\nthe horribly weak descendants that exist today."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Waterfall Evolution",
			fr: "Évolution en Cascade"
		},

		cost: ["Water", "Water", "Colorless"],

		effect: {
			en: "Put a random card from your deck that evolves from this Pokémon onto this Pokémon to evolve it.",
			fr: "Prenez au hasard une carte pouvant faire évoluer ce Pokémon dans votre deck, puis placez-la sur ce Pokémon pour le faire évoluer."
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