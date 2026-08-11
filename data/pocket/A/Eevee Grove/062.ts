import { Card } from "models/database/card"
import Set from "../Eevee Grove"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Minccino",
		'fr-fr': "Chinchidou"
	},

	illustrator: "Sekio",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [572],
	hp: 70,
	types: ["Colorless"],

	description: {
		'en-us': "The way it brushes away grime with its tail\ncan be helpful when cleaning. But its focus on\nspotlessness can make cleaning more of a hassle.",
		'fr-fr': "Il époussette les saletés avec sa queue. Il est d'une aide précieuse pour faire le ménage, mais il est très tatillon sur la propreté."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Pound",
			'fr-fr': "Écras'Face"
		},

		damage: 10,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card