import { Card } from "models/database/card"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	dexId: [584],

	name: {
		'en-us': "Vanilluxe"
	},

	illustrator: "kodama",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 140,
	types: ["Water"],

	evolveFrom: {
		'en-us': "Vanillish"
	},

	description: {
		'en-us': "People believe this Pokémon formed when two\nVanillish stuck together. Its body temperature is\nroughly 21 degrees Fahrenheit."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'en-us': "Sweets Relay"
		},

		damage: 60,
		cost: ["Water", "Water"],

		effect: {
			'en-us': "If 1 of your Pokémon used Sweets Relay during your last turn, this attack does 60 more damage."
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 2
}

export default card