import { Card } from '../../../interfaces'
import Set from '../Nintendo Black Star Promos'

const card: Card = {
	name: {
		en: "Groudon ex",
	},
	illustrator: "Kazuo Yazawa",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		383,
	],
	hp: 120,
	types: [
		"Fighting",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
				"Fighting",
				"Fighting",
			],
			name: {
				en: "Major Earthquake",
			},
			effect: {
				en: "Discard a Fighting Energy card attached to Groudon ex. Does 10 damage to your Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			},
			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],





}

export default card
