import { Card } from "models/database/card"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	dexId: [145],

	name: {
		'en-us': "Zapdos"
	},

	illustrator: "Ken Sugimori",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 100,
	types: ["Lightning"],

	description: {
		'en-us': "Zapdos is a legendary bird Pokémon. It's said\nthat when Zapdos rubs its feathers together,\nlightning will fall immediately after."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Heavy Thunder"
		},

		cost: ["Lightning", "Lightning", "Lightning"],

		effect: {
			'en-us': "1 other Pokémon (either yours or your opponent's) is chosen at random 1 time. Do 100 damage to the chosen Pokémon."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1
}

export default card