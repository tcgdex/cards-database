import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Lillipup"
	},

	illustrator: "Sekio",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [506],
	hp: 60,
	types: ["Colorless"],

	description: {
		'en-us': "This Pokémon is far brighter than the average\nchild, and Lillipup won't forget the love it\nreceives or any abuse it suffers."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Collect"
		},

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