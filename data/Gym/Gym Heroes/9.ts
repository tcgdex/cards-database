import { Card } from '../../../interfaces'
import Set from '../Gym Heroes'

const card: Card = {
	name: {
		en: "Misty's Seadra",
	},

	illustrator: "Atsuko Nishida",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		117,
	],

	hp: 70,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Horsea",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Tail Snap",
			},

			damage: 20,

		},
		{
			cost: [
				"Water",
				"Water",
				"Water",
			],
			name: {
				en: "Knockout Needle",
			},
			effect: {
				en: "Flip 2 coins. If both of them are heads, this attack does 30 damage plus 60 more damage. If 1 or both of them are tails, this attack does 30 damage.",
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 274145,
		tcgplayer: 87541
	},

	variants: [
		{
			type: "holo"
		},
		{
			type: "holo",
			stamp: ["1st edition"]
		},
		{
			type: "holo",
			stamp: ["pre-release"],
		}
	]
}

export default card
