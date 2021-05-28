import { Card } from '../../../interfaces'
import Set from '../Neo Revelation'

const card: Card = {
	name: {
		en: "Ampharos",
	},
	illustrator: "Toshinao Aoki",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		181,
	],
	hp: 90,
	types: [
		"Lightning",
	],
	evolveFrom: {
		en: "Flaaffy",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Attract Current",
			},
			effect: {
				en: "Flip 3 coins. For each heads, you may search your deck for a L Energy card and attach it to 1 of your L Pokémon. Shuffle your deck afterward.",
			},
			damage: 20,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Gigavolt",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 40 damage plus 20 more damage. If tails, this attack does 40 damage and the Defending Pokémon is now Paralyzed.",
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],





}

export default card
