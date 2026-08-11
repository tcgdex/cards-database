import { Card } from "models/database/card"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	dexId: [141],

	name: {
		'en-us': "Kabutops"
	},

	illustrator: "Krgc",
	rarity: "One Shiny",
	category: "Pokemon",
	hp: 140,
	types: ["Fighting"],

	evolveFrom: {
		'en-us': "Kabuto"
	},

	description: {
		'en-us': "Kabutops slices its prey apart and sucks out\nthe fluids. The discarded body parts become\nfood for other Pokémon."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'en-us': "Leech Life"
		},

		damage: 50,
		cost: ["Fighting"],

		effect: {
			'en-us': "Heal from this Pokémon the same amount of damage you did to your opponent's Active Pokémon."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 1
}

export default card