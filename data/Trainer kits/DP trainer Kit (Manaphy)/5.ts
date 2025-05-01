import { Card } from '../../../interfaces'
import Set from '../DP trainer Kit (Manaphy)'

const card: Card = {
	dexId: [393],
	set: Set,

	name: {
		en: "Piplup"
	},

	illustrator: "Ken Sugimori",
	rarity: "None",
	category: "Pokemon",
	stage: "Basic",

	hp: 60,

	types: [
		"Water",
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Peck"
			},
			damage: 10
		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Water Splash"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 20 more damage plus 10 more damage."
			},
			damage: "20+"
		}
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "10+"
		}
	],

	description: {
		en: "Because it is very proud, it hates accepting food from people. Its thick down guards it from cold."
	},

	retreat: 1
}

export default card
