import { Card } from 'models/database/card'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		'en-us': "Cubone",
		'fr-fr': "Osselait",
		'es-es': "Cubone",
		'it-it': "Cubone",
		'pt-br': "Cubone",
		'de-de': "Tragosso"
	},

	illustrator: "otumami",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		104,
	],

	hp: 60,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Growl",
				'fr-fr': "Rugissement",
				'es-es': "Gruñido",
				'it-it': "Ruggito",
				'pt-br': "Rosnadura",
				'de-de': "Heuler"
			},
			effect: {
				'en-us': "During your opponent’s next turn, the Defending Pokémon’s attacks do 20 less damage (before applying Weakness and Resistance).",
				'fr-fr': "Pendant le prochain tour de votre adversaire, les attaques du Pokémon Défenseur infligent 20 dégâts de moins (avant application de la Faiblesse et de la Résistance).",
				'es-es': "Durante el próximo turno de tu rival, los ataques del Pokémon Defensor hacen 20 puntos de daño menos (antes de aplicar Debilidad y Resistencia).",
				'it-it': "Durante il prossimo turno del tuo avversario, gli attacchi del Pokémon difensore infliggono 20 danni in meno, prima di aver applicato debolezza e resistenza.",
				'pt-br': "Durante a próxima vez de jogar do seu oponente, os ataques do Pokémon Defensor causarão 20 pontos de dano a menos (antes de aplicar Fraqueza e Resistência).",
				'de-de': "Während des nächsten Zuges deines Gegners fügen die Attacken des Verteidigenden Pokémon 20 Schadenspunkte weniger zu (bevor Schwäche und Resistenz verrechnet werden)."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Bonemerang",
				'fr-fr': "Osmerang",
				'es-es': "Huesomerang",
				'it-it': "Ossomerang",
				'pt-br': "Ossomerangue",
				'de-de': "Knochmerang"
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 20 damage for each heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 20 dégâts pour chaque côté face.",
				'es-es': "Lanza 2 monedas. Este ataque hace 20 puntos de daño por cada cara.",
				'it-it': "Lancia due volte una moneta. Questo attacco infligge 20 danni ogni volta che esce testa.",
				'pt-br': "Jogue 2 moedas. Este ataque causa 20 pontos de dano para cada cara.",
				'de-de': "Wirf 2 Münzen. Diese Attacke fügt 20 Schadenspunkte pro Kopf zu."
			},
			damage: "20×",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "At night, it weeps loudly for its dead mother, but those cries only attract its natural enemy—Mandibuzz.",
	},

	thirdParty: {
		cardmarket: 388332,
		tcgplayer: 195047
	}
}

export default card
