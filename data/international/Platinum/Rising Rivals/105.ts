import { Card } from 'models/database/card'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		'en-us': "Flygon LV.X",
		'fr-fr': "Libegon Niv. X",
		'de-de': "Libelldra"
	},

	illustrator: "Shizurow",
	rarity: "Rare Holo LV.X",
	category: "Pokemon",
	set: Set,

	dexId: [330],

	hp: 140,

	types: [
		"Colorless"
	],

	stage: "LEVEL-UP",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Wind Erosion",
				'fr-fr': "Érosion venteuse",
				'de-de': "Winderosion"
			},
			effect: {
				'en-us': "As long as Flygon is your Active Pokémon, discard the top card from your opponent's deck between turns.",
				'fr-fr': "Tant que Libegon est votre Pokémon Actif, défaussez la carte du dessus du deck de votre adversaire entre deux tours.",
				'de-de': "Solange Libelldra dein Aktives Pokémon ist, lege zwischen den Zügen die oberste Karte vom Deck deines Gegners auf seinen Ablagestapel."
			}
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
				'en-us': "Extreme Attack",
				'fr-fr': "Attaque extrême",
				'de-de': "Radikalangriff"
			},
			effect: {
				'en-us': "Choose 1 of your opponent's Pokémon LV.X. This attack does 150 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon).",
				'fr-fr': "Choisissez 1 des Pokémon LV.X de votre adversaire. Cette attaque lui inflige 150 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc).",
				'de-de': "Wähle 1 Pokémon LV.X deines Gegners. Dieser Angriff fügt dem gewählten Pokémon 150 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Colorless",
			value: "x2"
		},
	],
	resistances: [
		{
			type: "Lightning",
			value: "-20"
		},
	],
	retreat: 0,
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 278679,
				tcgplayer: 85533
			}
		},
		{
			type: "holo",
			stamp: ["david-cohen"],
			thirdParty: {
				cardmarket: 868872,
				tcgplayer: 479899
			}
		}
	],

}

export default card
