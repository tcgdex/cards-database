import { Card } from '../../../interfaces'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		en: "Machoke",
		fr: "Machopeur",
	},
	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		67,
	],
	hp: 80,
	types: [
		"Fightning",
	],
	evolveFrom: {
		en: "Machop",
		fr: "Machoc",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fightning",
				"Colorless",
			],
			name: {
				en: "Karate Chop",
				fr: "Poing-Karaté",
			},
			effect: {
				en: "Does 40 damage minus 10 damage for each damage counter on Machoke.",
				fr: "Inflige 40 dégâts moins 10 dégâts pour chaque marqueur de dégât sur Machopeur.",
			},
			damage: 40,

		},
		{
			cost: [
				"Fightning",
				"Fightning",
				"Colorless",
			],
			name: {
				en: "Seismic Toss",
				fr: "Frappe Atlas",
			},

			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "+20"
		},
	],

	retreat: 2,



}

export default card
