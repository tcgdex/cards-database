import { Card } from "models/database/card"
import Set from "../My First Battle"

const card: Card = {
	dexId: [1],
	set: Set,

	name: {
		'en-us': "Bulbasaur",
	},

	rarity: "None",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			'en-us': "Tackle",
		},

		damage: 10
	}, {
		cost: ["Grass", "Grass"],

		name: {
			'en-us': "Vine Whip",
		},

		damage: 30
	}],

	variants: [
		{
			type: "normal",
			stamp: ["bulbasaur"],

			thirdParty: {
				cardmarket: 741976,
				tcgplayer: 523985
			}
		},
		{
			type: "normal",
			subtype: "blue-border",
			stamp: ["bulbasaur", "pokeball"],

			thirdParty: {
				cardmarket: 741975,
				tcgplayer: 523984
			}
		},
	],

	illustrator: "Saya Tsuruta",
}

export default card