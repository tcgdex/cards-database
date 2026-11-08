import { Card } from "models/database/card"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	dexId: [66],

	name: {
		'en-us': "Machop"
	},

	illustrator: "Atsuko Nishida",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	description: {
		'en-us': "Always brimming with power, it passes time by\nlifting boulders. Doing so makes it even stronger."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Shatter"
		},

		damage: 10,
		cost: ["Colorless"],

		effect: {
			'en-us': "Discard a Stadium in play."
		}
	}],

	weaknesses: [{
		type: "Psychic",
		value: "+20"
	}],

	retreat: 1
}

export default card