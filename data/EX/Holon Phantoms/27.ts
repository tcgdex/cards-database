import { Card } from '../../../interfaces'
import Set from '../Holon Phantoms'

const card: Card = {
	name: {
		en: "Regice",
	},
	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		378,
	],
	hp: 80,
	types: [
		"Water",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Clear Body",
			},
			effect: {
				en: "Regice can't be affected by any Special Conditions.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Icy Wind",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Asleep.",
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],





}

export default card
