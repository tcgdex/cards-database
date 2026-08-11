import { Card } from "models/database/card"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Mankey",
		'fr-fr': "Férosinge",
		'es-es': "Mankey",
		'es-mx': "Mankey",
		'de-de': "Menki",
		'it-it': "Mankey",
		'pt-br': "Mankey"
	},

	illustrator: "Yuka Morii",
	rarity: "Common",
	category: "Pokemon",
	dexId: [56],
	hp: 50,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Low Kick",
			'fr-fr': "Balayage",
			'es-es': "Patada Baja",
			'es-mx': "Patada Baja",
			'de-de': "Fußkick",
			'it-it': "Colpo Basso",
			'pt-br': "Rasteira"
		},

		cost: ["Colorless"],

		damage: 20
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 895828,
				tcgplayer: 704799
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 895828,
				tcgplayer: 704799
			}
		},
	],
}

export default card
