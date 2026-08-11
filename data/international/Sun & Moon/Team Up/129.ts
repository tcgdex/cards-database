import { Card } from 'models/database/card'
import Set from '../Team Up'

const card: Card = {
	name: {
		'en-us': "Tauros",
		'fr-fr': "Tauros",
		'es-es': "Tauros",
		'it-it': "Tauros",
		'pt-br': "Tauros",
		'de-de': "Tauros"
	},

	illustrator: "kodama",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		128,
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
			],
			name: {
				'en-us': "Raging Herd",
				'fr-fr': "Troupeau Enragé",
				'es-es': "Manada Furiosa",
				'it-it': "Mandria Infuriata",
				'pt-br': "Rebanho Devastador",
				'de-de': "Wütende Herde"
			},
			effect: {
				'en-us': "This attack does 10 more damage for each damage counter on all of your Tauros and Tauros-GX.",
				'fr-fr': "Cette attaque inflige 10 dégâts supplémentaires pour chaque marqueur de dégâts placé sur vos Tauros et Tauros-GX.",
				'es-es': "Este ataque hace 10 puntos de daño más por cada contador de daño en todos tus Tauros y Tauros-GX.",
				'it-it': "Questo attacco infligge 10 danni in più per ogni segnalino danno presente sui tuoi Tauros e Tauros-GX.",
				'pt-br': "Este ataque causa 10 pontos de dano a mais para cada contador de dano em todos os seus Tauros e Tauros-GX.",
				'de-de': "Diese Attacke fügt 10 Schadenspunkte mehr mal der Anzahl der Schadensmarken auf allen deinen Tauros und Tauros-GX zu."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "They live in groups. The one with the longest, thickest, and most-scarred horns is the boss of the herd.",
	},

	thirdParty: {
		cardmarket: 369056,
		tcgplayer: 183918
	}
}

export default card
