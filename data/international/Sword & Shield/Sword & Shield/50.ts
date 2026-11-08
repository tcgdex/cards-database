import { Card } from 'models/database/card'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		'en-us': "Lapras VMAX",
		'fr-fr': "Lokhlass VMAX",
		'es-es': "Lapras VMAX",
		'it-it': "Lapras VMAX",
		'pt-br': "Lapras VMAX",
		'de-de': "Lapras VMAX"
	},

	illustrator: "5ban Graphics",
	rarity: "Holo Rare VMAX",
	category: "Pokemon",
	set: Set,

	dexId: [
		131,
	],

	hp: 320,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Lapras V",
		'fr-fr': "Lokhlass-V",
		'es-es': "Lapras V",
		'it-it': "Lapras V",
		'pt-br': "Lapras V",
		'de-de': "Lapras V"
	},

	stage: "VMAX",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "G-Max Pump",
				'fr-fr': "Pompe G-Max",
				'es-es': "Gigabomba",
				'it-it': "Gigapompa",
				'pt-br': "Jato G-Max",
				'de-de': "Giga-Pumpe"
			},
			effect: {
				'en-us': "This attack does 30 more damage for each Water Energy attached to this Pokémon.",
				'fr-fr': "Cette attaque inflige 30 dégâts supplémentaires pour chaque Énergie Water attachée à ce Pokémon.",
				'es-es': "Este ataque hace 30 puntos de daño más por cada Energía Water unida a este Pokémon.",
				'it-it': "Questo attacco infligge 30 danni in più per ogni Energia Water assegnata a questo Pokémon.",
				'pt-br': "Este ataque causa 30 pontos de dano a mais para cada Energia Water ligada a este Pokémon.",
				'de-de': "Diese Attacke fügt für jede an dieses Pokémon angelegte Water-Energie 30 Schadenspunkte mehr zu."
			},
			damage: "90+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 3,
	regulationMark: "D",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 427241,
		tcgplayer: 206049
	}
}

export default card
