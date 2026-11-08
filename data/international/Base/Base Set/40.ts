import { Card } from 'models/database/card'
import Set from '../Base Set'

const card: Card = {
	name: {
		'en-us': "Raticate",
		'fr-fr': "Rattatac",
		'de-de': "Rattikarl",
		'it-it': "Raticate"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		20,
	],

	hp: 60,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Rattata",
		'fr-fr': "Rattata",
		'it-it': "Rattata"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Bite",
				'fr-fr': "Morsure",
				'de-de': "Biss",
				'it-it': "Morso"
			},

			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Super Fang",
				'fr-fr': "Croc Fatal",
				'de-de': "Superzahn",
				'it-it': "Superzanna"
			},
			effect: {
				'en-us': "Does damage to the Defending Pokémon equal to half the Defending Pokémon's remaining HP (rounded up to the nearest 10).",
				'fr-fr': "Inflige une quantité de dégâts au Pokémon Défenseur égale à la moitié de ses PV restants (arrondis à la dizaine la plus proche).",
				'de-de': "Fügt dem verteidigenden Pokémon Schadenspunkte in Höhe der Hälfte seiner verbleibenden KP (auf die nächste Zehnerstelle aufgerundet) zu.",
				'it-it': "Infligge al Pokémon Difensore un danno pari alla metà dei PV rimanenti del Pokémon Difensore (arrotondato per eccesso alla decina più vicina)."
			},
			damage: "?",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],
	retreat: 1,


	description: {
		'en-us': "It uses its whiskers to maintain its balance. It seems to slow down if they are cut off.",
		'fr-fr': "Si ses moustaches sont coupées, il perd le sens de l'équilibre et devient moins rapide.",
		'it-it': "Usa i suoi baffi per mantenere l'equilibrio. Sembra che rallenti se i baffi gli vengono tagliati. LIV 41 N.20"
	},

	variants: [
		{
			type: "normal",
			subtype: "unlimited",
			thirdParty: {
				cardmarket: 273735,
				tcgplayer: 42383
			},
		},
		{
			type: "normal",
			subtype: "shadowless",
			stamp: ["1st-edition"],
			thirdParty: {
				tcgplayer: 107037
			},
		},
		{
			type: "normal",
			subtype: "shadowless",
			thirdParty: {
				tcgplayer: 107037
			},
		},
		{
			type: "normal",
			subtype: "1999-2000-copyright",
		}
	],
}

export default card
