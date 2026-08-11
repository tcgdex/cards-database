import { Card } from 'models/database/card'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		'en-us': "Swampert",
		'fr-fr': "Laggron",
		'es-es': "Swampert",
		'it-it': "Swampert",
		'pt-br': "Swampert",
		'de-de': "Sumpex"
	},

	illustrator: "Shigenori Negishi",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		260,
	],

	hp: 150,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Marshtomp",
		'fr-fr': "Flobio",
		'es-es': "Marshtomp",
		'it-it': "Marshtomp",
		'pt-br': "Marshtomp",
		'de-de': "Moorabbel"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Water Arrow",
				'fr-fr': "Flèche d'Eau",
				'es-es': "Flecha de Agua",
				'it-it': "Idrofreccia",
				'pt-br': "Flecha d'Água",
				'de-de': "Wasserpfeil"
			},
			effect: {
				'en-us': "This attack does 60 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Cette attaque inflige 60 dégâts à l'un des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				'es-es': "Este ataque hace 60 puntos de daño a 1 de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				'it-it': "Questo attacco infligge 60 danni a uno dei Pokémon del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				'pt-br': "Este ataque causa 60 de danos a 1 dos Pokémon de seu oponente. (Não aplique Fraqueza e Resistência a Pokémon no Banco.)",
				'de-de': "Dieser Angriff fügt 1 Pokémon deines Gegners 60 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Waterfall",
				'fr-fr': "Cascade",
				'es-es': "Cascada",
				'it-it': "Cascata",
				'pt-br': "Cachoeira",
				'de-de': "Kaskade"
			},

			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "It can swim while towing a large ship. It bashes down foes with a swing of its thick arms.",
	},

	thirdParty: {
		cardmarket: 273566,
		tcgplayer: 95927
	}
}

export default card
