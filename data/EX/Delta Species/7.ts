import { Card } from '../../../interfaces'
import Set from '../Delta Species'

const card: Card = {
	name: {
		en: "Jolteon δ",
	},
	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		135,
	],
	hp: 70,
	types: [
		"Lightning",
		"Metal",
	],
	evolveFrom: {
		en: "Eevee",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Delta Search",
			},
			effect: {
				en: "Search your deck for a Holon Energy card and attach it to Jolteon. Shuffle your deck afterward.",
			},
			damage: 10,

		},
		{
			cost: [
				"Lightning",
				"Metal",
				"Colorless",
			],
			name: {
				en: "Return Spark",
			},
			effect: {
				en: "You may return an Energy card attached to Jolteon to your hand. If you do, this attack does 20 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
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
