import { Card } from '../../../interfaces'
import Set from '../Dragon Frontiers'

const card: Card = {
	name: {
		en: "Tropius δ",
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		357,
	],
	hp: 70,
	types: [
		"Metal",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Tropical Heal",
			},
			effect: {
				en: "Once during your turn, when you put Tropius from your hand onto your Bench, you may remove all Special Conditions, Imprison markers, and Shock-wave markers from your Pokémon.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				en: "Grind",
			},
			effect: {
				en: "Does 10 damage times the amount of Energy attached to Tropius.",
			},
			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],





}

export default card
