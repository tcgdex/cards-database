import { Card } from '../../../interfaces'
import Set from '../Roaring Skies'

const card: Card = {
	name: {
		en: "M Gallade EX",
		fr: "M-Gallame EX",
		es: "M-Gallade EX",
		it: "M Gallade EX",
		pt: "M-Gallade EX",
		de: "M-Galagladi EX"
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
		en: "Gallade-EX",
		fr: "Gallame-EX",
		es: "Gallade-EX",
		it: "Gallade-EX",
		pt: "Gallade-EX",
		de: "Galagladi-EX"
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
				en: "Unwavering Blade",
				fr: "Lame Impitoyable",
				es: "Filo Firme",
				it: "Lamasalda",
				pt: "Lâmina Inabalável",
				de: "Standhafte Klinge"
			},
			effect: {
				en: "This attack does 30 damage to each of your opponent's Benched Pokémon that has any damage counters on it. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 30 dégâts à chacun des Pokémon de Banc de votre adversaire ayant au moins 1 marqueur de dégâts. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				es: "Este ataque hace 30 puntos de daño a cada uno de los Pokémon en Banca de tu rival que tenga algún contador de daño sobre él. (No apliques Debilidad y Resistencia para los Pokémon en Banca).",
				it: "Questo attacco infligge 30 danni a ciascuno dei Pokémon nella panchina del tuo avversario che abbia dei segnalini danno. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				pt: "Este ataque causa 30 de danos a cada um dos Pokémon no Banco do seu oponente que já possui contadores de danos. (Não aplique Fraqueza e Resistência a Pokémon no Banco.)",
				de: "Dieser Angriff fügt jedem Pokémon auf der Bank deines Gegners, auf dem bereits mindestens 1 Schadensmarke liegt, 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
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
		tcgplayer: 98136
	}
}

export default card
