import { Card } from 'models/database/card'
import Set from '../Evolutions'

const card: Card = {
	name: {
		'en-us': "Starmie BREAK",
		'fr-fr': "Staross TURBO",
		'es-es': "Starmie TURBO",
		'it-it': "Starmie TURBO",
		'pt-br': "Starmie TURBO",
		'de-de': "Starmie-TURBO"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		121,
	],

	hp: 130,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Starmie",
		'fr-fr': "Staross",
		'es-es': "Starmie",
		'it-it': "Starmie",
		'pt-br': "Starmie",
		'de-de': "Starmie"
	},

	stage: "BREAK",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Break Star",
				'fr-fr': "Étoile Turbo",
				'es-es': "Estrella Turbo",
				'it-it': "Turbostella",
				'pt-br': "Estrela Turbo",
				'de-de': "Turbo-Stern"
			},
			effect: {
				'en-us': "This attack does 100 damage to each of your opponent's Pokémon BREAK. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Cette attaque inflige 100 dégâts à chacun des Pokémon TURBO de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				'es-es': "Este ataque hace 100 puntos de daño a cada uno de los Pokémon TURBO de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				'it-it': "Questo attacco infligge 100 danni a ciascuno dei Pokémon TURBO del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				'pt-br': "Este ataque causa 100 de danos a cada um dos Pokémon TURBO do seu oponente. (Não aplique Fraqueza e Resistência a Pokémon no Banco.)",
				'de-de': "Dieser Angriff fügt jedem Pokémon-TURBO deines Gegners 100 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		}
	],

	retreat: 0,

	thirdParty: {
		cardmarket: 293389,
		tcgplayer: 124045
	}
}

export default card
