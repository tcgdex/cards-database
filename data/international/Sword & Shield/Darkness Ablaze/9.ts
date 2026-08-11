import { Card } from 'models/database/card'
import Set from '../Darkness Ablaze'

const card: Card = {
	dexId: [616],

	name: {
		'en-us': "Shelmet",
		'fr-fr': "Escargaume",
		'es-es': "Shelmet",
		'it-it': "Shelmet",
		'pt-br': "Shelmet",
		'de-de': "Schnuthelm"
	},

	illustrator: "Megumi Mizutani",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	hp: 70,

	types: [
		"Grass",
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Spray Fluid",
				'fr-fr': "Fluide Éclaboussant",
				'es-es': "Fluido Rociado",
				'it-it': "Fluidospray",
				'pt-br': "Fluido Spray",
				'de-de': "Sprühwasser"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 3,
	regulationMark: "D",


	stage: "Basic",

	description: {
		'en-us': "When attacked, it tightly shuts the lid of its shell. This reaction fails to protect it from Karrablast, however, because they can still get into the shell."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 482919,
				tcgplayer: 219081
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 482919,
				tcgplayer: 219081
			}
		},
	],
}

export default card
