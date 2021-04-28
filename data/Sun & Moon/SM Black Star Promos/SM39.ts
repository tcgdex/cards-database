import { Card } from '../../../interfaces'
import Set from '../Promos'

const card: Card = {
	name: {
		en: "Primarina-GX",
		fr: "Oratoria-GX",
	},
	illustrator: "5ban Graphics",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		730,
	],
	hp: 250,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Brionne",
		fr: "Otarlette",
	},

	suffix: "GX",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Bubble Beat",
				fr: "Bulle Bataille",
			},
			effect: {
				en: "This attack does 20 more damage times the amount of Water Energy attached to your Pokémon.",
				fr: "Cette attaque inflige 20 dégâts supplémentaires multipliés par le nombre d’Énergies Water attachées à vos Pokémon.",
			},
			damage: 10,

		},
		{
			cost: [
				"Water",
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Roaring Seas",
				fr: "Flots Rugissants",
			},
			effect: {
				en: "Discard an Energy from your opponent's Active Pokémon.",
				fr: "Défaussez une Énergie du Pokémon Actif de votre adversaire.",
			},
			damage: 120,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Grand Echo-GX",
				fr: "Écho Majestueux-GX",
			},
			effect: {
				en: "Heal all damage from all of your Pokémon. (You can't use more than 1 GX attack in a game.)",
				fr: "Soignez tous les dégâts de vos Pokémon. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
