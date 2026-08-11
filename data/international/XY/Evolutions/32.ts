import { Card } from '../../../interfaces'
import Set from '../Evolutions'

const card: Card = {
	name: {
		en: "Starmie BREAK",
		fr: "Staross TURBO",
		es: "Starmie TURBO",
		it: "Starmie TURBO",
		pt: "Starmie TURBO",
		de: "Starmie-TURBO"
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
		en: "Starmie",
		fr: "Staross",
		es: "Starmie",
		it: "Starmie",
		pt: "Starmie",
		de: "Starmie"
	},

	stage: "BREAK",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Break Star",
				fr: "Étoile Turbo",
				es: "Estrella Turbo",
				it: "Turbostella",
				pt: "Estrela Turbo",
				de: "Turbo-Stern"
			},
			effect: {
				en: "This attack does 100 damage to each of your opponent's Pokémon BREAK. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 100 dégâts à chacun des Pokémon TURBO de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				es: "Este ataque hace 100 puntos de daño a cada uno de los Pokémon TURBO de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				it: "Questo attacco infligge 100 danni a ciascuno dei Pokémon TURBO del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				pt: "Este ataque causa 100 de danos a cada um dos Pokémon TURBO do seu oponente. (Não aplique Fraqueza e Resistência a Pokémon no Banco.)",
				de: "Dieser Angriff fügt jedem Pokémon-TURBO deines Gegners 100 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
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
