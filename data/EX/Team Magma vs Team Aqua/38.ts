import { Card } from '../../../interfaces'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		en: "Team Magma's Rhyhorn",
	},
	illustrator: "Mt. TBT",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		111,
	],
	hp: 50,
	types: [
		"Fightning",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Double Damage",
			},
			effect: {
				en: "Does 10 damage to each Defending Pokémon.",
			},

		},
		{
			cost: [
				"Fightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Horn Rush",
			},
			effect: {
				en: "Flip a coin. If tails, this attack does nothing.",
			},
			damage: 60,

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
