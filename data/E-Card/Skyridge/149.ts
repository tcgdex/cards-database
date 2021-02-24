import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Ho-oh",
	},
	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		250,
	],
	hp: 80,
	types: [
		"Colorless",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Crystal Type",
			},
			effect: {
				en: "Whenever you attach a Fire, Water, or Lightning basic Energy card from your hand to Ho-oh, Ho-oh's type (color) becomes the same as that type of energy until the end of the turn.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Lightning",
				"Fire",
			],
			name: {
				en: "Holy Flame",
			},

			damage: 20,

		},
		{
			cost: [
				"Fire",
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Scalding Steam",
			},
			effect: {
				en: "Discard an Energy card attached to Ho-oh and flip a coin. If heads, the Defending Pokémon is now Burned.",
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],





}

export default card
