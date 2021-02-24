import { Card } from '../../../interfaces'
import Set from '../Arceus'

const card: Card = {
	name: {
		en: "Pelipper",
	},
	illustrator: "Miki Tanaka",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		279,
	],

	types: [
		"Water",
	],
	evolveFrom: {
		en: "Wingull",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Water Pulse",
			},
			effect: {
				en: "The Defending Pokémon is now Asleep.",
			},
			damage: 30,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Continuous Crush",
			},
			effect: {
				en: "Flip a coin until you get tails. For each heads, discard an Energy card attached to the Defending Pokémon.",
			},
			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "+20"
		},
	],
	resistances: [
		{
			type: "Fightning",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
