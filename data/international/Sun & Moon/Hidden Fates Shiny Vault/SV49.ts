import { Card } from 'models/database/card'
import Set from '../Hidden Fates Shiny Vault'

const card: Card = {
	name: {
		'en-us': "Charizard-GX",
		'fr-fr': "Dracaufeu-GX",
	},
	illustrator: "5ban Graphics",
	rarity: "Shiny rare",
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
		'en-us': "Charmeleon",
		'fr-fr': "Reptincel",
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
				'en-us': "Wing Attack",
				'fr-fr': "Cru-Aile",
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
				'en-us': "Crimson Storm",
				'fr-fr': "Tempête Écarlate",
			},
			effect: {
				'en-us': "Discard 3 Fire Energy from this Pokémon.",
				'fr-fr': "Défaussez 3 Énergies Fire de ce Pokémon.",
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
				'en-us': "Raging Out-GX",
				'fr-fr': "Déchaînement Furieux-GX",
			},
			effect: {
				'en-us': "Discard the top 10 cards of your opponent's deck. (You can't use more than 1 GX attack in a game.)",
				'fr-fr': "Défaussez les 10 cartes du dessus du deck de votre adversaire. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
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
