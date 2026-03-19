import { Card } from '../../../interfaces'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		en: "Pikachu-EX",
		fr: "Pikachu-EX"
	},
	illustrator: "5ban Graphics",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		25,
	],
	hp: 130,
	types: [
		"Lightning",
	],


	suffix: "EX",

	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Thunder Shock",
				fr: "Éclair"
			},
			effect: {
				en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé."
			},
			damage: 30,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Mega Thunderbolt",
				fr: "Méga Tonnerre"
			},
			effect: {
				en: "Discard all Energy attached to this Pokémon.",
				fr: "Défaussez toutes les Énergies attachées à ce Pokémon."
			},
			damage: 160,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],




}

export default card
