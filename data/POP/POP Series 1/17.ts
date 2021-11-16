import { Card } from '../../../interfaces'
import Set from '../POP Series 1'

const card: Card = {
	name: {
		en: "Tyranitar ex",
		fr: "Tyranocif ex"
	},

	illustrator: "Hisao Nakamura",
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
				fr: "Griffe"
			},

			damage: 20,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Critical Crush",
				fr: "Écrasement sévère"
			},
			effect: {
				en: "Discard 2 basic Energy cards attached to Tyranitar ex or this attack does nothing.",
				fr: "Défaussez 2 cartes Énergie de base attachées à Tyranocif ex ou cette attaque est sans effet."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Grass"
		},
		{
			type: "Fighting"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],

	suffix: "EX",
	retreat: 4
}

export default card
