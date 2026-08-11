import { Card } from 'models/database/card'
import Set from '../Darkness Ablaze'

const card: Card = {
	dexId: [633],

	name: {
		'en-us': "Deino",
		'fr-fr': "Solochi",
		'es-es': "Deino",
		'it-it': "Deino",
		'pt-br': "Deino",
		'de-de': "Kapuno"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	hp: 60,

	types: [
		"Darkness",
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Ram",
				'fr-fr': "Collision",
				'es-es': "Apisonar",
				'it-it': "Carica",
				'pt-br': "Aríete",
				'de-de': "Ramme"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D",


	stage: "Basic",

	description: {
		'en-us': "When it encounters something, its first urge is usually to bite it. If it likes what it tastes, it will commit the associated scent to memory."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 483419,
				tcgplayer: 219420
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 483419,
				tcgplayer: 219420
			}
		},
	],
}

export default card
