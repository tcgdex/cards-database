import { Card } from 'models/database/card'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		'en-us': "Chesnaught BREAK",
		'fr-fr': "Blindépique TURBO",
		'es-es': "Chesnaught TURBO",
		'it-it': "Chesnaught TURBO",
		'pt-br': "Chesnaught TURBO",
		'de-de': "Brigaron-TURBO"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		652,
	],

	hp: 190,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Chesnaught",
		'fr-fr': "Blindépique",
		'es-es': "Chesnaught",
		'it-it': "Chesnaught",
		'pt-br': "Chesnaught",
		'de-de': "Brigaron"
	},

	stage: "BREAK",

	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Tough Hammer",
				'fr-fr': "Marteau Solide",
				'es-es': "Martillo Duro",
				'it-it': "Martelduro",
				'pt-br': "Martelo Resistente",
				'de-de': "Schwerer Hammer"
			},
			effect: {
				'en-us': "This Pokémon does 30 damage to itself. This attack does 30 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Ce Pokémon s'inflige 30 dégâts. Cette attaque inflige 30 dégâts à l'un des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				'es-es': "Este Pokémon se hace 30 puntos de daño a sí mismo. Este ataque hace 30 puntos de daño a 1 de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				'it-it': "Questo Pokémon infligge 30 danni a se stesso. Questo attacco infligge 30 danni a uno dei Pokémon nella panchina del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				'pt-br': "Este Pokémon causa 30 de danos a si mesmo. Este ataque causa 30 de danos a 1 dos Pokémon no Banco do seu oponente. (Não aplique Fraqueza e Resistência a Pokémon no Banco.)",
				'de-de': "Dieses Pokémon fügt sich selbst 30 Schadenspunkte zu. Dieser Angriff fügt 1 Pokémon auf der Bank deines Gegners 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 160,

		}
	],

	retreat: 0,

	thirdParty: {
		cardmarket: 286258,
		tcgplayer: 107131
	}
}

export default card
