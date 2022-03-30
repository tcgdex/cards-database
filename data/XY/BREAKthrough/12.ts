import { Card } from '../../../interfaces'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		en: "Chesnaught BREAK",
		fr: "Blindépique TURBO",
		es: "Chesnaught TURBO",
		it: "Chesnaught TURBO",
		pt: "Chesnaught TURBO",
		de: "Brigaron-TURBO"
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
		en: "Chesnaught",
		fr: "Blindépique",
		es: "Chesnaught",
		it: "Chesnaught",
		pt: "Chesnaught",
		de: "Brigaron"
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
				en: "Tough Hammer",
				fr: "Marteau Solide",
				es: "Martillo Duro",
				it: "Martelduro",
				pt: "Martelo Resistente",
				de: "Schwerer Hammer"
			},
			effect: {
				en: "This Pokémon does 30 damage to itself. This attack does 30 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Ce Pokémon s'inflige 30 dégâts. Cette attaque inflige 30 dégâts à l'un des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				es: "Este Pokémon se hace 30 puntos de daño a sí mismo. Este ataque hace 30 puntos de daño a 1 de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				it: "Questo Pokémon infligge 30 danni a se stesso. Questo attacco infligge 30 danni a uno dei Pokémon nella panchina del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				pt: "Este Pokémon causa 30 de danos a si mesmo. Este ataque causa 30 de danos a 1 dos Pokémon no Banco do seu oponente. (Não aplique Fraqueza e Resistência a Pokémon no Banco.)",
				de: "Dieses Pokémon fügt sich selbst 30 Schadenspunkte zu. Dieser Angriff fügt 1 Pokémon auf der Bank deines Gegners 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 160,

		}
	],

	retreat: 0
}

export default card
