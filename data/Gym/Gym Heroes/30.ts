import { Card } from '../../../interfaces'
import Set from '../Gym Heroes'

const card: Card = {
	name: {
		en: "Misty's Goldeen"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [118],

	hp: 30,

	types: [
		"Water"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Horn Hazard"
			},
			effect: {
				en: "Flip a coin. If tails, this attack does nothing."
			},

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "x2"
		},
	],
	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 87528,
			},
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				tcgplayer: 87528,
				cardmarket: 274166
			}
		}
	],
	retreat: 0
}

export default card

