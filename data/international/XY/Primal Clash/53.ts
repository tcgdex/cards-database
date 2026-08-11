import { Card } from 'models/database/card'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		'en-us': "Kyogre",
		'fr-fr': "Kyogre",
		'es-es': "Kyogre",
		'it-it': "Kyogre",
		'pt-br': "Kyogre",
		'de-de': "Kyogre"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		382,
	],

	hp: 130,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Spring Tides",
				'fr-fr': "Marée Naissante",
				'es-es': "Marea Primaveral",
				'it-it': "Correnti Primaverili",
				'pt-br': "Marés da Primavera",
				'de-de': "Frühlingstiden"
			},
			effect: {
				'en-us': "Flip a coin until you get tails. This attack does 30 damage times the number of heads.",
				'fr-fr': "Lancez une pièce jusqu'à ce que vous obteniez un côté pile. Cette attaque inflige 30 dégâts multipliés par le nombre de côtés face.",
				'es-es': "Lanza 1 moneda hasta que salga cruz. Este ataque hace 30 puntos de daño por cada cara.",
				'it-it': "Lancia una moneta finché non esce croce. Questo attacco infligge 30 danni ogni volta che esce testa.",
				'pt-br': "Jogue uma moeda até sair coroa. Esse ataque causa 30 de danos vezes o número de caras.",
				'de-de': "Wirf so lang 1 Münze, bis zum ersten Mal das Ergebnis \"Zahl\" kommt. Dieser Angriff fügt 30 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "30×",

		},
		{
			cost: [
				"Water",
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Ocean Cyclone",
				'fr-fr': "Cyclone Océanique",
				'es-es': "Ciclón Oceánico",
				'it-it': "Ciclone Oceanico",
				'pt-br': "Ciclone Oceânico",
				'de-de': "Meeressturm"
			},
			effect: {
				'en-us': "This attack does 10 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Cette attaque inflige 10 dégâts à chacun des Pokémon de Banc de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				'es-es': "Este ataque hace 10 puntos de daño a cada uno de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				'it-it': "Questo attacco infligge 10 danni a ciascun Pokémon nella panchina del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				'pt-br': "Este ataque causa 10 de danos a cada Pokémon de seu oponente no Banco. (Não aplique Fraqueza e Resistência a Pokémon no Banco.)",
				'de-de': "Dieser Angriff fügt jedem Pokémon auf der Bank deines Gegners 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 4,

	description: {
		'en-us': "A mythical Pokémon said to have swelled the seas with rain and tidal waves. It battled with Groudon.",
	},

	thirdParty: {
		cardmarket: 273584,
		tcgplayer: 95951
	}
}

export default card
