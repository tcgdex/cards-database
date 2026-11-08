import { Card } from 'models/database/card'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		'en-us': "Pinsir",
		'fr-fr': "Scarabrute",
		'es-es': "Pinsir",
		'it-it': "Pinsir",
		'pt-br': "Pinsir",
		'de-de': "Pinsir"
	},

	illustrator: "Satoshi Shirai",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		127,
	],

	hp: 100,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Overhead Throw",
				'fr-fr': "Soulève Corne",
				'es-es': "Lanzamiento Elevado",
				'it-it': "Lancindietro",
				'pt-br': "Arremessar por Cima",
				'de-de': "Überwerfer"
			},
			effect: {
				'en-us': "This attack does 20 damage to 1 of your Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Cette attaque inflige 20 dégâts à l'un de vos Pokémon de Banc. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				'es-es': "Este ataque hace 20 puntos de daño a 1 de tus Pokémon en Banca. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				'it-it': "Questo attacco infligge 20 danni a uno dei tuoi Pokémon in panchina. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				'pt-br': "Este ataque causa 20 de danos a 1 dos seus Pokémon no Banco. (Não aplique Fraqueza e Resistência a Pokémon no Banco.)",
				'de-de': "Dieser Angriff fügt 1 Pokémon auf deiner Bank 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 30,

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Heavy Suplex",
				'fr-fr': "Suplex Imposant",
				'es-es': "Suplex Pesado",
				'it-it': "Rovesciata Pesante",
				'pt-br': "Suplex Pesado",
				'de-de': "Wuchtiger Suplex"
			},
			effect: {
				'en-us': "This attack does 20 more damage for each Colorless in your opponent's Active Pokémon's Retreat Cost.",
				'fr-fr': "Cette attaque inflige 20 dégâts supplémentaires pour chaque Colorless dans le Coût de Retraite du Pokémon Actif de votre adversaire.",
				'es-es': "Este ataque hace 20 puntos de daño más por cada Colorless en el Coste de Retirada del Pokémon Activo de tu rival.",
				'it-it': "Questo attacco infligge 20 danni in più per ogni Colorless nel costo di ritirata del Pokémon attivo del tuo avversario.",
				'pt-br': "Este ataque causa 20 de danos adicionais para cada Colorless no Custo para Recuar do Pokémon Ativo do seu oponente.",
				'de-de': "Dieser Angriff fügt 20 weitere Schadenspunkte für jedes Colorless-Symbol in den Rückzugskosten des Aktiven Pokémon deines Gegners zu."
			},
			damage: "40+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It swings its long antlers wildly to attack. During cold periods, it hides deep in forests.",
	},

	thirdParty: {
		cardmarket: 286249,
		tcgplayer: 107122
	}
}

export default card
