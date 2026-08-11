import { Card } from "models/database/card"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	dexId: [665],

	name: {
		'en-us': "Spewpa"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	evolveFrom: {
		'en-us': "Scatterbug"
	},

	description: {
		'en-us': "Spewpa doesn't live in a fixed location. It roams\nwhere it pleases across the fields and mountains,\nbuilding up the energy it needs to evolve."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Signs of Evolution"
		},

		cost: ["Colorless"],

		effect: {
			'en-us': "Put a random card that evolves from Spewpa from your deck into your hand."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 2
}

export default card