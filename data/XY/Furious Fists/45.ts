import { Card } from '../../../interfaces'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		en: "Machoke",
		fr: "Machopeur",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		67,
	],
	hp: 90,
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
				"Fightning",
			],
			name: {
				en: "Beatdown",
				fr: "Dérouillée",
			},

			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
