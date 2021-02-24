import { Card } from '../../../interfaces'
import Set from '../Plasma Freeze'

const card: Card = {
	name: {
		en: "Latios-EX",
		fr: "Latios-EX",
	},
	illustrator: "Ryo Ueda",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		381,
	],
	hp: 170,
	types: [
		"Dragon",
	],


	suffix: "EX",

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Mach Flight",
				fr: "Vol Supersonique",
			},
			effect: {
				en: "The Defending Pokémon can't retreat during your opponent's next turn.",
				fr: "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
			},
			damage: 40,

		},
		{
			cost: [
				"Water",
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Luster Purge",
				fr: "Lumi-Éclat",
			},
			effect: {
				en: "Discard all Energy attached to this Pokémon.",
				fr: "Défaussez toutes les Énergies attachées à ce Pokémon.",
			},
			damage: 150,

		},
	],
	weaknesses: [
		{
			type: "Dragon",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
