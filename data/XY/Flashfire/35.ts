import { Card } from '../../../interfaces'
import Set from '../Flashfire'

const card: Card = {
	name: {
		en: "Magnezone EX",
		fr: "Magnézone EX",
		es: "Magnezone EX",
		it: "Magnezone EX",
		pt: "Magnezone EX",
		de: "Magnezone EX"
	},

	illustrator: "Eske Yoshinob",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		462,
	],

	hp: 180,

	types: [
		"Lightning",
	],

	suffix: "EX",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Electro Ball",
				fr: "Boule Élek",
				es: "Bola Voltio",
				it: "Energisfera",
				pt: "Bola Elétrica",
				de: "Elektroball"
			},

			damage: 40,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Lightning",
			],
			name: {
				en: "Dual Bullet",
				fr: "Double Décharge",
				es: "Bala Doble",
				it: "Bidardo",
				pt: "Projétil Duplo",
				de: "Zweifachgeschoss"
			},
			effect: {
				en: "This attack does 50 damage to 2 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 50 dégâts à 2 des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				es: "Este ataque hace 50 puntos de daño a 2 de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				it: "Questo attacco infligge 50 danni a due dei Pokémon del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				pt: "Este ataque causa 50 de danos a 2 dos Pokémon de seu oponente. (Não aplique Fraqueza e Resistência a Pokémon no Banco.)",
				de: "Dieser Angriff fügt 2 Pokémon deines Gegners 50 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 3,
	stage: "Basic",

	thirdParty: {
		cardmarket: 281518,
		tcgplayer: 91168
	}
}

export default card
