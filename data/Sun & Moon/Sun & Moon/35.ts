import { Card } from '../../../interfaces'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		en: "Lapras-GX",
		fr: "Lokhlass-GX",
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		131,
	],
	hp: 190,
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
				en: "Collect",
				fr: "Collecte",
			},
			effect: {
				en: "Draw 3 cards.",
				fr: "Piochez 3 cartes.",
			},

		},
		{
			cost: [
				"Water",
				"Water",
				"Water",
			],
			name: {
				en: "Blizzard Burn",
				fr: "Blizzard Étourdissant",
			},
			effect: {
				en: "This Pokémon can't attack during your next turn.",
				fr: "Ce Pokémon ne peut pas attaquer pendant votre prochain tour.",
			},
			damage: 160,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Ice Beam-GX",
				fr: "Laser Glace-GX",
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Paralyzed. (You can't use more than 1 GX attack in a game.)",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Paralysé. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},
			damage: 100,

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
