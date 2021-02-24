import { Card } from '../../../interfaces'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		en: "Ludicolo",
	},
	illustrator: "Tomokazu Komiya",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		272,
	],
	hp: 90,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Lombre",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Rain Dish",
			},
			effect: {
				en: "At any time between turns, remove 1 damage counter from Ludicolo.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hydro Punch",
			},
			effect: {
				en: "Does 50 damage plus 10 more damage for each Water Energy attached to Ludicolo but not used to pay for this attack's Energy cost. You can't add more than 20 damage in this way.",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],





}

export default card
