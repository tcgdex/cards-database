import { Card } from '../../../interfaces'
import Set from '../Dragons Exalted'

const card: Card = {
	name: {
		en: "Emolga",
		fr: "Emolga",
	},
	illustrator: "Kanako Eo",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		587,
	],
	hp: 70,
	types: [
		"Lightning",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Call for Family",
				fr: "Appel à la Famille",
			},
			effect: {
				en: "Search your deck for 2 Basic Pokémon and put them onto your Bench. Shuffle your deck afterward.",
				fr: "Cherchez 2 Pokémon de base dans votre deck et placez-les sur votre Banc. Mélangez ensuite votre deck.",
			},

		},
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Static Shock",
				fr: "Choc Statique",
			},

			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fightning",
			value: "-20"
		},
	],




}

export default card
