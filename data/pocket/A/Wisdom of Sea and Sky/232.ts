import { Card } from "models/database/card"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Yanmega ex",
		'fr-fr': "Yanmega-ex"
	},

	illustrator: "PLANETA Tsuji",
	rarity: "Two Shiny",
	category: "Pokemon",

	dexId: [469],
	hp: 140,
	types: ["Grass"],

	evolveFrom: {
		'en-us': "Yanma"
	},

	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		name: {
			'en-us': "Air Slash",
			'fr-fr': "Lame d'Air"
		},

		damage: 120,
		cost: ["Colorless", "Colorless", "Colorless"],

		effect: {
			'en-us': "Discard a random Energy from this Pokémon.",
			'fr-fr': "Défaussez une Énergie au hasard de ce Pokémon."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["ho-oh"]
}

export default card