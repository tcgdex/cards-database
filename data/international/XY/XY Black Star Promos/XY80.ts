import { Card } from 'models/database/card'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Black Kyurem",
		'fr-fr': "Kyurem Noir",
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Promo",
	category: "Pokemon",
	set: Set,

	dexId: [
		646,
	],

	hp: 120,

	types: [
		"Dragon",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Thunder Nail",
				'fr-fr': "Clou Tonnerre",
			},
			effect: {
				'en-us': "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			},
			damage: 40,

		},
		{
			cost: [
				"Water",
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Frozen Slice",
				'fr-fr': "Tranche Gelée"
			},
			effect: {
				'en-us': "This Pokémon does 20 damage to itself.",
				'fr-fr': "Ce Pokémon s'inflige 20 dégâts."
			},
			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "It generates a powerful, freezing energy inside itself, but its body became frozen when the energy leaked out.",
	},

	thirdParty: {
		cardmarket: 553908
	}
}

export default card
