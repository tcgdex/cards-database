import { Card } from '../../../interfaces'
import Set from '../Triumphant'

const card: Card = {
	name: {
		en: "Machamp",
		fr: "Mackogneur",
	},
	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		68,
	],
	hp: 130,
	types: [
		"Fightning",
	],
	evolveFrom: {
		en: "Machoke",
		fr: "Machopeur",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Fightning",
			],
			name: {
				en: "Vital Throw",
				fr: "Corps perdu",
			},
			effect: {
				en: "You may do 40 damage plus 20 more damage. If you do, Machamp does 20 damage to itself.",
				fr: "Vous pouvez infliger 40 dégâts plus 20 dégâts supplémentaires. Dans ce cas, Mackogneur s'inflige 20 dégâts.",
			},
			damage: 40,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hundred Furious Punches",
				fr: "Multipoings furieux",
			},
			effect: {
				en: "Does 60 damage plus 10 more damage for each Fighting Energy attached to Machamp.",
				fr: "Inflige 60 dégâts plus 10 dégâts supplémentaires pour chaque carte Énergie Fighting attachée à Mackogneur.",
			},
			damage: 60,

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
