import { Card } from '../../../interfaces'
import Set from '../XY'

const card: Card = {
	name: {
		en: "Simipour",
		fr: "Flotoutan",
	},
	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		516,
	],
	hp: 90,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Panpour",
		fr: "Flotajou",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Recycle",
				fr: "Recyclage",
			},
			effect: {
				en: "Put a card from your discard pile on top of your deck.",
				fr: "Mettez une carte de votre pile de défausse sur le dessus de votre deck.",
			},

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Surf",
				fr: "Surf",
			},

			damage: 70,

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
