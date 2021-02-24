import { Card } from '../../../interfaces'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		en: "Flygon",
		fr: "Libegon Niv. X",
	},
	illustrator: "Shizurow",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		330,
	],
	hp: 140,
	types: [
		"Colorless",
	],

	stage: "LEVEL-UP",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Wind Erosion",
				fr: "Érosion venteuse",
			},
			effect: {
				en: "As long as Flygon is your Active Pokémon, discard the top card from your opponent's deck between turns.",
				fr: "Tant que Libegon est votre Pokémon Actif, défaussez la carte du dessus du deck de votre adversaire entre deux tours.",
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
				en: "Extreme Attack",
				fr: "Attaque extrême",
			},
			effect: {
				en: "Choose 1 of your opponent's Pokémon LV.X. This attack does 150 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Choisissez 1 des Pokémon LV.X de votre adversaire. Cette attaque lui inflige 150 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc).",
			},

		},
	],
	weaknesses: [
		{
			type: "Colorless",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Lightning",
			value: "-20"
		},
	],




}

export default card
