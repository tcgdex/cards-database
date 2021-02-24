import { Card } from '../../../interfaces'
import Set from '../Call of Legends'

const card: Card = {
	name: {
		en: "Jirachi",
	},
	illustrator: "match",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		385,
	],
	hp: 60,
	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Stardust Song",
			},
			effect: {
				en: "Once during your turn, when you put Jirachi from your hand onto your Bench, you may flip 3 coins. For each heads, search your discard pile for a Psychic Energy card and attach it to Jirachi.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Time Hollow",
			},
			effect: {
				en: "Choose a number of your opponent's Stage 1 or Stage 2 Evolved Pokémon up to the amount of Energy attached to Jirachi. Remove the highest Stage Evolution card from each of those Pokémon and put those cards back into your opponent's hand.",
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
