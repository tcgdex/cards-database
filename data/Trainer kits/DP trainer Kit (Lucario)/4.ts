import { Card } from '../../../interfaces'
import Set from '../DP trainer Kit (Lucario)'

const card: Card = {
	dexId: [67],
	set: Set,

	name: {
		en: "Machoke"
	},

	illustrator: "Kouki Saitou",
	rarity: "None",
	category: "Pokemon",
	stage: "Stage1",

	hp: 90,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Machop",
	},

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Karate Chop"
			},
			effect: {
				en: "Does 40 damage minus 10 damage for each damage counter on Machoke."
			},
			damage: "40-"
		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Seismic Toss"
			},
			damage: "60"
		}
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "20+"
		}
	],

	description: {
		en: "MACHOKE's boundless power is very dangerous, so it wears a belt that suppresses its energy."
	},

	retreat: 2
}

export default card
