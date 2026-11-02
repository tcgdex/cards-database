import { Card } from '../../../interfaces'
import Set from '../Legendary Collection'

const card: Card = {
	name: {
		en: "Geodude"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [74],

	hp: 50,

	types: [
		"Fighting"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Stone Barrage"
			},
			effect: {
				en: "Flip a coin until you get tails. This attack does 10 damage times the number of heads."
			},
			damage: "10×",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		en: "Found in fields and mountains. Mistaking them for boulders, people often step or trip on them."
	},

	variants: [
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 274842,
				tcgplayer: 85685
			}
		},
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 85685,
				cardmarket: 274842
			}
		}
	],

}

export default card
