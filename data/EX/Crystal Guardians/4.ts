import { Card } from '../../../interfaces'
import Set from '../Crystal Guardians'

const card: Card = {
	name: {
		en: "Charizard δ",
	},
	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		6,
	],
	hp: 120,
	types: [
		"Lightning",
		"Metal",
	],
	evolveFrom: {
		en: "Charmeleon",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Peal of Thunder",
			},
			effect: {
				en: "Once during your turn, when you play Charizard from your hand to evolve 1 of your Pokémon, you may look at the top 5 cards of your deck, choose as many Energy cards as you like, and attach them to 1 of your Pokémon. Discard the other cards.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Lightning",
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				en: "Metal Burn",
			},
			effect: {
				en: "Discard all Metal Energy attached to Charizard.",
			},
			damage: 120,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],





}

export default card
