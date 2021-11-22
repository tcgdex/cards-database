import { Card } from '../../../interfaces'
import Set from '../Poké Card Creator Pack'

const card: Card = {
	name: {
		en: "Mudkip"
	},
	illustrator: "Rowan Laidlaw",
	rarity: "None",
	category: "Pokemon",

	set: Set,
	dexId: [
		258,
	],
	hp: 60,
	types: [
		"Water",
	],
	stage: "Basic",
	retreat: 1,


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Tail Rap"
			},
			effect: {
				en: "Flip 2 coins. This attack does 10 damage times the number of heads."
			},
			damage: "10×",

		},
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hypno Splash"
			},
			effect: {
				en: "The Defending Pokémon is now Asleep."
			},
			damage: 30,

		}
	],
	weaknesses: [
		{
			type: "Lightning"
		},
	]
}

export default card
