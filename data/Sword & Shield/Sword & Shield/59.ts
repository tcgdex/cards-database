import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Inteleon",
		fr: "Lézargus",
	},

	illustrator: "Akira Komayama",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 160,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Drizzile",
		fr: "Arrozard",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Silent Shot",
				fr: "Coup Feutré",
			},
			effect: {
				en: "Discard a random card from your opponent’s hand.",
				fr: "Défaussez au hasard une carte de la main de votre adversaire.",
			},
			damage: 40,

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Hydro Snipe",
				fr: "Hydro-Frappe",
			},
			effect: {
				en: "You may put an Energy attached to your opponent’s Active Pokémon into their hand.",
				fr: "Vous pouvez ajouter à la main de votre adversaire une Énergie attachée à son Pokémon Actif.",
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D"
}

export default card
