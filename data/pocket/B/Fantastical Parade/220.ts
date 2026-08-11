import { Card } from "models/database/card"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	dexId: [140],

	name: {
		'en-us': "Kabuto"
	},

	illustrator: "Krgc",
	rarity: "One Shiny",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],

	evolveFrom: {
		'en-us': "Dome Fossil"
	},

	description: {
		'en-us': "This species is almost entirely extinct. Kabuto\nmolt every three days, making their shells harder\nand harder."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Shell Attack"
		},

		damage: 40,
		cost: ["Fighting"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 1
}

export default card