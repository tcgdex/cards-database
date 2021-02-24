import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Alakazam",
	},
	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		65,
	],
	hp: 100,
	types: [
		"Psychic",
	],
	evolveFrom: {
		en: "Kadabra",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Power Cancel",
			},
			effect: {
				en: "Once during your opponent's turn, when your opponent's Pokémon uses any Poké-Power, you may discard 2 cards from your hand and prevent all effects of that Poké-Power. (This counts as that Pokémon using its Poké-Power.) This power can't be used if Alakazam is affected by a Special Condition.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Psychic Guard",
			},
			effect: {
				en: "During your opponent's next turn, any damage done to Alakazam by attacks from your opponent's Stage 2 Evolved Pokémon is reduced by 30 (after applying Weakness and Resistance).",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "+30"
		},
	],





}

export default card
