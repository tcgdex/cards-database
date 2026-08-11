import { Card } from 'models/database/card'
import Set from '../Phantom Forces'

const card: Card = {
	name: {
		'en-us': "Boldore",
		'fr-fr': "Géolithe",
		'es-es': "Boldore",
		'it-it': "Boldore",
		'pt-br': "Boldore",
		'de-de': "Sedimantur"
	},

	illustrator: "Midori Harada",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		525,
	],

	hp: 90,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Roggenrola",
		'fr-fr': "Nodulithe",
		'es-es': "Roggenrola",
		'it-it': "Roggenrola",
		'pt-br': "Roggenrola",
		'de-de': "Kiesling"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Core Heal",
				'fr-fr': "Soin Viscéral",
				'es-es': "Cura Núcleo",
				'it-it': "Nucleocura",
				'pt-br': "Cura Fundamental",
				'de-de': "Kernheiler"
			},
			effect: {
				'en-us': "Discard a Fighting Energy attached to this Pokémon and heal 50 damage from it.",
				'fr-fr': "Défaussez une Énergie Fighting attachée à ce Pokémon et soignez 50 dégâts à ce Pokémon.",
				'es-es': "Descarta 1 Energía Fighting unida a este Pokémon y cúrale 50 puntos de daño.",
				'it-it': "Scarta un'Energia Fighting assegnata a questo Pokémon e curalo da 50 danni.",
				'pt-br': "Descarte uma Energia Fighting ligada a este Pokémon e cure 50 de danos desse Pokémon.",
				'de-de': "Lege 1 an dieses Pokémon angelegte Fighting-Energie auf deinen Ablagestapel und heile 50 Schadenspunkte bei diesem Pokémon."
			},

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Fighting",
			],
			name: {
				'en-us': "Power Gem",
				'fr-fr': "Rayon Gemme",
				'es-es': "Joya de Luz",
				'it-it': "Gemmoforza",
				'pt-br': "Gema Poderosa",
				'de-de': "Juwelenkraft"
			},

			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "Because its energy was too great to be contained, the energy leaked and formed orange crystals.",
	},

	thirdParty: {
		cardmarket: 281855,
		tcgplayer: 94507
	}
}

export default card
