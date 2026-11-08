import { Card } from "models/database/card"
import Set from "../My First Battle"

const card: Card = {
	dexId: [103],
	set: Set,

	name: {
		'en-us': "Exeggutor",
	},

	rarity: "None",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],
	evolveFrom: {
		'en-us': "Exeggcute",
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Grass", "Grass"],

		name: {
			'en-us': "Seed Bomb",
		},

		damage: 40
		}, {
		cost: ["Grass", "Grass", "Grass"],

		name: {
			'en-us': "Barrage Impact",
		},

		damage: 80
	}],

	variants: [
		{
			type: "normal",
			stamp: ["bulbasaur"],

			thirdParty: {
				cardmarket: 741981,
				tcgplayer: 524015
			}
		},
	],

	illustrator: "nagimiso",
}

export default card