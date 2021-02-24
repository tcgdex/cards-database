import { Card } from '../../../interfaces'
import Set from '../Promos'

const card: Card = {
	name: {
		en: "Charizard-GX",
		fr: "Dracaufeu-GX",
	},
	illustrator: "5ban Graphics",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		6,
	],
	hp: 250,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Charmeleon",
		fr: "Reptincel",
	},

	suffix: "GX",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Wing Attack",
				fr: "Cru-Aile",
			},

			damage: 70,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Crimson Storm",
				fr: "Tempête Écarlate",
			},
			effect: {
				en: "Discard 3 Fire Energy from this Pokémon.",
				fr: "Défaussez 3 Énergies Fire de ce Pokémon.",
			},
			damage: 300,

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Raging Out-GX",
				fr: "Déchaînement Furieux-GX",
			},
			effect: {
				en: "Discard the top 10 cards of your opponent's deck. (You can't use more than 1 GX attack in a game.)",
				fr: "Défaussez les 10 cartes du dessus du deck de votre adversaire. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
