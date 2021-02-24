import { Card } from '../../../interfaces'
import Set from '../Arceus'

const card: Card = {
	name: {
		en: "Tangrowth LV. X",
	},
	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		465,
	],

	types: [
		"Grass",
	],

	stage: "LEVEL-UP",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Healing Growth",
			},
			effect: {
				en: "Once during your turn (before your attack), you may flip a coin. If heads, remove 4 damage counters from 1 of your Pokémon. This power can't be used if Tangrowth is affected by a Special Condition.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Big Growth",
			},
			effect: {
				en: "Search your discard pile for as many Grass Energy cards as you like and attach them to your Pokémon in any way you like.",
			},

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],
	retreat: 3,



}

export default card
