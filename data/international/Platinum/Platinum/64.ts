import { Card } from 'models/database/card'
import Set from '../Platinum'

const card: Card = {
	name: {
		'en-us': "Vigoroth",
		'fr-fr': "Vigoroth",
		'de-de': "Muntier"
	},

	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [288],

	hp: 80,

	types: [
		"Colorless"
	],

	evolveFrom: {
		'en-us': "Slakoth",
		'fr-fr': "Parecool"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Reckless Charge",
				'fr-fr': "Attaque imprudente",
				'de-de': "Reckless Charge"
			},
			effect: {
				'en-us': "Flip a coin. If tails, Vigoroth does 10 damage to itself.",
				'fr-fr': "Lancez une pièce. Si c'est pile, Vigoroth s'inflige 10 dégâts.",
				'de-de': "Flip a coin. If tails, Vigoroth does 10 damage to itself."
			},
			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Fight Back",
				'fr-fr': "Rendre les coups",
				'de-de': "Fight Back"
			},
			effect: {
				'en-us': "If Vigoroth has any damage counters on it, this attack does 50 damage plus 20 more damage.",
				'fr-fr': "Si Vigoroth possède des marqueurs de dégât, cette attaque inflige 50 dégâts plus 20 dégâts supplémentaires.",
				'de-de': "If Vigoroth has any damage counters on it, this attack does 50 damage plus 20 more damage."
			},
			damage: "50+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Its heart beats at a tenfold tempo, so it cannot sit still even for a moment."
	},

	variants: [
		{
			type:"normal",
			thirdParty: {
				tcgplayer: 90371,
				cardmarket: 278485
			}
		},
		{
			type:"reverse",
			thirdParty: {
				cardmarket: 278485,
				tcgplayer: 90371
			}
		}
	],

}

export default card
