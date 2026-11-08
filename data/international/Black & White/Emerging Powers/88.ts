import { Card } from 'models/database/card'
import Set from '../Emerging Powers'

const card: Card = {
	name: {
		'en-us': "Braviary",
		'fr-fr': "Gueriaigle",
		'es-es': "Braviary",
		'it-it': "Braviary",
		'pt-br': "Braviary",
		'de-de': "Washakwil"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		628,
	],

	hp: 100,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Rufflet",
		'fr-fr': "Furaiglon",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Wing Attack",
				'fr-fr': "Cru-Aile",
			},

			damage: 40,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Brave Bird",
				'fr-fr': "Rapace",
			},
			effect: {
				'en-us': "This Pokémon does 30 damage to itself.",
				'fr-fr': "Ce Pokémon s'inflige 30 dégâts.",
			},
			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "The more scars they have, the more respect these brave soldiers of the sky get from their peers.",
	},

	thirdParty: {
		cardmarket: 280053,
		tcgplayer: 83950
	}
}

export default card
