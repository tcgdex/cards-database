import { Card } from '../../../interfaces'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		en: "Flygon",
		fr: "Libegon Niv. X",
		de: "Libelldra"
	},

	illustrator: "Shizurow",
	rarity: "Rare Holo LV.X",
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
				de: "Winderosion"
			},
			effect: {
				en: "As long as Flygon is your Active Pokémon, discard the top card from your opponent's deck between turns.",
				fr: "Tant que Libegon est votre Pokémon Actif, défaussez la carte du dessus du deck de votre adversaire entre deux tours.",
				de: "Solange Libelldra dein Aktives Pokémon ist, lege zwischen den Zügen die oberste Karte vom Deck deines Gegners auf seinen Ablagestapel."
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
				de: "Radikalangriff"
			},
			effect: {
				en: "Choose 1 of your opponent's Pokémon LV.X. This attack does 150 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Choisissez 1 des Pokémon LV.X de votre adversaire. Cette attaque lui inflige 150 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc).",
				de: "Wähle 1 Pokémon LV.X deines Gegners. Dieser Angriff fügt dem gewählten Pokémon 150 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
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

	thirdParty: {
		cardmarket: 278579
	}
}

export default card
