import { Card } from '../../../interfaces'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		en: "Manectric",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		310,
	],
	hp: 70,
	types: [
		"Lightning",
	],
	evolveFrom: {
		en: "Electrike",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Attract Current",
			},
			effect: {
				en: "Search your deck for a Lightning Energy card and attach it to 1 of your Pokémon. Shuffle your deck afterward.",
			},
			damage: 10,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Thunder Jolt",
			},
			effect: {
				en: "Flip a coin. If tails, Manectric does 10 damage to itself.",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-30"
		},
	],




}

export default card
