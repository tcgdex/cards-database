import { Card } from '../../../interfaces'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		en: "Wishiwashi-GX",
		fr: "Froussardine-GX",
	},
	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		746,
	],
	hp: 210,
	types: [
		"Water",
	],


	suffix: "GX",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Water Gun",
				fr: "Pistolet à O",
			},

			damage: 20,

		},
		{
			cost: [
				"Water",
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Torrential Vortex",
				fr: "Vortex Torrentiel",
			},
			effect: {
				en: "Discard a Special Energy from your opponent's Active Pokémon.",
				fr: "Défaussez une Énergie spéciale du Pokémon Actif de votre adversaire.",
			},
			damage: 120,

		},
		{
			cost: [
				"Water",
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Blue Surge-GX",
				fr: "Déferlement Bleu-GX",
			},
			effect: {
				en: "Move all Energy from this Pokémon to your Benched Pokémon in any way you like. (You can't use more than 1 GX attack in a game.)",
				fr: "Déplacez toutes les Énergies de ce Pokémon vers vos Pokémon de Banc, de la manière que vous voulez. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},
			damage: 220,

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
