import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Magneton",
	},
	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		82,
	],
	hp: 80,
	types: [
		"Lightning",
	],
	evolveFrom: {
		en: "Magnemite",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Attract Energy",
			},
			effect: {
				en: "When you play Magneton from your hand to evolve 1 of your Pokémon, you may move any number of basic Energy cards attached to your other Pokémon to Magneton.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Electric Blast",
			},
			effect: {
				en: "You may discard all Energy cards attached to Magneton when you use this attack. If you do, put damage counters equal to the amount of Energy cards removed in this way on any number of your opponent's Benched Pokémon in the way you like. (For example, if you discard 3 Energy cards, you can put 1 damage counter on 1 of your opponent's Benched Pokémon and 2 on another.)",
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],





}

export default card
