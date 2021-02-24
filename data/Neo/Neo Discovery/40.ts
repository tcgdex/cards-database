import { Card } from '../../../interfaces'
import Set from '../Neo Discovery'

const card: Card = {
	name: {
		en: "Igglybuff",
	},
	illustrator: "Miki Tanaka",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		174,
	],
	hp: 30,
	types: [
		"Colorless",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Gaze",
			},
			effect: {
				en: "Once during your turn (before you attack), choose 1 of your opponent's Benched Pokémon that has a Pokémon Power. That power stops working until the end of this turn. This effect ends if that Pokémon leaves the Bench. (Pokémon Power)",
			},
		},
	],







}

export default card
