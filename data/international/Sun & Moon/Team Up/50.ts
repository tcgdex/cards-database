import { Card } from 'models/database/card'
import Set from '../Team Up'

const card: Card = {
	name: {
		'en-us': "Heliolisk",
		'fr-fr': "Iguolta",
		'es-es': "Heliolisk",
		'it-it': "Heliolisk",
		'pt-br': "Heliolisk",
		'de-de': "Elezard"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		695,
	],

	hp: 100,

	types: [
		"Lightning",
	],

	evolveFrom: {
		'en-us': "Helioptile",
		'fr-fr': "Galvaran",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Random Spark",
				'fr-fr': "Étincelle Surprise",
				'es-es': "Chispa al Azar",
				'it-it': "Scintilla Casuale",
				'pt-br': "Fagulha Aleatória",
				'de-de': "Zufälliger Funke"
			},
			effect: {
				'en-us': "This attack does 30 damage to 1 of your opponent’s Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Cette attaque inflige 30 dégâts à l’un des Pokémon de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				'es-es': "Este ataque hace 30 puntos de daño a 1 de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				'it-it': "Questo attacco infligge 30 danni a uno dei Pokémon del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				'pt-br': "Este ataque causa 30 pontos de dano a 1 dos Pokémon do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
				'de-de': "Diese Attacke fügt 1 Pokémon deines Gegners 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Volt Switch",
				'fr-fr': "Change Éclair",
				'es-es': "Voltiocambio",
				'it-it': "Invertivolt",
				'pt-br': "Troca Elétrica",
				'de-de': "Voltwechsel"
			},
			effect: {
				'en-us': "Switch this Pokémon with 1 of your Benched Lightning Pokémon.",
				'fr-fr': "Échangez ce Pokémon avec l’un de vos Pokémon Lightning de Banc.",
				'es-es': "Cambia este Pokémon por 1 de tus Pokémon Lightning en Banca.",
				'it-it': "Scambia questo Pokémon con un Pokémon Lightning della tua panchina.",
				'pt-br': "Troque este Pokémon por 1 dos seus Pokémon Lightning no Banco.",
				'de-de': "Tausche dieses Pokémon gegen 1 Lightning-Pokémon auf deiner Bank aus."
			},
			damage: 90,

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

	retreat: 1,

	description: {
		'en-us': "It stimulates its muscles with electricity, boosting the strength in its legs and enabling it to run 100 yards in five seconds.",
	},

	thirdParty: {
		cardmarket: 368981,
		tcgplayer: 183825
	}
}

export default card
