import { Card } from '../../../interfaces'
import Set from '../Gym Heroes'

const card: Card = {
	name: {
		en: "Lt. Surge's Electabuzz"
	},

	illustrator: "Ken Sugimori",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [125],

	hp: 70,

	types: [
		"Lightning"
	],

	evolveFrom: {
		en: "Elekid"
	},

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Charge"
			},
			effect: {
				en: "Take up to 2 Lightning Energy cards from your discard pile and attach them to Lt. Surge's Electabuzz."
			},

		},
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Discharge"
			},
			effect: {
				en: "Discard all Lightning Energy cards attached to Lt. Surge's Electabuzz in order to use this attack. Flip a number of coins equal to the number of Lightning Energy cards you discarded. This attack does 30 damage times the number of heads."
			},
			damage: "30x",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "x2"
		},
	],
	retreat: 2,


	variants: [
		{
			type: "holo"
		},
		{
			type: "holo",
			stamp: ["1st-edition"],
			thirdParty: {
				tcgplayer: 86851,
				cardmarket: 274142
			}
		}
	]
}

export default card
