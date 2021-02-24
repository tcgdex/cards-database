import { Card } from '../../../interfaces'
import Set from '../Nintendo Black Star Promos'

const card: Card = {
	name: {
		en: "Kyogre ex",
	},
	illustrator: "Hiromichi Sugiyama",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		382,
	],
	hp: 120,
	types: [
		"Water",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Water",
				"Water",
			],
			name: {
				en: "Major Flood",
			},
			effect: {
				en: "Discard a Water Energy card attached to Kyogre ex. Does 10 damage to each Benched Pokémon (both yours and your opponent's). (Don't apply Weakness and Resistance for Benched Pokémon.)",
			},
			damage: 60,

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
