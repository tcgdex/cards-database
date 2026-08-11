import { Card } from '../../../interfaces'
import Set from '../Legendary Collection'

const card: Card = {
	name: {
		en: "Charmander"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [4],

	hp: 50,

	types: [
		"Fire"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Scratch"
			},

			damage: 10,

		},
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Ember"
			},
			effect: {
				en: "Discard 1 Fire Energy card attached to Charmander or this attack does nothing."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		en: "Obviously prefers hot places. If it gets caught in the rain, steam is said to spout from the tip of its tail."
	},

	variants: [
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 274835,
				tcgplayer: 84205
			}
		},
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 84205,
				cardmarket: 274835
			}
		}
	],

}

export default card
