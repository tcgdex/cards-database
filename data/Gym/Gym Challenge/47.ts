import { Card } from '../../../interfaces'
import Set from '../Gym Challenge'

const card: Card = {
	name: {
		en: "Koga's Kakuna",
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		14,
	],

	hp: 60,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Weedle",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Emerge",
			},
			effect: {
				en: "Once during your turn (before your attack), you may flip a coin. If heads, search your deck for an Evolution card named Koga's Beedrill and put it on Koga's Kakuna. (This counts as evolving Koga's Kakuna.) Shuffle your deck afterward. This power can't be used if Koga's Kakuna is Asleep, Confused, or Paralyzed.",
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Toxic Secretion",
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Poisoned. It takes 20 Poison damage instead of 10 after each player's turn (even if it was already Poisoned).",
			},

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 274315,
		tcgplayer: 86510
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["1st edition"]
		},
	]
}

export default card
