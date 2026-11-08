import { Card } from "models/database/card"
import Set from "../SWSH Black Star Promos"

const card: Card = {
	dexId: [848],
	set: Set,

	name: {
		'fr-fr': "Toxizap",
		'de-de': "Toxel",
		'es-es': "Toxel",
		'pt-br': "Toxel",
		'it-it': "Toxel",
		'en-us': "Toxel"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'fr-fr': "Rugissement",
			'de-de': "Heuler",
			'es-es': "Gruñido",
			'pt-br': "Rosnadura",
			'it-it': "Ruggito",
			'en-us': "Growl"
		},

		effect: {
			'fr-fr': "Pendant le prochain tour de votre adversaire, les attaques du Pokémon Défenseur infligent 30 dégâts de moins (avant application de la Faiblesse et de la Résistance).",
			'de-de': "Während des nächsten Zuges deines Gegners fügen die Attacken des Verteidigenden Pokémon 30 Schadenspunkte weniger zu (bevor Schwäche und Resistenz verrechnet werden).",
			'es-es': "Durante el próximo turno de tu rival, los ataques del Pokémon Defensor hacen 30 puntos de daño menos (antes de aplicar Debilidad y Resistencia).",
			'pt-br': "Durante o próximo turno do seu oponente, os ataques do Pokémon Defensor causarão 30 pontos de dano a menos (antes de aplicar Fraqueza e Resistência).",
			'it-it': "Durante il prossimo turno del tuo avversario, gli attacchi del Pokémon difensore infliggono 30 danni in meno, prima di aver applicato debolezza e resistenza.",
			'en-us': "During your opponent's next turn, the Defending Pokémon's attacks do 30 less damage (before applying Weakness and Resistance)."
		}
	}, {
		cost: ["Lightning"],

		name: {
			'fr-fr': "Foudre Minuscule",
			'de-de': "Mini-Blitz",
			'es-es': "Relampaguito",
			'pt-br': "Corisquinho",
			'it-it': "Minifulmine",
			'en-us': "Tiny Bolt"
		},

		damage: 10
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "E",

	description: {
		'en-us': "It manipulates the chemical makeup of its poison to produce electricity. The voltage is weak, but it can cause a tingling paralysis."
	},

	thirdParty: {
		cardmarket: 659061
	}
}

export default card
