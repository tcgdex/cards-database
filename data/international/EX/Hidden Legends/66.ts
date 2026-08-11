import { Card } from 'models/database/card'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		'en-us': "Meditite",
		'fr-fr': "Meditikka",
		'de-de': "Meditie"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [307],

	hp: 50,

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
				'en-us': "Jab",
				'fr-fr': "Taquet",
				'de-de': "Jab"
			},

			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Steady Punch",
				'fr-fr': "Poing énergétique",
				'de-de': "Steady Punch"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 20 damage plus 10 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts plus 10 dégâts supplémentaires.",
				'de-de': "Flip a coin. If heads, this attack does 20 damage plus 10 more damage."
			},
			damage: "20+",

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	
	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 87280,
				cardmarket: 276140
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 87280,
				cardmarket: 276140
			}
		},
	]
}

export default card
