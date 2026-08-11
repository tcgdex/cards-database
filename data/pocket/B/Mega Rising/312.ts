import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Meowth"
	},

	illustrator: "Taiga Kasai",
	rarity: "One Shiny",
	category: "Pokemon",

	dexId: [52],
	hp: 60,
	types: ["Colorless"],

	description: {
		'en-us': "All it does is sleep during the daytime. At night,\nit patrols its territory with its eyes aglow."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Pay Day"
		},

		damage: 10,
		cost: ["Colorless"],

		effect: {
			'en-us': "Draw a card."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["mega-altaria"]
}

export default card