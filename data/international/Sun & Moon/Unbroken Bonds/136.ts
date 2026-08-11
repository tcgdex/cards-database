import { Card } from 'models/database/card'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		'en-us': "Togepi",
		'fr-fr': "Togepi",
		'es-es': "Togepi",
		'it-it': "Togepi",
		'pt-br': "Togepi",
		'de-de': "Togepi"
	},

	illustrator: "Sekio",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		175,
	],

	hp: 50,

	types: [
		"Fairy",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Daunt",
				'fr-fr': "Découragement",
				'es-es': "Arredrar",
				'it-it': "Scoraggiare",
				'pt-br': "Atemorizar",
				'de-de': "Entmutigen"
			},
			effect: {
				'en-us': "During your opponent’s next turn, the Defending Pokémon’s attacks do 30 less damage (before applying Weakness and Resistance).",
				'fr-fr': "Pendant le prochain tour de votre adversaire, les attaques du Pokémon Défenseur infligent 30 dégâts de moins (avant application de la Faiblesse et de la Résistance).",
				'es-es': "Durante el próximo turno de tu rival, los ataques del Pokémon Defensor hacen 30 puntos de daño menos (antes de aplicar Debilidad y Resistencia).",
				'it-it': "Durante il prossimo turno del tuo avversario, gli attacchi del Pokémon difensore infliggono 30 danni in meno, prima di aver applicato debolezza e resistenza.",
				'pt-br': "Durante a próxima vez de jogar do seu oponente, os ataques do Pokémon Defensor causarão 30 pontos de dano a menos (antes de aplicar Fraqueza e Resistência).",
				'de-de': "Während des nächsten Zuges deines Gegners fügen die Attacken des Verteidigenden Pokémon 30 Schadenspunkte weniger zu (bevor Schwäche und Resistenz verrechnet werden)."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "The shell seems to be filled with joy. It is said that it will share good luck when treated kindly.",
	},

	thirdParty: {
		cardmarket: 372423,
		tcgplayer: 189234
	}
}

export default card
