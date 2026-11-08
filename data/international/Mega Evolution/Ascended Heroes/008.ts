import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Chikorita",
		'fr-fr': "Germignon",
		'es-es': "Chikorita",
		'es-mx': "Chikorita",
		'de-de': "Endivie",
		'it-it': "Chikorita",
		'pt-br': "Chikorita"
	},

	illustrator: "Kariya",
	rarity: "Common",
	category: "Pokemon",
	dexId: [152],
	hp: 70,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Growl",
			'fr-fr': "Rugissement",
			'es-es': "Gruñido",
			'es-mx': "Gruñido",
			'de-de': "Heuler",
			'it-it': "Ruggito",
			'pt-br': "Rosnadura"
		},

		effect: {
			'en-us': "During your opponent's next turn, attacks used by the Defending Pokémon do 20 less damage (before applying Weakness and Resistance).",
			'fr-fr': "Pendant le prochain tour de votre adversaire, les attaques utilisées par le Pokémon Défenseur infligent 20 dégâts de moins (avant application de la Faiblesse et de la Résistance).",
			'es-es': "Durante el próximo turno de tu rival, los ataques usados por el Pokémon Defensor hacen 20 puntos de daño menos (antes de aplicar Debilidad y Resistencia).",
			'es-mx': "Durante el próximo turno de tu rival, los ataques usados por el Pokémon Defensor hacen 20 puntos de daño menos (antes de aplicar Debilidad y Resistencia).",
			'de-de': "Während des nächsten Zuges deines Gegners fügen die vom Verteidigenden Pokémon eingesetzten Attacken 20 Schadenspunkte weniger zu (bevor Schwäche und Resistenz verrechnet werden).",
			'it-it': "Durante il prossimo turno del tuo avversario, gli attacchi usati dal Pokémon difensore infliggono 20 danni in meno, prima di aver applicato debolezza e resistenza.",
			'pt-br': "Durante o próximo turno do seu oponente, os ataques usados pelo Pokémon Defensor causarão 20 pontos de dano a menos (antes de aplicar Fraqueza e Resistência)."
		}
	}, {
		cost: ["Grass", "Grass"],

		name: {
			'en-us': "Seed Bomb",
			'fr-fr': "Canon Graine",
			'es-es': "Bomba Germen",
			'es-mx': "Bomba Semilla",
			'de-de': "Samenbomben",
			'it-it': "Semebomba",
			'pt-br': "Bomba de Sementes"
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "J",

	description: {
		'en-us': "A sweet aroma gently wafts from the leaf on its head. It is docile and loves to soak up sun rays.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 869619,
				tcgplayer: 675820
			}
		},
		{
			type: "reverse",
			foil: "friendball",
			thirdParty: {
				cardmarket: 870148,
				tcgplayer: 676858
			}
		},
		{
			type: "reverse",
			foil: "energy",
			thirdParty: {
				cardmarket: 870147,
				tcgplayer: 676998
			}
		},
		{
			type: "holo",
			foil: "cosmos",
			thirdParty: {
				cardmarket: 878074,
				tcgplayer: 680709
			}
		},
	],
}

export default card
