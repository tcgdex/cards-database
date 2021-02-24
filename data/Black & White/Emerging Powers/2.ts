import { Card } from '../../../interfaces'
import Set from '../Emerging Powers'

const card: Card = {
	name: {
		en: "Simisage",
		fr: "Feuiloutan",
	},
	illustrator: "match",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		512,
	],
	hp: 90,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Pansage",
		fr: "Feuillajou",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Fire's Power",
				fr: "Pouvoir Incendiaire",
			},
			effect: {
				en: "If this Pokémon has any Fire Energy attached to it, the Defending Pokémon is now Burned.",
				fr: "Si de l'Énergie Fire est attachée à ce Pokémon, le Pokémon Défenseur est maintenant Brûlé.",
			},
			damage: 30,

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Seed Bomb",
				fr: "Canon Graine",
			},

			damage: 60,

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
			type: "Water",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
