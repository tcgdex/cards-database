import { Card } from '../../../interfaces'
import Set from '../Legendary Collection'

const card: Card = {
	name: {
		en: "Voltorb"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [100],

	hp: 40,

	types: [
		"Lightning"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Tackle"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		en: "Usually found in power plants. Easily mistaken for a Poké Ball, it has zapped many people."
	},

	variants: [
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 274862,
				tcgplayer: 90410
			}
		},
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 90410,
				cardmarket: 274862
			}
		}
	],

}

export default card
