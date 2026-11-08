import { Card } from 'models/database/card'
import Set from '../Darkness Ablaze'

const card: Card = {
	dexId: [39],

	name: {
		'en-us': "Jigglypuff",
		'fr-fr': "Rondoudou",
		'es-es': "Jigglypuff",
		'it-it': "Jigglypuff",
		'pt-br': "Jigglypuff",
		'de-de': "Pummeluff"
	},

	illustrator: "Motofumi Fujiwara",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	hp: 70,

	types: [
		"Psychic",
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Mumble",
				'fr-fr': "Murmure",
				'es-es': "Farfullar",
				'it-it': "Borbottio",
				'pt-br': "Resmungo",
				'de-de': "Grummeln"
			},

			damage: 10,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Moon Kick",
				'fr-fr': "Coup d'Pied Lunaire",
				'es-es': "Patada Lunar",
				'it-it': "Calcioluna",
				'pt-br': "Chute Lunar",
				'de-de': "Mondkick"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D",


	stage: "Basic",

	description: {
		'en-us': "The songs they sing are totally different depending on the region they live in. Some even sound like they're shouting!"
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 483214,
				tcgplayer: 219441
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 483214,
				tcgplayer: 219441
			}
		},
	],
}

export default card
