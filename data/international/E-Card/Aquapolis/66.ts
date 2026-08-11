import { Card } from 'models/database/card'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		'en-us': "Wooper",
		'fr-fr': "Axoloto",
		'de-de': "Felino"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [194],

	hp: 50,

	types: [
		"Water"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Tail Whap",
				'fr-fr': "Queue battoir",
				'de-de': "Tail Whap"
			},

			damage: 10,

		},
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Deep Dive",
				'fr-fr': "Gros plongeon",
				'de-de': "Deep Dive"
			},
			effect: {
				'en-us': "Flip 3 coins. For each heads, remove 1 damage counter on Wooper.",
				'fr-fr': "Lancez 3 pièces. Pour chaque face, retirez un marqueur de dégâts de Axoloto.",
				'de-de': "Flip 3 coins. For each heads, remove 1 damage counter from Wooper."
			},

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "x2"
		},
	],
	retreat: 1,


	variants: [
		{
			type: 'normal',
			thirdParty: {
				tcgplayer: 90630,
				cardmarket: 275139
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 90630,
				cardmarket: 275139
			}
		},
	]
}

export default card
