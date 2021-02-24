import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Croconaw",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		159,
	],
	hp: 80,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Totodile",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Evolutionary Vitality",
			},
			effect: {
				en: "Once during your turn, when you play Croconaw from your hand to evolve 1 of your Pokémon, you may look at the top 5 cards of your deck. Choose all Energy cards you find there, show them to your opponent, and put them into your hand. Put the other cards back on top of your deck. Shuffle your deck afterward.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Hover Over",
			},
			effect: {
				en: "The Defending Pokémon can't retreat during your opponent's next turn.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "+20"
		},
	],





}

export default card
