import { Card } from "models/database/card"
import Set from "../Stellar Crown"

const card: Card = {
	dexId: [456],
	set: Set,

	name: {
		'en-us': "Finneon",
		'fr-fr': "Écayon",
		'es-es': "Finneon",
		'it-it': "Finneon",
		'pt-br': "Finneon",
		'de-de': "Finneon"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			'en-us': "Sprinkle Water",
			'fr-fr': "Eau Aspergeante",
			'es-es': "Esparcir Agua",
			'it-it': "Goccioline",
			'pt-br': "Aspergir Água",
			'de-de': "Wassersprüher"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 785889,
				tcgplayer: 567261
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 785889,
				tcgplayer: 567261
			}
		},
	],

	illustrator: "Yukiko Baba",

}

export default card
