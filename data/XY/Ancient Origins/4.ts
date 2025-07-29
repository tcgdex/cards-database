import { Card } from '../../../interfaces'
import Set from '../Ancient Origins'

const card: Card = {
	name: {
		en: "Bellossom",
		fr: "Joliflor",
		es: "Bellossom",
		it: "Bellossom",
		pt: "Bellossom",
		de: "Blubella"
	},

	illustrator: "Mizue",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		182,
	],

	hp: 120,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Gloom",
		fr: "Ortide",
		es: "Gloom",
		it: "Gloom",
		pt: "Gloom",
		de: "Duflor"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Windmill",
				fr: "Moulin à Vent",
				es: "Molino de Viento",
				it: "Mulino",
				pt: "Moinho de Vento",
				de: "Windmühle"
			},
			effect: {
				en: "Switch this Pokémon with 1 of your Benched Pokémon.",
				fr: "Échangez ce Pokémon avec l'un de vos Pokémon de Banc.",
				es: "Cambia este Pokémon por 1 de tus Pokémon en Banca.",
				it: "Scambia questo Pokémon con uno della tua panchina.",
				pt: "Troque este Pokémon por 1 dos seus Pokémon no Banco.",
				de: "Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus."
			},
			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Flower Tornado",
				fr: "Floramixeur",
				es: "Tornado Floral",
				it: "Vortifiore",
				pt: "Tornado de Flores",
				de: "Blumenmixer"
			},
			effect: {
				en: "Move as many Grass Energy attached to your Pokémon to your other Pokémon in any way you like.",
				fr: "Déplacez autant d'Énergies Grass attachées à vos Pokémon que vous voulez vers vos autres Pokémon, de la manière que vous voulez.",
				es: "Mueve tantas Energías Grass unidas a tus Pokémon como quieras a tus otros Pokémon de la manera que desees.",
				it: "Distribuisci a piacimento tutte le Energie Grass assegnate ai tuoi Pokémon.",
				pt: "Mova tantas Energias Grass ligadas aos seus Pokémon quanto desejar para seus outros Pokémon.",
				de: "Verschiebe beliebig viele an deine Pokémon angelegten Grass-Energien nach Belieben auf deine anderen Pokémon."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 284185
	}
}

export default card
