import { Card } from '../../../interfaces'
import Set from '../Arceus'

const card: Card = {
	name: {
		en: "Gengar LV. X",
	},
	illustrator: "Shizurow",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		94,
	],

	types: [
		"Psychic",
	],

	stage: "LEVEL-UP",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Level-Down",
			},
			effect: {
				en: "Once during your turn (before your attack), you may choose 1 of your opponent's Pokémon LV.X. Remove the Level-Up card from that Pokémon and have your opponent shuffle that card into his or her deck. This power can't be used if Gengar is affected by a Special Condition.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Compound Pain",
			},
			effect: {
				en: "This attack does 30 damage to each of your opponent's Pokémon that already has any damage counters on it. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			},

		},
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Colorless",
			value: "-20"
		},
	],




}

export default card
