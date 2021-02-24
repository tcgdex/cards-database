import { Card } from '../../../interfaces'
import Set from '../Call of Legends'

const card: Card = {
	name: {
		en: "Granbull",
	},
	illustrator: "Mizue",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		210,
	],
	hp: 90,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Snubbull",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Timid Tackle",
			},
			effect: {
				en: "Granbull does 20 damage to itself. Switch Granbull with 1 of your Benched Pokémon.",
			},
			damage: 50,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Chomp",
			},
			effect: {
				en: "Does 40 damage plus 10 more damage for each damage counter on Granbull.",
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],





}

export default card
