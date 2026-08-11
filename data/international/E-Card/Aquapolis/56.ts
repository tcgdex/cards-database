import { Card } from 'models/database/card'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		'en-us': "Pupitar",
		'fr-fr': "Ymphect",
		'de-de': "Pupitar"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [247],

	hp: 80,

	types: [
		"Fighting"
	],

	evolveFrom: {
		'en-us': "Larvitar",
		'fr-fr': "Embrylex"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Thrash",
				'fr-fr': "Mania",
				'de-de': "Fuchtler"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 30 damage plus 10 more damage. If tails, Pupitar does 10 damage to itself.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts plus 10 dégâts supplémentaires. Si c'est pile, Ymphect s'inflige 10 dégâts.",
				'de-de': "Wirf eine Münze. Bei 'Kopf' fügt dieser Angriff 30 Schadenspunkte plus 10 weitere Schadenspunkte zu. Bei 'Zahl' fügt sich Pupitar selber 10 Schadenspunkte zu."
			},
			damage: "30+",

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
			type: 'normal',
			thirdParty: {
				tcgplayer: 88446,
				cardmarket: 275129
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 88446,
				cardmarket: 275129
			}
		},
	]
}

export default card
