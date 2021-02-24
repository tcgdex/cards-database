import { Card } from '../../../interfaces'
import Set from '../Dragon Frontiers'

const card: Card = {
	name: {
		en: "Nidoqueen δ",
	},
	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		31,
	],
	hp: 100,
	types: [
		"Metal",
	],
	evolveFrom: {
		en: "Nidorina",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Invitation",
			},
			effect: {
				en: "Once during your turn (before your attack), you may search your deck for a Basic Pokémon or Evolution card, show it to your opponent, and put it into your hand. Shuffle your deck afterward. This power can't be used if Nidoqueen is affected by a Special Condition.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Vengeance",
			},
			effect: {
				en: "Does 30 damage plus 10 more damage for each Basic Pokémon and each Evolution card in your discard pile. You can't add more than 60 damage in this way.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],





}

export default card
