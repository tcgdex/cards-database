import { Card } from '../../../interfaces'
import Set from '../Legendary Collection'

const card: Card = {
	name: {
		en: "Dodrio",
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		85,
	],

	hp: 70,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Doduo",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Retreat Aid",
			},
			effect: {
				en: "As long as Dodrio is Benched, pay 1 Colorless less to retreat your Active Pokémon.",
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Rage",
			},
			effect: {
				en: "Does 10 damage plus 10 more damage for each damage counter on Dodrio.",
			},
			damage: 10,

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
			type: "Fighting",
			value: "-30"
		},
	],

	thirdParty: {
		cardmarket: 274806
	}
}

export default card
