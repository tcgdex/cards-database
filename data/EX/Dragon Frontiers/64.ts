import { Card } from '../../../interfaces'
import Set from '../Dragon Frontiers'

const card: Card = {
	name: {
		en: "Smoochum δ",
	},
	illustrator: "Miki Tanaka",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		238,
	],
	hp: 40,
	types: [
		"Fire",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Baby Evolution",
			},
			effect: {
				en: "Once during your turn (before your attack), you may put Jynx from your hand onto Smoochum (this counts as evolving Smoochum) and remove all damage counters from Smoochum.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Alluring Kiss",
			},
			effect: {
				en: "Search your deck for a Basic Pokémon and a basic Energy card, show them to your opponent, and put them into your hand. Shuffle your deck afterward.",
			},

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
