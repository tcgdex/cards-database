import { Card } from "models/database/card"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Buneary",
		'fr-fr': "Laporeille",
		'de-de': "Haspiror",
		'it-it': "Buneary",
		'es-es': "Buneary",
		'pt-br': "Buneary",
		'es-mx': "Buneary"
	},

	illustrator: "ryoma uratsuka",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],
	stage: "Basic",
	dexId: [427],

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Charm",
			'fr-fr': "Charme",
			'de-de': "Charme",
			'it-it': "Fascino",
			'es-es': "Encanto",
			'pt-br': "Encantar",
			'es-mx': "Encanto"
		},

		effect: {
			'en-us': "During your opponent's next turn, attacks used by the Defending Pokémon do 20 less damage (before applying Weakness and Resistance).",
			'fr-fr': "Pendant le prochain tour de votre adversaire, les attaques utilisées par le Pokémon Défenseur infligent 20 dégâts de moins (avant application de la Faiblesse et de la Résistance).",
			'de-de': "Während des nächsten Zuges deines Gegners fügen die vom Verteidigenden Pokémon eingesetzten Attacken 20 Schadenspunkte weniger zu (bevor Schwäche und Resistenz verrechnet werden).",
			'it-it': "Durante il prossimo turno del tuo avversario, gli attacchi usati dal Pokémon difensore infliggono 20 danni in meno, prima di aver applicato debolezza e resistenza.",
			'es-es': "Durante el próximo turno de tu rival, los ataques usados por el Pokémon Defensor hacen 20 puntos de daño menos (antes de aplicar Debilidad y Resistencia).",
			'pt-br': "Durante o próximo turno do seu oponente, os ataques usados pelo Pokémon Defensor causarão 20 pontos de dano a menos (antes de aplicar Fraqueza e Resistência).",
			'es-mx': "Durante el próximo turno de tu rival, los ataques usados por el Pokémon Defensor hacen 20 puntos de daño menos (antes de aplicar Debilidad y Resistencia)."
		}
	}, {
		cost: ["Colorless"],

		name: {
			'en-us': "Skip",
			'fr-fr': "Sautiller",
			'de-de': "Hüpfer",
			'it-it': "Saltello",
			'es-es': "Saltito",
			'pt-br': "Saltitar",
			'es-mx': "Saltito"
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

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 851178,
				tcgplayer: 654446
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 851178,
				tcgplayer: 654446
			}
		},
	],
}

export default card
