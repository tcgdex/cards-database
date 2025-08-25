import { Card } from '../../../interfaces'
import Set from '../Gym Challenge'

const card: Card = {
	name: {
		en: "Giovanni's Gyarados",
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		130,
	],

	hp: 90,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Magikarp",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Summon Storm",
			},
			effect: {
				en: "Flip 2 coins. If both of them are heads, this attack does 20 damage to each other Pokémon (even your own). Don't apply Weakness and Resistance for this attack.",
			},

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Dragon Tornado",
			},
			effect: {
				en: "Unless this attack Knocks Out the Defending Pokémon, choose 1 of your opponent's Benched Pokémon and switch it with the Defending Pokémon.",
			},
			damage: 40,

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
			type: "Fighting",
			value: "-30"
		},
	],

	thirdParty: {
		cardmarket: 274273,
		tcgplayer: 85710
	}
}

export default card
