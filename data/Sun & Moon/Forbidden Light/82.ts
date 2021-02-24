import { Card } from '../../../interfaces'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		en: "Dialga-GX",
		fr: "Dialga-GX",
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		483,
	],
	hp: 180,
	types: [
		"Metal",
	],


	suffix: "GX",

	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				en: "Overclock",
				fr: "Overclocker",
			},
			effect: {
				en: "Draw cards until you have 6 cards in your hand.",
				fr: "Piochez des cartes jusqu’à ce que vous ayez 6 cartes en main.",
			},

		},
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Shred",
				fr: "Déchiquetage",
			},
			effect: {
				en: "This attack's damage isn't affected by any effects on your opponent's Active Pokémon.",
				fr: "Les dégâts de cette attaque ne sont affectés par aucun effet en action sur le Pokémon Actif de votre adversaire.",
			},
			damage: 80,

		},
		{
			cost: [
				"Metal",
				"Metal",
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Timeless-GX",
				fr: "Intemporel-GX",
			},
			effect: {
				en: "Take another turn after this one. (Skip the between-turns step.) (You can't use more than 1 GX attack in a game.)",
				fr: "Jouez de nouveau après ce tour. (Sautez l’étape entre les tours.) (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},
			damage: 150,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 3,



}

export default card
