import { Card } from '../../../interfaces'
import Set from '../Arceus'

const card: Card = {
	name: {
		en: "Porygon-Z",
	},
	illustrator: "Nobuyuki Fujimoto",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		474,
	],

	types: [
		"Colorless",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Dowsing Code",
			},
			effect: {
				en: "Once during your turn, when you put Porygon-Z from your hand onto your Bench, you may search your discard pile for up to 2 Pokémon Tool cards, show them to your opponent, and shuffle them into your deck.",
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
				en: "Ambush",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 20 damage plus 40 more damage.",
			},
			damage: "20+",

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
