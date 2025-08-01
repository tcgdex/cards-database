import { Card } from '../../../interfaces'
import Set from '../Evolutions'

const card: Card = {
	name: {
		en: "Zapdos",
		fr: "Électhor",
		es: "Zapdos",
		it: "Zapdos",
		pt: "Zapdos",
		de: "Zapdos"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		145,
	],

	hp: 110,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Thunder",
				fr: "Fatal-Foudre",
				es: "Trueno",
				it: "Tuono",
				pt: "Trovão",
				de: "Donner"
			},
			effect: {
				en: "This Pokémon does 30 damage to itself.",
				fr: "Ce Pokémon s'inflige 30 dégâts.",
				es: "Este Pokémon se hace 30 puntos de daño a sí mismo.",
				it: "Questo Pokémon infligge 30 danni a se stesso.",
				pt: "Esse Pokémon causa 30 de danos a ele mesmo.",
				de: "Dieses Pokémon fügt sich selbst 30 Schadenspunkte zu."
			},
			damage: 90,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Lightning",
				"Lightning",
			],
			name: {
				en: "Thunderbolt",
				fr: "Tonnerre",
				es: "Rayo",
				it: "Fulmine",
				pt: "Relâmpago",
				de: "Donnerblitz"
			},
			effect: {
				en: "Discard all Energy attached to this Pokémon.",
				fr: "Défaussez toutes les Énergies attachées à ce Pokémon.",
				es: "Descarta todas las Energías unidas a este Pokémon.",
				it: "Scarta tutte le Energie assegnate a questo Pokémon.",
				pt: "Descarte toda a Energia ligada a este Pokémon.",
				de: "Lege alle an dieses Pokémon angelegten Energien auf deinen Ablagestapel."
			},
			damage: 170,

		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 293425
	}
}

export default card
