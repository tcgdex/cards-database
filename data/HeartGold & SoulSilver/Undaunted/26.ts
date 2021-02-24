import { Card } from '../../../interfaces'
import Set from '../Undaunted'

const card: Card = {
	name: {
		en: "Flareon",
		fr: "Pyroli",
	},
	illustrator: "kawayoo",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		136,
	],
	hp: 90,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Eevee",
		fr: "Evoli",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Flame Tail",
				fr: "Queue de flammes",
			},

			damage: 30,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Flamethrower",
				fr: "Lance-flamme",
			},
			effect: {
				en: "Discard an Energy attached to Flareon.",
				fr: "Défaussez une carte Énergie attachée à Pyroli.",
			},
			damage: 90,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
