import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Flaaffy"
	},

	illustrator: "Shibuzoh.",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [180],
	hp: 90,
	types: ["Lightning"],

	evolveFrom: {
		'en-us': "Mareep"
	},

	description: {
		'en-us': "Because of its rubbery, electricity-resistant skin,\nit can store lots of electricity in its fur."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Electric Punch"
		},

		damage: 40,
		cost: ["Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,

	boosters: ["mega-altaria"]
}

export default card