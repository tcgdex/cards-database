import { Card } from "models/database/card"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	dexId: [559],

	name: {
		'en-us': "Scraggy"
	},

	illustrator: "Sekio",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],

	description: {
		'en-us': "It will abruptly headbutt anyone that makes eye\ncontact with it. Its skull is extremely hard."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Headbutt"
		},

		damage: 20,
		cost: ["Darkness"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 1
}

export default card