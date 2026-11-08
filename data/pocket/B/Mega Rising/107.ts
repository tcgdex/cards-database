import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Drifloon"
	},

	illustrator: "Asako Ito",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [425],
	hp: 60,
	types: ["Psychic"],

	description: {
		'en-us': "Because of the way it floats aimlessly, an old\nfolktale calls it a \"signpost for wandering spirits.\""
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Wind Blast"
		},

		cost: ["Psychic"],

		effect: {
			'en-us': "This attack does 20 damage to 1 of your opponent's Benched Pokémon."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1,

	boosters: ["mega-altaria"]
}

export default card