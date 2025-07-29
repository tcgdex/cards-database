import { Card } from '../../../interfaces'
import Set from '../Dragon Majesty'

const card: Card = {
	name: {
		en: "Corsola",
		fr: "Corayon",
		es: "Corsola",
		it: "Corsola",
		pt: "Corsola",
		de: "Corasonn"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		222,
	],

	hp: 90,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Bubble Shoot",
				fr: "Tir Bulles",
				es: "Disparo Burbuja",
				it: "Sparabolle",
				pt: "Disparo de Bolha",
				de: "Blasenschuss"
			},
			effect: {
				en: "This attack does 20 damage times the amount of Water Energy attached to this Pokémon to 1 of your opponent’s Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 20 dégâts, multipliés par le nombre d’Énergies Water attachées à ce Pokémon, à l’un des Pokémon de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				es: "Este ataque hace 20 puntos de daño por cada Energía Water unida a este Pokémon a 1 de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				it: "Questo attacco infligge 20 danni a uno dei Pokémon del tuo avversario per ogni Energia Water assegnata a questo Pokémon. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				pt: "Este ataque causa 20 pontos de dano vezes a quantidade de Energia Water ligada a este Pokémon a 1 dos Pokémon do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
				de: "Diese Attacke fügt 1 Pokémon deines Gegners 20 Schadenspunkte mal der Anzahl der an dieses Pokémon angelegten Water-Energien zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 363499
	}
}

export default card
