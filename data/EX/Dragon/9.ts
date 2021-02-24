import { Card } from '../../../interfaces'
import Set from '../Dragon'

const card: Card = {
	name: {
		en: "Roselia",
	},
	illustrator: "Atsuko Nishida",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		315,
	],
	hp: 60,
	types: [
		"Grass",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Thick Skin",
			},
			effect: {
				en: "Roselia can't be affected by any Special Conditions.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Speed Growth",
			},
			effect: {
				en: "Attach up to 2 Grass Energy cards from your hand to your Pokémon in any way you like.",
			},

		},
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Sleep Powder",
			},
			effect: {
				en: "The Defending Pokémon is now Asleep.",
			},
			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],





}

export default card
