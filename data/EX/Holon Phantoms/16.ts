import { Card } from '../../../interfaces'
import Set from '../Holon Phantoms'

const card: Card = {
	name: {
		en: "Rayquaza δ",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		384,
	],
	hp: 80,
	types: [
		"Water",
		"Metal",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Hydro Barrier",
			},
			effect: {
				en: "As long as Rayquaza has any Holon Energy cards attached to it, each of your Water Pokémon has no Weakness.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Delta Search",
			},
			effect: {
				en: "Search your deck for a Holon Energy card and attach it to Rayquaza. Shuffle your deck afterward.",
			},

		},
		{
			cost: [
				"Water",
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Ozone Flare",
			},

			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Colorless",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Water",
			value: "-30"
		},
		{
			type: "Fightning",
			value: "-30"
		},
	],




}

export default card
