import { Card } from "models/database/card"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Pawmi",
		'fr-fr': "Pohm",
		'es-es': "Pawmi",
		'es-mx': "Pawmi",
		'de-de': "Pamo",
		'it-it': "Pawmi",
		'pt-br': "Pawmi"
	},

	rarity: "Common",
	category: "Pokemon",

	dexId: [921],
	hp: 60,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Lightning"],

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
			'en-us': "During your opponent's next turn, attacks used by the Defending Pokémon do 30 less damage (before applying Weakness and Resistance).",
			'fr-fr': "Pendant le prochain tour de votre adversaire, les attaques utilisées par le Pokémon Défenseur infligent 30 dégâts de moins (avant application de la Faiblesse et de la Résistance).",
			'es-es': "Durante el próximo turno de tu rival, los ataques usados por el Pokémon Defensor hacen 30 puntos de daño menos (antes de aplicar Debilidad y Resistencia).",
			'es-mx': "Durante el próximo turno de tu rival, los ataques usados por el Pokémon Defensor hacen 30 puntos de daño menos (antes de aplicar Debilidad y Resistencia).",
			'de-de': "Während des nächsten Zuges deines Gegners fügen die vom Verteidigenden Pokémon eingesetzten Attacken 30 Schadenspunkte weniger zu (bevor Schwäche und Resistenz verrechnet werden).",
			'it-it': "Durante il prossimo turno del tuo avversario, gli attacchi usati dal Pokémon difensore infliggono 30 danni in meno, prima di aver applicato debolezza e resistenza.",
			'pt-br': "Durante o próximo turno do seu oponente, os ataques usados pelo Pokémon Defensor causarão 30 pontos de dano a menos (antes de aplicar Fraqueza e Resistência)."
		}
	}, {
		cost: ["Lightning"],

		name: {
			'en-us': "Tiny Charge",
			'fr-fr': "Décharge Mineure",
			'es-es': "Carga Diminuta",
			'es-mx': "Minicarga",
			'de-de': "Mini-Stromstoß",
			'it-it': "Sottocarica Minuscola",
			'pt-br': "Carga Pequenina"
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
	regulationMark: "I",

	description: {
		'en-us': "It has underdeveloped electric sacs on its cheeks. These sacs can produce electricity only if Pawmi rubs them furiously with the pads on its forepaws.",
	},

	illustrator: "Shimaris Yukichi",
	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 857607,
				tcgplayer: 662210,
				cardtrader: 356815
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 857607,
				tcgplayer: 662210,
				cardtrader: 356815
			}
		},
	],
}

export default card
