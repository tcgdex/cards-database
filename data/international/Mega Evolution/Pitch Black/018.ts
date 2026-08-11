import { Card } from "models/database/card"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Popplio",
		'fr-fr': "Otaquin",
		'es-es': "Popplio",
		'es-mx': "Popplio",
		'de-de': "Robball",
		'it-it': "Popplio",
		'pt-br': "Popplio"
	},

	illustrator: "Oswaldo KATO",
	rarity: "Common",
	category: "Pokemon",
	dexId: [728],
	hp: 70,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Pound",
			'fr-fr': "Écras'Face",
			'es-es': "Destructor",
			'es-mx': "Destructor",
			'de-de': "Klaps",
			'it-it': "Botta",
			'pt-br': "Pancada"
		},

		cost: ["Water"],

		damage: 20
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 895806,
				tcgplayer: 704775
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 895806,
				tcgplayer: 704775
			}
		},
	],
}

export default card
