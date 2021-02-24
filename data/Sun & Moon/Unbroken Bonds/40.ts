import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Tentacool",
		fr: "Tentacool",
	},
	illustrator: "Shin Nagasawa",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		72,
	],
	hp: 60,
	types: [
		"Water",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Bubble Jutsu",
				fr: "Bulle Jutsu",
			},
			effect: {
				en: "If you played Janine from your hand during this turn, this attack does 50 more damage.",
				fr: "Si vous avez joué Jeannine de votre main pendant ce tour, cette attaque inflige 50 dégâts supplémentaires.",
			},
			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
