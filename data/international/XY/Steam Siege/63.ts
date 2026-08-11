import { Card } from 'models/database/card'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		'en-us': "Pawniard",
		'fr-fr': "Scalpion",
		'es-es': "Pawniard",
		'it-it': "Pawniard",
		'pt-br': "Pawniard",
		'de-de': "Gladiantri"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		624,
	],

	hp: 60,

	types: [
		"Darkness",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Charge Order",
				'fr-fr': "Ordre de Charge",
				'es-es': "Orden de Carga",
				'it-it': "Alla Carica",
				'pt-br': "Ordem de Carga",
				'de-de': "Marschbefehl"
			},
			effect: {
				'en-us': "This attack does 10 damage times the number of your Pawniard.",
				'fr-fr': "Cette attaque inflige 10 dégâts multipliés par le nombre de vos Scalpion.",
				'es-es': "Este ataque hace 10 puntos de daño por cada uno de tus Pawniard.",
				'it-it': "Questo attacco infligge 10 danni per ogni Pawniard che hai.",
				'pt-br': "Este ataque causa 10 de danos vezes o número de seus Pawniard.",
				'de-de': "Dieser Angriff fügt 10 Schadenspunkte mal der Anzahl deiner Gladiantri zu."
			},
			damage: "10×",

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
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Ignoring their injuries, groups attack by sinking the blades that cover their bodies into their prey.",
	},

	thirdParty: {
		cardmarket: 291633,
		tcgplayer: 121193
	}
}

export default card
