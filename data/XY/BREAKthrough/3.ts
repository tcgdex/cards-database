import { Card } from '../../../interfaces'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		en: "Pinsir",
		fr: "Scarabrute",
		es: "Pinsir",
		it: "Pinsir",
		pt: "Pinsir",
		de: "Pinsir"
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
				en: "Overhead Throw",
				fr: "Soulève Corne",
				es: "Lanzamiento Elevado",
				it: "Lancindietro",
				pt: "Arremessar por Cima",
				de: "Überwerfer"
			},
			effect: {
				en: "This attack does 20 damage to 1 of your Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 20 dégâts à l'un de vos Pokémon de Banc. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				es: "Este ataque hace 20 puntos de daño a 1 de tus Pokémon en Banca. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				it: "Questo attacco infligge 20 danni a uno dei tuoi Pokémon in panchina. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				pt: "Este ataque causa 20 de danos a 1 dos seus Pokémon no Banco. (Não aplique Fraqueza e Resistência a Pokémon no Banco.)",
				de: "Dieser Angriff fügt 1 Pokémon auf deiner Bank 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
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
				en: "Heavy Suplex",
				fr: "Suplex Imposant",
				es: "Suplex Pesado",
				it: "Rovesciata Pesante",
				pt: "Suplex Pesado",
				de: "Wuchtiger Suplex"
			},
			effect: {
				en: "This attack does 20 more damage for each Colorless in your opponent's Active Pokémon's Retreat Cost.",
				fr: "Cette attaque inflige 20 dégâts supplémentaires pour chaque Colorless dans le Coût de Retraite du Pokémon Actif de votre adversaire.",
				es: "Este ataque hace 20 puntos de daño más por cada Colorless en el Coste de Retirada del Pokémon Activo de tu rival.",
				it: "Questo attacco infligge 20 danni in più per ogni Colorless nel costo di ritirata del Pokémon attivo del tuo avversario.",
				pt: "Este ataque causa 20 de danos adicionais para cada Colorless no Custo para Recuar do Pokémon Ativo do seu oponente.",
				de: "Dieser Angriff fügt 20 weitere Schadenspunkte für jedes Colorless-Symbol in den Rückzugskosten des Aktiven Pokémon deines Gegners zu."
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

	thirdParty: {
		cardmarket: 286249,
		tcgplayer: 107122
	}
}

export default card
