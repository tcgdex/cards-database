import { Card } from 'models/database/card'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		'en-us': "Rapidash",
		'fr-fr': "Galopa",
		'es-es': "Rapidash",
		'it-it': "Rapidash",
		'pt-br': "Rapidash",
		'de-de': "Gallopa"
	},

	illustrator: "Misa Tsutsui",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		78,
	],

	hp: 100,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Ponyta",
		'fr-fr': "Ponyta",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				'en-us': "Overrun",
				'fr-fr': "Dépassement",
				'es-es': "Rebasar",
				'it-it': "Oltrepassare",
				'pt-br': "Atropelar",
				'de-de': "Überrennen"
			},
			effect: {
				'en-us': "This attack does 30 damage to 1 of your opponent’s Benched Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Cette attaque inflige 30 dégâts à l’un des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				'es-es': "Este ataque hace 30 puntos de daño a 1 de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				'it-it': "Questo attacco infligge 30 danni a uno dei Pokémon nella panchina del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				'pt-br': "Este ataque causa 30 pontos de dano a 1 dos Pokémon no Banco do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
				'de-de': "Diese Attacke fügt 1 Pokémon auf der Bank deines Gegners 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 30,

		},
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Flame Tail",
				'fr-fr': "Queue de Flammes",
				'es-es': "Cola de Fuego",
				'it-it': "Codafiamma",
				'pt-br': "Cauda de Chamas",
				'de-de': "Flammenschweif"
			},

			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 0,

	description: {
		'en-us': "Very competitive, this Pokémon will chase anything that moves fast in the hopes of racing it.",
	},

	thirdParty: {
		cardmarket: 407769,
		tcgplayer: 201195
	}
}

export default card
