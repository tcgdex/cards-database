import { Card } from 'models/database/card'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Gyarados",
		'fr-fr': "Léviator",
	},

	illustrator: "TOKIYA",
	rarity: "Promo",
	category: "Pokemon",
	set: Set,

	dexId: [
		130,
	],

	hp: 130,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Magikarp",
		'fr-fr': "Magicarpe",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Full Retaliation",
				'fr-fr': "Double Θ",
			},
			effect: {
				'en-us': "This attack does 30 more damage for each damage counter on each of your Benched Magikarp.",
				'fr-fr': "Cette attaque inflige 30 dégâts supplémentaires pour chaque marqueur de dégâts placé sur chacun de vos de Banc."
			},
			damage: "30+",

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Thrash",
				'fr-fr': "Mania"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 30 more damage. If tails, this Pokémon does 30 damage to itself.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts supplémentaires. Si c'est pile, ce Pokémon s'inflige 30 dégâts."
			},
			damage: "100+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "Rarely seen in the wild. Huge and vicious, it is capable of destroying entire cities in a rage.",
	},

	thirdParty: {
		cardmarket: 289556
	}
}

export default card
