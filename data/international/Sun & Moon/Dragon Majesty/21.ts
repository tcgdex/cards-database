import { Card } from 'models/database/card'
import Set from '../Dragon Majesty'

const card: Card = {
	name: {
		'en-us': "Lapras",
		'fr-fr': "Lokhlass",
		'es-es': "Lapras",
		'it-it': "Lapras",
		'pt-br': "Lapras",
		'de-de': "Lapras"
	},

	illustrator: "Saya Tsuruta",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		131,
	],

	hp: 120,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Aqua Bullet",
				'fr-fr': "Aquaballe",
				'es-es': "Bala Agua",
				'it-it': "Idrodardo",
				'pt-br': "Projétil de Água",
				'de-de': "Aquageschoss"
			},
			effect: {
				'en-us': "This attack does 20 damage to 1 of your opponent’s Benched Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Cette attaque inflige 20 dégâts à l’un des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				'es-es': "Este ataque hace 20 puntos de daño a 1 de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				'it-it': "Questo attacco infligge 20 danni a uno dei Pokémon nella panchina del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				'pt-br': "Este ataque causa 20 pontos de dano a 1 dos Pokémon no Banco do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
				'de-de': "Diese Attacke fügt 1 Pokémon auf der Bank deines Gegners 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
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
				'en-us': "This attack does 10 more damage times the amount of Water Energy attached to this Pokémon.",
				'fr-fr': "Cette attaque inflige 10 dégâts supplémentaires multipliés par le nombre d’Énergies Water attachées à ce Pokémon.",
				'es-es': "Este ataque hace 10 puntos de daño más por cada Energía Water unida a este Pokémon.",
				'it-it': "Questo attacco infligge 10 danni in più per ogni Energia Water assegnata a questo Pokémon.",
				'pt-br': "Este ataque causa 10 pontos de dano a mais vezes a quantidade de Energia Water ligada a este Pokémon.",
				'de-de': "Diese Attacke fügt 10 Schadenspunkte mehr mal der Anzahl der an dieses Pokémon angelegten Water-Energien zu."
			},
			damage: "70+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "These Pokémon were once near extinction due to poaching. Following protective regulations, there is now an overabundance of them.",
	},

	thirdParty: {
		cardmarket: 363493,
		tcgplayer: 175383
	}
}

export default card
