import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Morgrem"
	},

	illustrator: "Hitoshi Ariga",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [860],
	hp: 90,
	types: ["Darkness"],

	evolveFrom: {
		'en-us': "Impidimp"
	},

	description: {
		'en-us': "This Pokémon absorbs negative emotions and\nturns them into energy. It's popular with people\nwho tend to think gloomy thoughts."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "False Surrender"
		},

		damage: 50,
		cost: ["Darkness", "Darkness"],

		effect: {
			'en-us': "This attack's damage isn't affected by any effects on your opponent's Active Pokémon."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 2,

	boosters: ["mega-altaria"]
}

export default card