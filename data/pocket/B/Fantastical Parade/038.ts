import { Card } from "models/database/card"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	dexId: [583],

	name: {
		'en-us': "Vanillish"
	},

	illustrator: "Shibuzoh.",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Water"],

	evolveFrom: {
		'en-us': "Vanillite"
	},

	description: {
		'en-us': "It blasts enemies with cold air reaching −148\ndegrees Fahrenheit, freezing them solid. But it\nspares their lives afterward—it's a kind Pokémon."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Frost Breath"
		},

		damage: 40,
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 1
}

export default card