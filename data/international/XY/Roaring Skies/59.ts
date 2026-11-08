import { Card } from 'models/database/card'
import Set from '../Roaring Skies'

const card: Card = {
	name: {
		'en-us': "M Latios EX",
		'fr-fr': "M-Latios EX",
		'es-es': "M-Latios EX",
		'it-it': "M Latios EX",
		'pt-br': "M-Latios EX",
		'de-de': "M-Latios EX"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		381,
	],

	hp: 220,

	types: [
		"Dragon",
	],

	evolveFrom: {
		'en-us': "Latios-EX",
		'fr-fr': "Latios-EX",
		'es-es': "Latios-EX",
		'it-it': "Latios-EX",
		'pt-br': "Latios-EX",
		'de-de': "Latios-EX"
	},

	stage: "MEGA",

	attacks: [
		{
			cost: [
				"Water",
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Sonic Ace",
				'fr-fr': "Prodige Sonique",
				'es-es': "As Sónico",
				'it-it': "Assosonico",
				'pt-br': "Ás Sônico",
				'de-de': "Schallexperte"
			},
			effect: {
				'en-us': "Discard 2 Energy attached to this Pokémon. This attack does 120 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Défaussez 2 Énergies attachées à ce Pokémon. Cette attaque inflige 120 dégâts à l'un des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				'es-es': "Descarta 2 Energías unidas a este Pokémon. Este ataque hace 120 puntos de daño a 1 de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				'it-it': "Scarta due Energie assegnate a questo Pokémon. Questo attacco infligge 120 danni a uno dei Pokémon del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				'pt-br': "Descarte 2 Energias ligadas a este Pokémon. Este ataque causa 120 de danos a 1 dos Pokémon de seu oponente. (Não aplique Fraqueza e Resistência a Pokémon no Banco.)",
				'de-de': "Lege 2 an dieses Pokémon angelegte Energien auf deinen Ablagestapel. Dieser Angriff fügt 1 Pokémon deines Gegners 120 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		}
	],

	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 0,
	suffix: "EX",

	thirdParty: {
		tcgplayer: 98095
	}
}

export default card
