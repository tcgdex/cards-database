import { Card } from '../../../interfaces'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		en: "Metapod",
		fr: "Chrysacier",
		es: "Metapod",
		it: "Metapod",
		pt: "Metapod",
		de: "Safcon"
	},
	illustrator: "Suwama Chiaki",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		11,
	],
	hp: 80,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Caterpie",
		fr: "Chenipan",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Ram",
				fr: "Collision",
				es: "Apisonar",
				it: "Carica",
				pt: "Aríete",
				de: "Ramme"
			},

			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Shed Skin",
				fr: "Mue",
				es: "Mudar",
				it: "Muta",
				pt: "Pele Vertente",
				de: "Expidermis"
			},
			effect: {
				en: "Heal 40 damage from this Pokémon.",
				fr: "Soignez 40 dégâts à ce Pokémon.",
				es: "Cura 40 puntos de daño a este Pokémon.",
				it: "Cura questo Pokémon da 40 danni.",
				pt: "Cure 40 pontos de dano deste Pokémon.",
				de: "Heile 40 Schadenspunkte bei diesem Pokémon."
			},

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
