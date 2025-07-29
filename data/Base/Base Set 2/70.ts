import { Card } from '../../../interfaces'
import Set from '../Base Set 2'

const card: Card = {
	name: {
		en: "Cubone",
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		104,
	],

	hp: 40,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Snivel",
			},
			effect: {
				en: "If the Defending Pokémon attacks Cubone during your opponent's next turn, any damage done by the attack is reduced by 20 (after applying Weakness and Resistance). (Benching either Pokémon ends this effect.)",
			},

		},
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				en: "Rage",
			},
			effect: {
				en: "Does 10 damage plus 10 more damage for each damage counter on Cubone.",
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Lightning",
			value: "-30"
		},
	],

	thirdParty: {
		cardmarket: 273993
	}
}

export default card
