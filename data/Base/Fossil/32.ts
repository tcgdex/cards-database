import { Card } from '../../../interfaces'
import Set from '../Fossil'

const card: Card = {
	name: {
		en: "Cloyster",
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		91,
	],
	hp: 50,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Shellder",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				en: "Clamp",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed. If tails, this attack does nothing (not even damage).",
			},

		},
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				en: "Spike Cannon",
			},
			effect: {
				en: "Flip 2 coins. This attack does 30 damage times the number of heads.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],





}

export default card
