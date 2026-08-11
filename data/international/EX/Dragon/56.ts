import { Card } from 'models/database/card'
import Set from '../Dragon'

const card: Card = {
	name: {
		'en-us': "Geodude",
		'fr-fr': "Racaillou",
		'de-de': "Kleinstein"
	},

	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [74],

	hp: 40,

	types: [
		"Fighting"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Steady Punch",
				'fr-fr': "Poing énergétique",
				'de-de': "Ruhiger Schlag"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 10 damage plus 10 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts.",
				'de-de': "Wirf 1 Münze. Bei 'Kopf' fügt dieser Angriff 10 Schadenspunkte plus 10 weitere Schadenspunkte zu."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "x2"
		},
	],
	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 85688,
				cardmarket: 275933
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 85688,
				cardmarket: 275933
			},
		},
	],

}

export default card
