import { Card } from 'models/database/card'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		'en-us': "Hitmonlee",
		'fr-fr': "Kicklee",
		'es-es': "Hitmonlee",
		'it-it': "Hitmonlee",
		'pt-br': "Hitmonlee",
		'de-de': "Kicklee"
	},

	illustrator: "Hitoshi Ariga",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		106,
	],

	hp: 90,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Stretch Kick",
				'fr-fr': "Allonge",
				'es-es': "Patada Amplia",
				'it-it': "Calciallungo",
				'pt-br': "Chute Esticado",
				'de-de': "Streckkick"
			},
			effect: {
				'en-us': "This attack does 30 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Cette attaque inflige 30 dégâts à l'un des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				'es-es': "Este ataque hace 30 puntos de daño a 1 de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				'it-it': "Questo attacco infligge 30 danni a uno dei Pokémon nella panchina del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				'pt-br': "Esse ataque causa 30 de danos a 1 dos Pokémon no Banco do seu oponente. (Não aplique Fraqueza e Resistência a Pokémon no Banco.)",
				'de-de': "Dieser Angriff fügt 1 Pokémon auf der Bank deines Gegners 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				'en-us': "Spiral Kick",
				'fr-fr': "Coup'd Pied en Spirale",
				'es-es': "Patada Espiral",
				'it-it': "Spiralcalcio",
				'pt-br': "Chute Espiral",
				'de-de': "Drehtritt"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "The legs freely contract and stretch. The stretchy legs allow it to hit a distant foe with a rising kick.",
	},

	thirdParty: {
		cardmarket: 281711,
		tcgplayer: 92224
	}
}

export default card
