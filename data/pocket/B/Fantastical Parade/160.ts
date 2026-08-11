import { Card } from "models/database/card"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	dexId: [643],

	name: {
		'en-us': "Reshiram"
	},

	illustrator: "toriyufu",
	rarity: "One Star",
	category: "Pokemon",
	hp: 120,
	types: ["Fire"],

	description: {
		'en-us': "When Reshiram's tail flares, the heat energy moves\nthe atmosphere and changes the world's weather."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Blue Flare"
		},

		damage: 110,
		cost: ["Fire", "Fire", "Fire"],

		effect: {
			'en-us': "Discard 2 {R} Energy from this Pokémon."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 2
}

export default card