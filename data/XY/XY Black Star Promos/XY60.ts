import { Card } from '../../../interfaces'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		en: "Gyarados",
		fr: "Léviator",
	},

	illustrator: "TOKIYA",
	rarity: "None",
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
		en: "Magikarp",
		fr: "Magicarpe",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Full Retaliation",
				fr: "Double Θ",
			},
			effect: {
				en: "This attack does 30 more damage for each damage counter on each of your Benched Magikarp.",
				fr: "Cette attaque inflige 30 dégâts supplémentaires pour chaque marqueur de dégâts placé sur chacun de vos de Banc."
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
				en: "Thrash",
				fr: "Mania"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 30 more damage. If tails, this Pokémon does 30 damage to itself.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts supplémentaires. Si c'est pile, ce Pokémon s'inflige 30 dégâts."
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

	thirdParty: {
		cardmarket: 289556
	}
}

export default card
