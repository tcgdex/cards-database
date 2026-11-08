import { Card } from "models/database/card"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	dexId: [667],

	name: {
		'en-us': "Litleo"
	},

	illustrator: "Akira Komayama",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],

	description: {
		'en-us': "The more a Litleo trains its body and spirit by\nbattling mighty enemies, the hotter its mane\nwill grow."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Stampede"
		},

		damage: 10,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 1
}

export default card