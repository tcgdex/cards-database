import { Card } from '../../../interfaces'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		en: "M Sharpedo-EX",
	},
	illustrator: "5ban Graphics",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		319,
	],
	hp: 210,
	types: [
		"Darkness",
	],
	evolveFrom: {
		en: "Sharpedo-EX",
	},
	stage: "MEGA",


	attacks: [
		{
			cost: [
				"Darkness",
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Torpedo Dive",
			},
			effect: {
				en: "This attack does 10 damage to each of your opponent's Benched Pokémon for each Colorless in that Pokémon's Retreat Cost. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			},
			damage: 120,

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
