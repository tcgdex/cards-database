import { Card } from "models/database/card"
import Set from "../My First Battle"

const card: Card = {
	dexId: [43],
	set: Set,

	name: {
		'en-us': "Oddish",
	},

	rarity: "None",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			'en-us': "Absorb",
		},

		effect: {
			'en-us': "Heal 10 damage from this Pokémon.",
		},

		damage: 10
	}],

	variants: [
		{
			type: "normal",
			stamp: ["bulbasaur"],

			thirdParty: {
				cardmarket: 741978,
				tcgplayer: 524008
			}
		},
	],

	illustrator: "Gemi",
}

export default card
