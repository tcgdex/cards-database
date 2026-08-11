import { Card } from 'models/database/card'
import Set from '../POP Series 5'

const card: Card = {
	name: {
		'en-us': "Pikachu δ",
		'fr-fr': "Pikachu δ"
	},

	illustrator: "Ryo Ueda",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [25],

	hp: 40,

	types: [
		"Metal"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Electric Punch",
				'fr-fr': "Poing électrique"
			},

			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Heavy Metal",
				'fr-fr': "Heavy Métal"
			},
			effect: {
				'en-us': "Flip a coin for each Metal Energy attached to Pikachu. This attack does 10 damage plus 20 more damage for each heads.",
				'fr-fr': "Lancez un nombre de pièces équivalent au nombre d'Énergie  attachées à Pikachu. Cette attaque inflige 10 dégâts plus 20 dégâts supplémentaires pour chaque face."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "x2"
		},
	],
	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 88110,
				cardmarket: 277495
			},
		},
	],

}

export default card
