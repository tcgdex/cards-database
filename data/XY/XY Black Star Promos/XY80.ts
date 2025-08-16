import { Card } from '../../../interfaces'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		en: "Black Kyurem",
		fr: "Kyurem Noir",
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "None",
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
				en: "Thunder Nail",
				fr: "Clou Tonnerre",
			},
			effect: {
				en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
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
				en: "Frozen Slice",
			},
			effect: {
				en: "This Pokémon does 20 damage to itself.",
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

	thirdParty: {
		cardmarket: 289803
	}
}

export default card
