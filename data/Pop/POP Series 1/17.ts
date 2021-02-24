import { Card } from '../../../interfaces'
import Set from '../POP Series 1'

const card: Card = {
	name: {
		en: "Tyranitar ex",
	},
	illustrator: "Hikaru Koike",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		248,
	],
	hp: 150,
	types: [
		"Darkness",
	],
	evolveFrom: {
		en: "Pupitar",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Scratch",
			},

			damage: 20,

		},
		{
			cost: [
				"Fightning",
				"Fightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Critical Crush",
			},
			effect: {
				en: "Discard 2 Basic Energy cards attached to Tyranitar ex or this attack does nothing.",
			},
			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
		{
			type: "Fightning",
			value: "×2"
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
