import { Card } from '../../../interfaces'
import Set from '../POP Series 7'

const card: Card = {
	name: {
		en: "Burmy Plant Cloak",
	},
	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		412,
	],
	hp: 40,
	types: [
		"Grass",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Wear Cloak",
			},
			effect: {
				en: "Once during your turn (before your attack), if Burmy Plant Cloak is your Active Pokémon, you may search your discard pile for a basic Grass Energy card and attach it to Burmy Plant Cloak.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Plant Cloak Tackle",
			},
			effect: {
				en: "If Burmy Plant Cloak has any Grass Energy attached to it, this attack does 10 damage plus 10 more damage.",
			},
			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "+10"
		},
	],





}

export default card
