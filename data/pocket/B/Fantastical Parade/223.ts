import { Card } from "models/database/card"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	dexId: [236],

	name: {
		'en-us': "Tyrogue"
	},

	illustrator: "Nisota Niso",
	rarity: "One Shiny",
	category: "Pokemon",
	hp: 30,
	types: ["Fighting"],

	description: {
		'en-us': "It is always bursting with energy. To make itself\nstronger, it keeps on fighting even if it loses."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Slappy Knuckle"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Colorless",
		value: "+20"
	}],

	retreat: 0
}

export default card