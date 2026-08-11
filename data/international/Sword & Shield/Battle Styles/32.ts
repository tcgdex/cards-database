import { Card } from 'models/database/card'
import Set from '../Battle Styles'

const card: Card = {
	dexId: [117],
	set: Set,

	name: {
		'en-us': "Seadra",
		'fr-fr': "Hypocéan",
		'es-es': "Seadra",
		'it-it': "Seadra",
		'pt-br': "Seadra",
		'de-de': "Seemon"
	},

	illustrator: "0313",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	evolveFrom: {
		'en-us': "Horsea",
		'fr-fr': "Hypotrempe",
		'es-es': "Horsea",
		'it-it': "Horsea",
		'pt-br': "Horsea",
		'de-de': "Seeper"
	},

	attacks: [{
		name: {
			'en-us': "Water Gun",
			'fr-fr': "Pistolet à O",
			'es-es': "Pistola Agua",
			'it-it': "Pistolacqua",
			'pt-br': "Revólver d'Água",
			'de-de': "Aquaknarre"
		},

		damage: 40,
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",


	stage: "Stage1",

	description: {
		'en-us': "It is capable of swimming backwards by rapidly flapping its winglike pectoral fins and stout tail."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 545111,
				tcgplayer: 234156
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 545111,
				tcgplayer: 234156
			}
		},
	],
}

export default card
