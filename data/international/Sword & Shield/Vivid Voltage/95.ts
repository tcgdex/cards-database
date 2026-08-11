import { Card } from 'models/database/card'
import Set from '../Vivid Voltage'

const card: Card = {
	dexId: [745],

	name: {
		'en-us': "Lycanroc",
		'fr-fr': "Lougaroc",
		'es-es': "Lycanroc",
		'it-it': "Lycanroc",
		'pt-br': "Lycanroc",
		'de-de': "Wolwerock"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 120,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Rockruff",
		'fr-fr': "Rocabot",
		'es-es': "Rockruff",
		'it-it': "Rockruff",
		'pt-br': "Rockruff",
		'de-de': "Wuffels"
	},

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Rock Throw",
				'fr-fr': "Jet-Pierres",
				'es-es': "Lanzarrocas",
				'it-it': "Sassata",
				'pt-br': "Lançamento de Rocha",
				'de-de': "Steinwurf"
			},

			damage: 40,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Sharp Mane",
				'fr-fr': "Crinière Aiguisée",
				'es-es': "Melena Afilada",
				'it-it': "Criniera Affilata",
				'pt-br': "Juba Afiada",
				'de-de': "Scharfe Mähne"
			},

			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,
	regulationMark: "D",


	stage: "Stage1",

	description: {
		'en-us': "They live alone without forming packs. They will only listen to orders from Trainers who can draw out their true power."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 511895,
				tcgplayer: 226537
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 511895,
				tcgplayer: 226537
			}
		},
	],
}

export default card
