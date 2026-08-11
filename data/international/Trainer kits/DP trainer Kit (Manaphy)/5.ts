import { Card } from 'models/database/card'
import Set from '../DP trainer Kit (Manaphy)'

const card: Card = {
	dexId: [393],
	set: Set,

	name: {
		'en-us': "Piplup",
		'fr-fr': "Tiplouf"
	},

	illustrator: "Atsuko Nishida",
	rarity: "None",
	category: "Pokemon",
	stage: "Basic",

	hp: 60,

	types: [
		"Water"
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Peck",
				'fr-fr': "Picpic"
			},
			damage: 10
		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Water Splash",
				'fr-fr': "Éclaboussure"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 20 more damage plus 10 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts plus 10 dégâts supplémentaires."
			},
			damage: "20+"
		}
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
				cardmarket: 278017,
				tcgplayer: 88144
			}
		},
	],

}

export default card
