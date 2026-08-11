import { Card } from 'models/database/card'
import Set from '../POP Series 1'

const card: Card = {
	name: {
		'en-us': "Pupitar",
		'fr-fr': "Ymphect"
	},

	illustrator: "Hisao Nakamura",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [247],

	hp: 70,

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
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Rock Smash",
				'fr-fr': "Éclate-roc"
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
			type: "Water"
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 88448,
				cardmarket: 277423
			},
		},
	],

}

export default card
