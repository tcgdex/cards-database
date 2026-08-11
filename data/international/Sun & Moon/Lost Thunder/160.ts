import { Card } from 'models/database/card'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		'en-us': "Ho-Oh",
		'fr-fr': "Ho-Oh",
		'es-es': "Ho-Oh",
		'it-it': "Ho-Oh",
		'pt-br': "Ho-Oh",
		'de-de': "Ho-Oh"
	},

	illustrator: "Aya Kusube",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		250,
	],

	hp: 130,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Rainbow Burn",
				'fr-fr': "Brûlure Arc-en-Ciel",
				'es-es': "Ardor Arcoíris",
				'it-it': "Fiammabaleno",
				'pt-br': "Queimadura Arco-íris",
				'de-de': "Regenbogenfeuer"
			},
			effect: {
				'en-us': "This attack does 30 more damage for each type of basic Energy attached to this Pokémon.",
				'fr-fr': "Cette attaque inflige 30 dégâts supplémentaires pour chaque type d’Énergie de base attaché à ce Pokémon.",
				'es-es': "Este ataque hace 30 puntos de daño más por cada tipo de Energía Básica diferente unida a este Pokémon.",
				'it-it': "Questo attacco infligge 30 danni in più per ogni tipo di Energia base assegnata a questo Pokémon.",
				'pt-br': "Este ataque causa 30 pontos de dano a mais para cada tipo de Energia básica ligada a este Pokémon.",
				'de-de': "Diese Attacke fügt 30 Schadenspunkte mehr mal der Anzahl der an dieses Pokémon angelegten verschiedenen Basis-Energietypen zu."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It will reveal itself before a pure-hearted Trainer by shining its bright, rainbow-colored wings.",
	},

	thirdParty: {
		cardmarket: 365796,
		tcgplayer: 178983
	}
}

export default card
