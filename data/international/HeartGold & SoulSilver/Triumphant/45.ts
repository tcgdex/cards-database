import { Card } from 'models/database/card'
import Set from '../Triumphant'

const card: Card = {
	name: {
		'en-us': "Nidorina",
		'fr-fr': "Nidorina",
		'de-de': "Nidorina"
	},

	illustrator: "sui",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [30],

	hp: 80,

	types: [
		"Psychic"
	],

	evolveFrom: {
		'en-us': "Nidoran♀",
		'fr-fr': "Nidoran♀"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Quick Blow",
				'fr-fr': "Coup d’poing éclair",
				'de-de': "Schnellschlag"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 20 damage plus 10 more damage.",
				'fr-fr': "Lancez une pièce. Si c’est face, cette attaque inflige 20 dégâts plus 10 dégâts supplémentaires.",
				'de-de': "Wirf eine Münze. Bei \"Kopf\" fügt dieser Angriff 20 Schadenspunkte plus 10 weitere Schadenspunkte zu."
			},
			damage: "20+",

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Tail Slap",
				'fr-fr': "Coud’keu",
				'de-de': "Schweifschlag"
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It has a calm and caring nature. Because its horn grows slowly, it prefers not to fight."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 87738,
				cardmarket: 279575
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 279575,
				tcgplayer: 87738
			}
		},
	],

}

export default card
