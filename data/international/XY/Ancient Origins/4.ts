import { Card } from 'models/database/card'
import Set from '../Ancient Origins'

const card: Card = {
	name: {
		'en-us': "Bellossom",
		'fr-fr': "Joliflor",
		'es-es': "Bellossom",
		'it-it': "Bellossom",
		'pt-br': "Bellossom",
		'de-de': "Blubella"
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
		'en-us': "Gloom",
		'fr-fr': "Ortide",
		'es-es': "Gloom",
		'it-it': "Gloom",
		'pt-br': "Gloom",
		'de-de': "Duflor"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Windmill",
				'fr-fr': "Moulin à Vent",
				'es-es': "Molino de Viento",
				'it-it': "Mulino",
				'pt-br': "Moinho de Vento",
				'de-de': "Windmühle"
			},
			effect: {
				'en-us': "Switch this Pokémon with 1 of your Benched Pokémon.",
				'fr-fr': "Échangez ce Pokémon avec l'un de vos Pokémon de Banc.",
				'es-es': "Cambia este Pokémon por 1 de tus Pokémon en Banca.",
				'it-it': "Scambia questo Pokémon con uno della tua panchina.",
				'pt-br': "Troque este Pokémon por 1 dos seus Pokémon no Banco.",
				'de-de': "Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus."
			},
			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Flower Tornado",
				'fr-fr': "Floramixeur",
				'es-es': "Tornado Floral",
				'it-it': "Vortifiore",
				'pt-br': "Tornado de Flores",
				'de-de': "Blumenmixer"
			},
			effect: {
				'en-us': "Move as many Grass Energy attached to your Pokémon to your other Pokémon in any way you like.",
				'fr-fr': "Déplacez autant d'Énergies Grass attachées à vos Pokémon que vous voulez vers vos autres Pokémon, de la manière que vous voulez.",
				'es-es': "Mueve tantas Energías Grass unidas a tus Pokémon como quieras a tus otros Pokémon de la manera que desees.",
				'it-it': "Distribuisci a piacimento tutte le Energie Grass assegnate ai tuoi Pokémon.",
				'pt-br': "Mova tantas Energias Grass ligadas aos seus Pokémon quanto desejar para seus outros Pokémon.",
				'de-de': "Verschiebe beliebig viele an deine Pokémon angelegten Grass-Energien nach Belieben auf deine anderen Pokémon."
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

	description: {
		'en-us': "When the heavy rainfall season ends, it is drawn out by warm sunlight to dance in the open.",
	},

	thirdParty: {
		cardmarket: 284185,
		tcgplayer: 100616
	}
}

export default card
