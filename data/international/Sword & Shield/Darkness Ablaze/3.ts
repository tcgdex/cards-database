import { Card } from 'models/database/card'
import Set from '../Darkness Ablaze'

const card: Card = {
	dexId: [46],

	name: {
		'en-us': "Paras",
		'fr-fr': "Paras",
		'es-es': "Paras",
		'it-it': "Paras",
		'pt-br': "Paras",
		'de-de': "Paras"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	hp: 60,

	types: [
		"Grass",
	],

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Scratch",
				'fr-fr': "Griffe",
				'es-es': "Arañazo",
				'it-it': "Graffio",
				'pt-br': "Arranhão",
				'de-de': "Kratzer"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D",


	stage: "Basic",

	description: {
		'en-us': "The mushrooms, known as tochukaso, are controlling the bug. Even if the bug bugs the mushrooms, they tell it to bug off."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 482889,
				tcgplayer: 219061
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 482889,
				tcgplayer: 219061
			}
		},
	],
}

export default card
