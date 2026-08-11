import { Card } from 'models/database/card'
import Set from '../POP Series 6'

const card: Card = {
	name: {
		'en-us': "Piplup",
		'fr-fr': "Piplup"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [393],

	hp: 60,

	types: [
		"Water"
	],

	stage: "Basic",

	attacks: [
		{

			name: {
				'en-us': "Peck",
				'fr-fr': "Picpic"
			},

			damage: 10,

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Water Spash",
				'fr-fr': "Éclaboussure"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 20 damage plus 10 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts plus 10 dégâts supplémentaires."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+10"
		},
	],
	description: {
		'en-us': "Because it is very proud, it hates accepting food from people. Its thick down guards it from cold."
	},

	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 88143,
				cardmarket: 277900
			},
		},
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 88143,
				cardmarket: 277900
			},
		},
	],

}

export default card
