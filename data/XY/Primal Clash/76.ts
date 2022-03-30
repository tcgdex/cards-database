import { Card } from '../../../interfaces'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		en: "Rhyperior",
		fr: "Rhinastoc",
		es: "Rhyperior",
		it: "Rhyperior",
		pt: "Rhyperior",
		de: "Rihornior"
	},
	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		464,
	],
	hp: 150,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Rhydon",
		fr: "Rhinoféros",
		es: "Rhydon",
		it: "Rhydon",
		pt: "Rhydon",
		de: "Rizeros"
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Rock Shower",
				fr: "Pluie de Roche",
				es: "Ducha de Rocas",
				it: "Pioggiaroccia",
				pt: "Ducha de Pedra",
				de: "Steinschlag"
			},
			effect: {
				en: "Flip 3 coins. This attack does 20 damage times the number of heads to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Lancez 3 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de côtés face à chacun des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				es: "Lanza 3 monedas. Este ataque hace 20 puntos de daño por cada cara a cada uno de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				it: "Lancia tre volte una moneta. Questo attacco infligge 20 danni ogni volta che esce testa a ciascuno dei Pokémon del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				pt: "Jogue 3 moedas. Este ataque causa 20 de danos vezes o número de caras a cada um dos Pokémon do seu oponente. (Não aplique Fraqueza e Resistência a Pokémon no Banco.)",
				de: "Wirf 3 Münzen. Dieser Angriff fügt jedem Pokémon deines Gegners 20 Schadenspunkte mal der Anzahl \"Kopf\" zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Stone Edge",
				fr: "Lame de Roc",
				es: "Roca Afilada",
				it: "Pietrataglio",
				pt: "Gume de Pedra",
				de: "Steinkante"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 40 more damage.",
				fr: "Lancez une pièce. Si c'est face, cette attaque inflige 40 dégâts supplémentaires.",
				es: "Lanza 1 moneda. Si sale cara, este ataque hace 40 puntos de daño más.",
				it: "Lancia una moneta. Se esce testa, questo attacco infligge 40 danni in più.",
				pt: "Jogue uma moeda. Se sair cara, este ataque causará 40 de danos adicionais.",
				de: "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 40 weitere Schadenspunkte zu."
			},
			damage: "80+",

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 4,



}

export default card
