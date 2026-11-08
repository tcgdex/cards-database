import { Card } from "models/database/card"
import Set from "../Eevee Grove"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Popplio",
		'fr-fr': "Otaquin"
	},

	illustrator: "match",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [728],
	hp: 70,
	types: ["Water"],

	description: {
		'en-us': "The balloons it inflates with its nose grow\nlarger and larger as it practices day by day.",
		'fr-fr': "Grâce à son entraînement quotidien, les ballons qu'il gonfle avec son nez sont de plus en plus gros."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Watering",
			'fr-fr': "Arrosage"
		},

		damage: 30,
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1
}

export default card