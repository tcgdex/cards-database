import { Card } from "models/database/card"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	dexId: [240],

	name: {
		'en-us': "Magby"
	},

	illustrator: "MAHOU",
	rarity: "One Shiny",
	category: "Pokemon",
	hp: 30,
	types: ["Fire"],

	description: {
		'en-us': "This Pokémon is still small and timid.\nWhenever Magby gets excited or surprised,\nflames leak from its mouth and its nose."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Toasty Toss"
		},

		effect: {
			'en-us': "Take a {R} Energy from your Energy Zone and attach it to 1 of your Benched Basic Pokémon."
		}
	}],

	weaknesses: [{
		type: "Colorless",
		value: "+20"
	}],

	retreat: 0
}

export default card