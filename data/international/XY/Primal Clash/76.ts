import { Card } from 'models/database/card'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		'en-us': "Rhyperior",
		'fr-fr': "Rhinastoc",
		'es-es': "Rhyperior",
		'it-it': "Rhyperior",
		'pt-br': "Rhyperior",
		'de-de': "Rihornior"
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
		'en-us': "Rhydon",
		'fr-fr': "Rhinoféros",
		'es-es': "Rhydon",
		'it-it': "Rhydon",
		'pt-br': "Rhydon",
		'de-de': "Rizeros"
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
				'en-us': "Rock Shower",
				'fr-fr': "Pluie de Roche",
				'es-es': "Ducha de Rocas",
				'it-it': "Pioggiaroccia",
				'pt-br': "Ducha de Pedra",
				'de-de': "Steinschlag"
			},
			effect: {
				'en-us': "Flip 3 coins. This attack does 20 damage times the number of heads to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Lancez 3 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de côtés face à chacun des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				'es-es': "Lanza 3 monedas. Este ataque hace 20 puntos de daño por cada cara a cada uno de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				'it-it': "Lancia tre volte una moneta. Questo attacco infligge 20 danni ogni volta che esce testa a ciascuno dei Pokémon del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				'pt-br': "Jogue 3 moedas. Este ataque causa 20 de danos vezes o número de caras a cada um dos Pokémon do seu oponente. (Não aplique Fraqueza e Resistência a Pokémon no Banco.)",
				'de-de': "Wirf 3 Münzen. Dieser Angriff fügt jedem Pokémon deines Gegners 20 Schadenspunkte mal der Anzahl \"Kopf\" zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
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
				'en-us': "Stone Edge",
				'fr-fr': "Lame de Roc",
				'es-es': "Roca Afilada",
				'it-it': "Pietrataglio",
				'pt-br': "Gume de Pedra",
				'de-de': "Steinkante"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 40 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 40 dégâts supplémentaires.",
				'es-es': "Lanza 1 moneda. Si sale cara, este ataque hace 40 puntos de daño más.",
				'it-it': "Lancia una moneta. Se esce testa, questo attacco infligge 40 danni in più.",
				'pt-br': "Jogue uma moeda. Se sair cara, este ataque causará 40 de danos adicionais.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 40 weitere Schadenspunkte zu."
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

	description: {
		'en-us': "It puts rocks in holes in its palms and uses its muscles to shoot them. Geodude are shot at rare times.",
	},

	thirdParty: {
		cardmarket: 273607,
		tcgplayer: 95974
	}
}

export default card
