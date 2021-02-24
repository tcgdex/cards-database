import { Card } from '../../../interfaces'
import Set from '../Neo Revelation'

const card: Card = {
	name: {
		en: "Houndoom",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		229,
	],
	hp: 70,
	types: [
		"Darkness",
	],
	evolveFrom: {
		en: "Houndour",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Dark Flame",
			},
			effect: {
				en: "Discard 1 Energy card attached to Houndoom or this attack does nothing. If there are any Energy cards in your discard pile, attach 1 of them to Houndoom.",
			},
			damage: 20,

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Black Fang",
			},
			effect: {
				en: "Flip a number of coins equal to the number of Energy attached to Houndoom. This attack does 30 damage plus 10 more damage for each heads.",
			},
			damage: 30,

		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],




}

export default card
