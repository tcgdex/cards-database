import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Roserade",
		fr: "Roserade",
	},
	illustrator: "chibi",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		407,
	],
	hp: 120,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Roselia",
		fr: "Rosélia",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Paralyze Poison",
				fr: "Poison Paralysant",
			},
			effect: {
				en: "Your opponent’s Active Pokémon is now Poisoned. Flip a coin. If heads, your opponent’s Active Pokémon is also Paralyzed.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné. Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est également Paralysé.",
			},
			damage: 30,

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Mega Drain",
				fr: "Méga-Sangsue",
			},
			effect: {
				en: "Heal 30 damage from this Pokémon.",
				fr: "Soignez 30 dégâts de ce Pokémon.",
			},
			damage: 90,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
