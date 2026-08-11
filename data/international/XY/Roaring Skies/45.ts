import { Card } from 'models/database/card'
import Set from '../Roaring Skies'

const card: Card = {
	name: {
		'en-us': "Togekiss",
		'fr-fr': "Togekiss",
		'es-es': "Togekiss",
		'it-it': "Togekiss",
		'pt-br': "Togekiss",
		'de-de': "Togekiss"
	},

	illustrator: "Sumiyoshi Kizuki",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		468,
	],

	hp: 140,

	types: [
		"Fairy",
	],

	evolveFrom: {
		'en-us': "Togetic",
		'fr-fr': "Togetic",
		'es-es': "Togetic",
		'it-it': "Togetic",
		'pt-br': "Togetic",
		'de-de': "Togetic"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Powerful Slap",
				'fr-fr': "Grosse Baffe",
				'es-es': "Tremendo Bofetón",
				'it-it': "Schiaffettone",
				'pt-br': "Tapa Poderoso",
				'de-de': "Kraftklatscher"
			},
			effect: {
				'en-us': "Flip a coin for each Energy attached to this Pokémon. This attack does 50 damage times the number of heads.",
				'fr-fr': "Lancez une pièce pour chaque Énergie attachée à ce Pokémon. Cette attaque inflige 50 dégâts multipliés par le nombre de côtés face.",
				'es-es': "Lanza 1 moneda por cada Energía unida a este Pokémon. Este ataque hace 50 puntos de daño por cada cara.",
				'it-it': "Lancia una moneta per ogni Energia assegnata a questo Pokémon. Questo attacco infligge 50 danni ogni volta che esce testa.",
				'pt-br': "Jogue uma moeda para cada Energia ligada a este Pokémon. Este ataque causa 50 de danos vezes o número de caras.",
				'de-de': "Wirf für jede an dieses Pokémon angelegte Energie 1 Münze. Dieser Angriff fügt 50 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "50×",

		},
		{
			cost: [
				"Fairy",
				"Fairy",
				"Colorless",
			],
			name: {
				'en-us': "Aura Sphere",
				'fr-fr': "Aurasphère",
				'es-es': "Esfera Aural",
				'it-it': "Forzasfera",
				'pt-br': "Aura Esférica",
				'de-de': "Aurasphäre"
			},
			effect: {
				'en-us': "This attack does 20 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Cette attaque inflige 20 dégâts à l'un des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				'es-es': "Este ataque hace 20 puntos de daño a 1 de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				'it-it': "Questo attacco infligge 20 danni a uno dei Pokémon nella panchina del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				'pt-br': "Este ataque causa 20 de danos a 1 dos Pokémon no Banco do seu oponente. (Não aplique Fraqueza e Resistência a Pokémon no Banco.)",
				'de-de': "Dieser Angriff fügt 1 Pokémon auf der Bank deines Gegners 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It shares many blessings with people who respect one another's rights and avoid needless strife.",
	},

	thirdParty: {
		cardmarket: 282713,
		tcgplayer: 98081
	}
}

export default card
