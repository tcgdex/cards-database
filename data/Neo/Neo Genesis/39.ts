import { Card } from '../../../interfaces'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		en: "Ledian",
	},
	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		166,
	],
	hp: 60,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Ledyba",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				en: "Baton Pass",
			},
			effect: {
				en: "If you have any Pokémon on your Bench, remove all Energy cards from Ledian and attach them to 1 of those Pokémon, then switch Ledian with that Pokémon.",
			},
			damage: 30,

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
			type: "Fighting",
			value: "-30"
		},
	],




}

export default card
