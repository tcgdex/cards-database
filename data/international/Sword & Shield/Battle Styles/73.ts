import { Card } from 'models/database/card'
import Set from '../Battle Styles'

const card: Card = {
	dexId: [532],
	set: Set,

	name: {
		'en-us': "Timburr",
		'fr-fr': "Charpenti",
		'es-es': "Timburr",
		'it-it': "Timburr",
		'pt-br': "Timburr",
		'de-de': "Praktibalk"
	},

	illustrator: "Mina Nakai",
	rarity: "Common",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],

	attacks: [{
		name: {
			'en-us': "Pound",
			'fr-fr': "Écras'Face",
			'es-es': "Destructor",
			'it-it': "Botta",
			'pt-br': "Pancada",
			'de-de': "Klaps"
		},

		damage: 20,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E",


	stage: "Basic",

	description: {
		'en-us': "Timburr that have started carrying logs that are about three times their size are nearly ready to evolve."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 545481,
				tcgplayer: 234249
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 545481,
				tcgplayer: 234249
			}
		},
	],
}

export default card
