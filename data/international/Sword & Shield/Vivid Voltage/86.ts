import { Card } from 'models/database/card'
import Set from '../Vivid Voltage'

const card: Card = {
	dexId: [231],

	name: {
		'en-us': "Phanpy",
		'fr-fr': "Phanpy",
		'es-es': "Phanpy",
		'it-it': "Phanpy",
		'pt-br': "Phanpy",
		'de-de': "Phanpy"
	},

	illustrator: "Shibuzoh.",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	hp: 70,

	types: [
		"Fighting",
	],

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Stampede",
				'fr-fr': "Ruée",
				'es-es': "Estampida",
				'it-it': "Fuggi Fuggi",
				'pt-br': "Estouro",
				'de-de': "Zertrampeln"
			},

			damage: 10,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Strike Back",
				'fr-fr': "Vengeur",
				'es-es': "Contraimpacto",
				'it-it': "Risposta",
				'pt-br': "Revidar",
				'de-de': "Kontern"
			},
			effect: {
				'en-us': "This attack does 30 damage for each damage counter on this Pokémon.",
				'fr-fr': "Cette attaque inflige 30 dégâts pour chaque marqueur de dégâts sur ce Pokémon.",
				'es-es': "Este ataque hace 30 puntos de daño por cada contador de daño en este Pokémon.",
				'it-it': "Questo attacco infligge 30 danni per ogni segnalino danno presente su questo Pokémon.",
				'pt-br': "Este ataque causa 30 pontos de dano para cada contador de dano neste Pokémon.",
				'de-de': "Diese Attacke fügt für jede Schadensmarke auf diesem Pokémon 30 Schadenspunkte zu."
			},
			damage: "30×",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,
	regulationMark: "D",


	stage: "Basic",

	description: {
		'en-us': "It is strong despite its compact size. It can easily pick up and carry an adult human on its back."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 511850,
				tcgplayer: 226517
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 511850,
				tcgplayer: 226517
			}
		},
	],
}

export default card
