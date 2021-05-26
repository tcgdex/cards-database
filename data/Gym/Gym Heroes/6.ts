import { Card } from '../../../interfaces'
import Set from '../Gym Heroes'

const card: Card = {
	name: {
		en: "Lt. Surge's Electabuzz",
	},
	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		125,
	],
	hp: 70,
	types: [
		"Lightning",
	],
	evolveFrom: {
		en: "Elekid",
	},
	stage: "Basic",


	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Charge",
			},
			effect: {
				en: "Take up to 2 Energy cards from your discard pile and attach them to Lt. Surge's Electabuzz",
			},

		},
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Discharge",
			},
			effect: {
				en: "Discard all Energy cards attach to Lt. Surge's Electabuzz in order to use this attack. Flip a number of coins equal to the number of Energy cards you discarded. This attack does 30 damage times the number of heads.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],





}

export default card
