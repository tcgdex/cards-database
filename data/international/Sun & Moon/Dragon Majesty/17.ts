import { Card } from 'models/database/card'
import Set from '../Dragon Majesty'

const card: Card = {
	name: {
		'en-us': "Seadra",
		'fr-fr': "Hypocéan",
		'es-es': "Seadra",
		'it-it': "Seadra",
		'pt-br': "Seadra",
		'de-de': "Seemon"
	},

	illustrator: "Yumi",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		117,
	],

	hp: 90,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Horsea",
		'fr-fr': "Hypotrempe",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Hydro Pump",
				'fr-fr': "Hydrocanon",
				'es-es': "Hidrobomba",
				'it-it': "Idropompa",
				'pt-br': "Jato d’Água",
				'de-de': "Hydropumpe"
			},
			effect: {
				'en-us': "This attack does 20 more damage times the amount of Water Energy attached to this Pokémon.",
				'fr-fr': "Cette attaque inflige 20 dégâts supplémentaires multipliés par le nombre d’Énergies Water attachées à ce Pokémon.",
				'es-es': "Este ataque hace 20 puntos de daño más por cada Energía Water unida a este Pokémon.",
				'it-it': "Questo attacco infligge 20 danni in più per ogni Energia Water assegnata a questo Pokémon.",
				'pt-br': "Este ataque causa 20 pontos de dano a mais vezes a quantidade de Energia Water ligada a este Pokémon.",
				'de-de': "Diese Attacke fügt 20 Schadenspunkte mehr mal der Anzahl der an dieses Pokémon angelegten Water-Energien zu."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It is capable of swimming backwards by rapidly flapping its winglike pectoral fins and stout tail.",
	},

	thirdParty: {
		cardmarket: 363489,
		tcgplayer: 175379
	}
}

export default card
