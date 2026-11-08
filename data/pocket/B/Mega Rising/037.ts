import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Pansear"
	},

	illustrator: "Jerky",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [513],
	hp: 60,
	types: ["Fire"],

	description: {
		'en-us': "This Pokémon lives in caves in volcanoes.\nThe fire within the tuft on its head can reach\n600 degrees Fahrenheit."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Beat"
		},

		damage: 10,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 1,

	boosters: ["mega-blaziken"]
}

export default card