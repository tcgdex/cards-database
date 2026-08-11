import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [158],
	set: Set,

	name: {
		'en-us': "Totodile",
		'fr-fr': "Kaiminus",
		'es-es': "Totodile",
		'it-it': "Totodile",
		'pt-br': "Totodile",
		'de-de': "Karnimani"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],
	stage: "Basic",
	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "E",
	illustrator: "Mizue",

	description: {
		'en-us': "Its powerful, well-developed jaws are capable of crushing anything. Even its Trainer must be careful."
	},

	attacks: [{
		cost: ["Water"],

		name: {
			'en-us': "Rain Splash",
			'fr-fr': "Pluie Éclaboussante",
			'de-de': "Regenplatscher",
			'es-es': "Golpe de Lluvia",
			'pt-br': "Chuva Borrifante",
			'it-it': "Spruzzapioggia"
		},

		damage: 20
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582189,
				tcgplayer: 253186
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582189,
				tcgplayer: 253186
			}
		},
	],
}

export default card
