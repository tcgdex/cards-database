import { Card } from 'models/database/card'
import Set from '../Roaring Skies'

const card: Card = {
	name: {
		'en-us': "M Gallade EX",
		'fr-fr': "M-Gallame EX",
		'es-es': "M-Gallade EX",
		'it-it': "M Gallade EX",
		'pt-br': "M-Gallade EX",
		'de-de': "M-Galagladi EX"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		475,
	],

	hp: 220,

	types: [
		"Psychic",
	],

	evolveFrom: {
		'en-us': "Gallade-EX",
		'fr-fr': "Gallame-EX",
		'es-es': "Gallade-EX",
		'it-it': "Gallade-EX",
		'pt-br': "Gallade-EX",
		'de-de': "Galagladi-EX"
	},

	stage: "MEGA",

	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Unwavering Blade",
				'fr-fr': "Lame Impitoyable",
				'es-es': "Filo Firme",
				'it-it': "Lamasalda",
				'pt-br': "Lâmina Inabalável",
				'de-de': "Standhafte Klinge"
			},
			effect: {
				'en-us': "This attack does 30 damage to each of your opponent's Benched Pokémon that has any damage counters on it. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Cette attaque inflige 30 dégâts à chacun des Pokémon de Banc de votre adversaire ayant au moins 1 marqueur de dégâts. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				'es-es': "Este ataque hace 30 puntos de daño a cada uno de los Pokémon en Banca de tu rival que tenga algún contador de daño sobre él. (No apliques Debilidad y Resistencia para los Pokémon en Banca).",
				'it-it': "Questo attacco infligge 30 danni a ciascuno dei Pokémon nella panchina del tuo avversario che abbia dei segnalini danno. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				'pt-br': "Este ataque causa 30 de danos a cada um dos Pokémon no Banco do seu oponente que já possui contadores de danos. (Não aplique Fraqueza e Resistência a Pokémon no Banco.)",
				'de-de': "Dieser Angriff fügt jedem Pokémon auf der Bank deines Gegners, auf dem bereits mindestens 1 Schadensmarke liegt, 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 110,

		}
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,
	suffix: "EX",

	thirdParty: {
		tcgplayer: 98071
	}
}

export default card
