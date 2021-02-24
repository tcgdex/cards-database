import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Starmie",
	},
	illustrator: "Kyoko Umemoto",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		121,
	],
	hp: 70,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Staryu",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Water Gun",
			},
			effect: {
				en: "This attack does 10 damage plus 20 more damage for each Energy attached to Starmie but not used to pay for this attack's energy cost. You can't add more than 40 damage in this way.",
			},
			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Core Blast",
			},
			effect: {
				en: "This attack does 30 damage plus 20 more damage for each Special Energy card attached to the Defending Pokémon.",
			},
			damage: 30,

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
