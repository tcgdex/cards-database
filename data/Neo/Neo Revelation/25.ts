import { Card } from '../../../interfaces'
import Set from '../Neo Revelation'

const card: Card = {
	name: {
		en: "Starmie",
	},
	illustrator: undefined,
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		121,
	],
	hp: 70,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Staryu",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Confuse Ray",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Confused.",
			},
			damage: 10,

		},
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Core Stream",
			},
			effect: {
				en: "Choose an Energy type other than . This attack does 20 damage to each of your opponent's Pokémon with any Energy cards of that type attached to it. Don't apply Weakness and Resistance.",
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],





}

export default card
