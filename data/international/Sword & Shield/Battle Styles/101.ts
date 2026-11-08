import { Card } from 'models/database/card'
import Set from '../Battle Styles'

const card: Card = {
	dexId: [436],
	set: Set,

	name: {
		'en-us': "Bronzor",
		'fr-fr': "Archéomire",
		'es-es': "Bronzor",
		'it-it': "Bronzor",
		'pt-br': "Bronzor",
		'de-de': "Bronzel"
	},

	illustrator: "Mizue",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Metal"],

	attacks: [{
		name: {
			'en-us': "Ram",
			'fr-fr': "Collision",
			'es-es': "Apisonar",
			'it-it': "Carica",
			'pt-br': "Aríete",
			'de-de': "Ramme"
		},

		damage: 30,
		cost: ["Metal", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "E",


	stage: "Basic",

	description: {
		'en-us': "Polishing Bronzor to a shine makes its surface reflect the truth, according to common lore. Be that as it may, Bronzor hates being polished."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 545586,
				tcgplayer: 234188
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 545586,
				tcgplayer: 234188
			}
		},
	],
}

export default card
