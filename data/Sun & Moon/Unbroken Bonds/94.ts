import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Rhydon",
		fr: "Rhinoféros",
	},
	illustrator: "kirisAki",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		112,
	],
	hp: 110,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Rhyhorn",
		fr: "Rhinocorne",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Dirty Work",
				fr: "Sale Boulot",
			},
			effect: {
				en: "Discard the top card of your opponent's deck. If you played Giovanni's Exile from your hand during this turn, discard the top 5 cards instead.",
				fr: "Défaussez la carte du dessus du deck de votre adversaire. Si vous avez joué Exil de Giovanni de votre main pendant ce tour, défaussez les 5 cartes du dessus de son deck à la place.",
			},

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Horn Attack",
				fr: "Koud’Korne",
			},

			damage: 90,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 4,



}

export default card
