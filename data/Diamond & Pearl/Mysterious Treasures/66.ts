import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Unown M",
	},
	illustrator: "Kazuyuki Kano",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		201,
	],
	hp: 50,
	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "MAGNET",
			},
			effect: {
				en: "Once during your turn (before your attack), if Unown M is your Active Pokémon, you may flip a coin. If heads, switch 1 of your opponent's Benched Pokémon with 1 of the Defending Pokémon. This power can't be used if Unown M is affected by a Special Condition.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Hidden Power",
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 30 damage. If tails, this attack does 30 damage to 1 of your Pokémon, and this attack's damage isn't affected by Weakness or Resistance.",
			},

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "+10"
		},
	],





}

export default card
