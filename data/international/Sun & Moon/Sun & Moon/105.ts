import { Card } from 'models/database/card'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		'en-us': "Stoutland",
		'fr-fr': "Mastouffe",
		'es-es': "Stoutland",
		'it-it': "Stoutland",
		'pt-br': "Stoutland",
		'de-de': "Bissbark"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		508,
	],

	hp: 150,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Herdier",
		'fr-fr': "Ponchien",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Ferocious Bellow",
				'fr-fr': "Grognement Féroce",
				'es-es': "Gruñido Feroz",
				'it-it': "Ruggitorvo",
				'pt-br': "Rugido Feroz",
				'de-de': "Wildes Kläffen"
			},
			effect: {
				'en-us': "During your opponent’s next turn, the Defending Pokémon’s attacks do 50 less damage (before applying Weakness and Resistance).",
				'fr-fr': "Pendant le prochain tour de votre adversaire, les attaques du Pokémon Défenseur infligent 50 dégâts de moins (avant application de la Faiblesse et de la Résistance).",
				'es-es': "Durante el próximo turno de tu rival, los ataques del Pokémon Defensor hacen 50 puntos de daño menos (antes de aplicar Debilidad y Resistencia).",
				'it-it': "Durante il prossimo turno del tuo avversario, gli attacchi del Pokémon difensore infliggono 50 danni in meno, prima di aver applicato debolezza e resistenza.",
				'pt-br': "Durante a próxima vez de jogar do seu oponente, os ataques do Pokémon Defensor causarão 50 pontos de dano a menos (antes de aplicar Fraqueza e Resistência).",
				'de-de': "Während des nächsten Zuges deines Gegners fügen die Attacken des Verteidigenden Pokémon 50 Schadenspunkte weniger zu (bevor Schwäche und Resistenz verrechnet werden)."
			},
			damage: 50,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Hammer In",
				'fr-fr': "Enfoncer",
				'es-es': "Martillear",
				'it-it': "Martello",
				'pt-br': "Martelada",
				'de-de': "Einhämmern"
			},

			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "Intelligent, good-natured, and valiant, it's a trustworthy partner on rescue teams.",
	},

	thirdParty: {
		cardmarket: 295417,
		tcgplayer: 126977
	}
}

export default card
