import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Dewgong",
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		87,
	],
	hp: 90,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Seel",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Cold Fat",
			},
			effect: {
				en: "As long as Dewgong is Asleep, any damage done to Dewgong by attacks is reduced by 40 (after applying Weakness and Resistance).",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Collapse",
			},
			effect: {
				en: "Dewgong is now Asleep.",
			},
			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "+20"
		},
	],





}

export default card
