import { Card } from '../../../interfaces'
import Set from '../Delta Species'

const card: Card = {
	name: {
		en: "Metagross δ",
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		376,
	],
	hp: 100,
	types: [
		"Lightning",
		"Metal",
	],
	evolveFrom: {
		en: "Metang",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Delta Control",
			},
			effect: {
				en: "Once during your turn (before your attack), you may look at the top 4 cards of your deck, choose 1 of them, and put it into your hand. Put the 3 other cards on the bottom of your deck in any order. This power can't be used if Metagross is affected by a Special Condition.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Lightning",
				"Metal",
			],
			name: {
				en: "Crush and Burn",
			},
			effect: {
				en: "You may discard as many Energy cards as you like attached to your Pokémon in play. If you do, this attack does 30 damage plus 20 more damage for each Energy card you discarded.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
	],




}

export default card
