import { Card } from "models/database/card"
import Set from "../Crown Zenith"

const card: Card = {
	dexId: [341],
	set: Set,

	name: {
		'en-us': "Corphish",
		'fr-fr': "Écrapince",
		'es-es': "Corphish",
		'it-it': "Corphish",
		'pt-br': "Corphish",
		'de-de': "Krebscorps"
	},

	illustrator: "0313",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Water Gun",
			'fr-fr': "Pistolet à O",
			'es-es': "Pistola Agua",
			'it-it': "Pistolacqua",
			'pt-br': "Revólver d'Água",
			'de-de': "Aquaknarre"
		},

		damage: 10
	}, {
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			'en-us': "Crabhammer",
			'fr-fr': "Pince-Masse",
			'es-es': "Martillazo",
			'it-it': "Martellata",
			'pt-br': "Martelo Caranguejo",
			'de-de': "Krabbhammer"
		},

		damage: 50
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "F",


	description: {
		'en-us': "No matter how dirty the water in the river, it will adapt and thrive. It has a strong will to survive.",
	},

	

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 691750,
				tcgplayer: 478132
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 691750,
				tcgplayer: 478132
			}
		},
	],
}

export default card
