import { Card } from 'models/database/card'
import Set from '../Darkness Ablaze'

const card: Card = {
	dexId: [613],

	name: {
		'en-us': "Cubchoo",
		'fr-fr': "Polarhume",
		'es-es': "Cubchoo",
		'it-it': "Cubchoo",
		'pt-br': "Cubchoo",
		'de-de': "Petznief"
	},

	illustrator: "Saya Tsuruta",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	hp: 70,

	types: [
		"Water",
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Chop",
				'fr-fr': "Coup Tranchant",
				'es-es': "Cortar",
				'it-it': "Ceffone",
				'pt-br': "Trincar",
				'de-de': "Hacker"
			},

			damage: 10,

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Icicle",
				'fr-fr': "Concrétion Glacée",
				'es-es': "Témpano",
				'it-it': "Stalattite",
				'pt-br': "Pingente de Gelo",
				'de-de': "Eiszapfen"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 2,
	regulationMark: "D",


	stage: "Basic",

	description: {
		'en-us': "When this Pokémon is in good health, its snot becomes thicker and stickier. It will smear its snot on anyone it doesn't like."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 483074,
				tcgplayer: 219358
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 483074,
				tcgplayer: 219358
			}
		},
	],
}

export default card
