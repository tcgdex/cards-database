import { Card } from '../../../interfaces'
import Set from '../Shining Legends'

const card: Card = {
	name: {
		en: "Raichu-GX",
		fr: "Raichu-GX",
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		26,
	],
	hp: 210,
	types: [
		"Lightning",
	],
	evolveFrom: {
		en: "Pikachu",
		fr: "Pikachu",
	},

	suffix: "GX",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Powerful Spark",
				fr: "Étincelle Puissante",
			},
			effect: {
				en: "This attack does 20 more damage times the amount of Lightning Energy attached to your Pokémon.",
				fr: "Cette attaque inflige 20 dégâts supplémentaires multipliés par le nombre d’Énergies Lightning attachées à vos Pokémon.",
			},
			damage: 20,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Thunder",
				fr: "Fatal-Foudre",
			},
			effect: {
				en: "This Pokémon does 30 damage to itself.",
				fr: "Ce Pokémon s’inflige 30 dégâts.",
			},
			damage: 160,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Voltail-GX",
				fr: "Queue Survoltée-GX",
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Paralyzed. (You can't use more than 1 GX attack in a game.)",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Paralysé. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},
			damage: 120,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
