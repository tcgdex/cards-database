import { Card } from '../../../interfaces'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		en: "Slowking",
	},
	illustrator: "Midori Harada",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		199,
	],
	hp: 70,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Slowpoke",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Item Search",
			},
			effect: {
				en: "Once during your turn (before your attack), you may search your deck for a Pokémon Tool card, show it to your opponent, and put it into your hand. Shuffle your deck afterward. This power can't be used if Slowking is affected by a Special Condition.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Aftermath",
			},
			effect: {
				en: "Does 20 damage plus 10 more damage for each Pokémon Tool card in your discard pile. You can't add more than 60 damage in this way.",
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],





}

export default card
