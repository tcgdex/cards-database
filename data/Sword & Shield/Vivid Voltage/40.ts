import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Cramorant",
	},
	illustrator: "Sanosuke Sakuma",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,

	hp: 110,
	types: [
		"Water",
	],




	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Continuous Gulp Missile",
			},
			effect: {
				en: "Discard any number of Arrokuda from your Bench. This attack does 60 damage for each Arrokuda you discarded in this way.",
			},
			damage: "60×",

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fightning",
			value: "-30"
		},
	],
	retreat: 1,



}

export default card
