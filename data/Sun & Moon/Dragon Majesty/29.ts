import { Card } from '../../../interfaces'
import Set from '../Dragon Majesty'

const card: Card = {
	name: {
		en: "Milotic",
		fr: "Milobellus",
	},
	illustrator: "hatachu",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		350,
	],
	hp: 120,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Feebas",
		fr: "Barpau",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Aurora Wave",
				fr: "Vague Boréale",
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Confused.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			},
			damage: 30,

		},
		{
			cost: [
				"Water",
				"Water",
				"Water",
			],
			name: {
				en: "Aqua Split",
				fr: "Scission Aqua",
			},
			effect: {
				en: "This attack does 40 damage to 2 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 40 dégâts à 2 des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
