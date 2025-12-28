import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Raticate",
		fr: "Rattatac",
		de: "Rattikarl",
		it: "Raticate"
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
		en: "Poochyena",
		it: "Rattata"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Bite",
				fr: "Morsure",
				de: "Biss",
				it: "Morso"
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
				en: "Super Fang",
				fr: "Croc Fatal",
				de: "Superzahn",
				it: "Superzanna"
			},
			effect: {
				en: "Does damage to the Defending Pokémon equal to half the Defending Pokémon's remaining HP (rounded up to the nearest 10).",
				fr: "Inflige une quantité de dégâts au Pokémon Défenseur égale à la moitié de ses PV restants (arrondis à la dizaine la plus proche).",
				de: "Fügt dem verteidigenden Pokémon Schadenspunkte in Höhe der Hälfte seiner verbleibenden KP (auf die nächste Zehnerstelle aufgerundet) zu.",
				it: "Infligge al Pokémon Difensore un danno pari alla metà dei PV rimanenti del Pokémon Difensore (arrotondato per eccesso alla decina più vicina)."
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

	description: {
		fr: "Si ses moustaches sont coupées, il perd le sens de l'équilibre et devient moins rapide.",
		it: "Usa i suoi baffi per mantenere l'equilibrio. Sembra che rallenti se i baffi gli vengono tagliati. LIV 41 N.20"
	},

	thirdParty: {
		cardmarket: 273735,
		tcgplayer: 42383
	},
	variants: [
		{
			type: "normal",
			subtype: "unlimited",
		},
		{
			type: "normal",
			subtype: "shadowless",
			stamp: ["1st-edition"]
		},
		{
			type: "normal",
			subtype: "shadowless",
		},
		{
			type: "normal",
			subtype: "1999-2000-copyright",
		}
	],
}

export default card
