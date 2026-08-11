import { Card } from "models/database/card"
import Set from "../Journey Together"

const card: Card = {
	dexId: [270],
	set: Set,

	name: {
		'en-us': "Lotad",
		'fr-fr': "Nénupiot",
		'es-es': "Lotad",
		'de-de': "Loturzel",
		'it-it': "Lotad",
		'pt-br': "Lotad",
		'es-mx': "Lotad"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			'en-us': "Water Gun",
			'fr-fr': "Pistolet à O",
			'es-es': "Pistola Agua",
			'de-de': "Aquaknarre",
			'it-it': "Pistolacqua",
			'pt-br': "Revólver d'Água",
			'es-mx': "Chorro de Agua"
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
	regulationMark: "I",
	illustrator: "Ayako Ozaki",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 817187,
				tcgplayer: 623462
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 817187,
				tcgplayer: 623462
			}
		},
	],
}

export default card
