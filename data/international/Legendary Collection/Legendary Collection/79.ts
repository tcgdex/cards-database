import { Card } from '../../../interfaces'
import Set from '../Legendary Collection'

const card: Card = {
	name: {
		en: "Machop"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [66],

	hp: 50,

	types: [
		"Fighting"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Punch"
			},

			damage: 20,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Kick"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		en: "It's said that not even pro wrestlers can take down a Machop."
	},

	variants: [
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 274844,
				tcgplayer: 86990
			}
		},
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 86990,
				cardmarket: 274844
			}
		}
	],

}

export default card
