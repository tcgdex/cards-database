import { Card } from '../../../interfaces'
import Set from '../Neo Discovery'

const card: Card = {
	name: {
		en: "Tyranitar",
	},
	illustrator: "Hironobu Yoshida",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		248,
	],
	hp: 100,
	types: [
		"Darkness",
	],
	evolveFrom: {
		en: "Pupitar",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Slam",
			},
			effect: {
				en: "Flip 2 coins. This attack does 30 times the number of heads.",
			},

		},
		{
			cost: [
				"Darkness",
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Trample",
			},
			effect: {
				en: "For each Benched Pokémon in play (yours and your opponent's), flip a coin. If heads, this attack does 30 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			},
			damage: 50,

		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],




}

export default card
