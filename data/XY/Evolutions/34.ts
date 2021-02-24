import { Card } from '../../../interfaces'
import Set from '../Evolutions'

const card: Card = {
	name: {
		en: "Gyarados",
		fr: "Léviator",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
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
				"Water",
				"Water",
				"Water",
			],
			name: {
				en: "Bubble Beam",
				fr: "Bulles d’O",
			},
			effect: {
				en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			},
			damage: 50,

		},
		{
			cost: [
				"Water",
				"Water",
				"Water",
				"Water",
			],
			name: {
				en: "Dragon Rage",
				fr: "Draco-Rage",
			},
			effect: {
				en: "Flip 2 coins. If either of them is tails, this attack does nothing.",
				fr: "Lancez 2 pièces. Si vous obtenez au moins un côté pile, cette attaque ne fait rien.",
			},
			damage: 180,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
