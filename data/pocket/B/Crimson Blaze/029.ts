import { Card } from "models/database/card"
import Set from "../Crimson Blaze"

const card: Card = {
	set: Set,

	dexId: [695],

	name: {
		'en-us': "Heliolisk"
	},

	illustrator: "kawayoo",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 100,
	types: ["Lightning"],

	evolveFrom: {
		'en-us': "Helioptile"
	},

	description: {
		'en-us': "One Heliolisk basking in the sun with its frill\noutspread is all it would take to produce enough\nelectricity to power a city."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Thunderbolt"
		},

		damage: 120,
		cost: ["Lightning", "Lightning"],

		effect: {
			'en-us': "Discard all Energy from this Pokémon."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card