import { Card } from '../../../interfaces'
import Set from '../Base Set'

const card: Card = {
	name: {
		en: "Raticate",
		pt: "Raticate",
		fr: "Rattatac",
		de: "Rattikarl"
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
		pt: "Rattata",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Bite",
				pt: "Mordida",
				fr: "Morsure",
				de: "Biss"
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
				pt: "Super Mordida",
				fr: "Croc Fatal",
				de: "Superzahn"
			},
			effect: {
				en: "Does damage to the Defending Pokémon equal to half the Defending Pokémon's remaining HP (rounded up to the nearest 10).",
				pt: "Does damage to the Defending Pokémon equal to half the Defending Pokémon's remaining HP (rounded up to the nearest 10).",
				fr: "Inflige une quantité de dégâts au Pokémon Défenseur égale à la moitié de ses PV restants (arrondis à la dizaine la plus proche).",
				de: "Fügt dem verteidigenden Pokémon Schadenspunkte in Höhe der Hälfte seiner verbleibenden KP (auf die nächste Zehnerstelle aufgerundet) zu."
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
		fr: "Si ses moustaches sont coupées, il perd le sens de l'équilibre et devient moins rapide."
	}
}

export default card
