import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [848],
	set: Set,

	name: {
		'en-us': "Toxel",
		'fr-fr': "Toxizap",
		'es-es': "Toxel",
		'it-it': "Toxel",
		'pt-br': "Toxel",
		'de-de': "Toxel"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],
	stage: "Basic",
	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "E",
	illustrator: "kodama",

	description: {
		'en-us': "It manipulates the chemical makeup of its poison to produce electricity. The voltage is weak, but it can cause a tingling paralysis."
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Growl",
			'fr-fr': "Rugissement",
			'de-de': "Heuler",
			'es-es': "Gruñido",
			'pt-br': "Rosnadura",
			'it-it': "Ruggito"
		},

		effect: {
			'en-us': "During your opponent's next turn, the Defending Pokémon's attacks do 30 less damage (before applying Weakness and Resistance).",
			'fr-fr': "Pendant le prochain tour de votre adversaire, les attaques du Pokémon Défenseur infligent 30 dégâts de moins (avant application de la Faiblesse et de la Résistance).",
			'de-de': "Während des nächsten Zuges deines Gegners fügen die Attacken des Verteidigenden Pokémon 30 Schadenspunkte weniger zu (bevor Schwäche und Resistenz verrechnet werden).",
			'es-es': "Durante el próximo turno de tu rival, los ataques del Pokémon Defensor hacen 30 puntos de daño menos (antes de aplicar Debilidad y Resistencia).",
			'pt-br': "Durante o próximo turno do seu oponente, os ataques do Pokémon Defensor causarão 30 pontos de dano a menos (antes de aplicar Fraqueza e Resistência).",
			'it-it': "Durante il prossimo turno del tuo avversario, gli attacchi del Pokémon difensore infliggono 30 danni in meno, prima di aver applicato debolezza e resistenza."
		}
	}, {
		cost: ["Lightning"],

		name: {
			'en-us': "Tiny Bolt",
			'fr-fr': "Foudre Minuscule",
			'de-de': "Mini-Blitz",
			'es-es': "Relampaguito",
			'pt-br': "Corisquinho",
			'it-it': "Minifulmine"
		},

		damage: 10
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582499,
				tcgplayer: 253262
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582499,
				tcgplayer: 253262
			}
		},
	],
}

export default card
