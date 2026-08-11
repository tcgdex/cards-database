import { Card } from 'models/database/card'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		'en-us': "Pikachu",
		'fr-fr': "Pikachu",
		'es-es': "Pikachu",
		'it-it': "Pikachu",
		'pt-br': "Pikachu",
		'de-de': "Pikachu"
	},

	illustrator: "Sanosuke Sakuma",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		25,
	],

	hp: 60,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Meal Time",
				'fr-fr': "À Belles Dents",
				'es-es': "Hora de Comer",
				'it-it': "Buon Appetito",
				'pt-br': "Hora da Refeição",
				'de-de': "Mahlzeit"
			},
			effect: {
				'en-us': "Flip a coin until you get tails. For each heads, draw a card.",
				'fr-fr': "Lancez une pièce jusqu’à ce que vous obteniez un côté pile. Pour chaque côté face, piochez une carte.",
				'es-es': "Lanza 1 moneda hasta que salga cruz. Por cada cara, roba 1 carta.",
				'it-it': "Lancia una moneta finché non esce croce. Ogni volta che esce testa, pesca una carta.",
				'pt-br': "Jogue 1 moeda até sair coroa. Para cada cara, compre 1 carta.",
				'de-de': "Wirf so lang 1 Münze, bis zum ersten Mal das Ergebnis Zahl kommt. Ziehe pro Kopf 1 Karte."
			},

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Gnaw",
				'fr-fr': "Ronge",
				'es-es': "Roer",
				'it-it': "Rosicchiamento",
				'pt-br': "Roída",
				'de-de': "Nagen"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Its nature is to store up electricity. Forests where nests of Pikachu live are dangerous, since the trees are so often struck by lightning.",
	},

	thirdParty: {
		cardmarket: 388097,
		tcgplayer: 194981
	}
}

export default card
