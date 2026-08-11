import { Card } from "models/database/card"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	dexId: [371],

	name: {
		'en-us': "Bagon"
	},

	illustrator: "sui",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Dragon"],

	description: {
		'en-us': "Its belief that it will be able to fly one day is\napparently the influence of information carried\nin its genes."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Bite"
		},

		damage: 20,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Colorless",
		value: "+20"
	}],

	retreat: 1
}

export default card