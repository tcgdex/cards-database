import { Card } from 'models/database/card'
import Set from '../Flashfire'

const card: Card = {
	name: {
		'en-us': "Magnezone EX",
		'fr-fr': "Magnézone EX",
		'es-es': "Magnezone EX",
		'it-it': "Magnezone EX",
		'pt-br': "Magnezone EX",
		'de-de': "Magnezone EX"
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
				'en-us': "Electro Ball",
				'fr-fr': "Boule Élek",
				'es-es': "Bola Voltio",
				'it-it': "Energisfera",
				'pt-br': "Bola Elétrica",
				'de-de': "Elektroball"
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
				'en-us': "Dual Bullet",
				'fr-fr': "Double Décharge",
				'es-es': "Bala Doble",
				'it-it': "Bidardo",
				'pt-br': "Projétil Duplo",
				'de-de': "Zweifachgeschoss"
			},
			effect: {
				'en-us': "This attack does 50 damage to 2 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Cette attaque inflige 50 dégâts à 2 des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				'es-es': "Este ataque hace 50 puntos de daño a 2 de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				'it-it': "Questo attacco infligge 50 danni a due dei Pokémon del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				'pt-br': "Este ataque causa 50 de danos a 2 dos Pokémon de seu oponente. (Não aplique Fraqueza e Resistência a Pokémon no Banco.)",
				'de-de': "Dieser Angriff fügt 2 Pokémon deines Gegners 50 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
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
