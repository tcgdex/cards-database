import { Card } from 'models/database/card'
import Set from '../Roaring Skies'

const card: Card = {
	name: {
		'en-us': "Exeggutor",
		'fr-fr': "Noadkoko",
		'es-es': "Exeggutor",
		'it-it': "Exeggutor",
		'pt-br': "Exeggutor",
		'de-de': "Kokowei"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		103,
	],

	hp: 120,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Exeggcute",
		'fr-fr': "Noeunoeuf",
		'es-es': "Exeggcute",
		'it-it': "Exeggcute",
		'pt-br': "Exeggcute",
		'de-de': "Owei"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Shake It Off",
				'fr-fr': "Bon Débarras",
				'es-es': "Espantar",
				'it-it': "Scrollavia",
				'pt-br': "Deixar de lado",
				'de-de': "Ausschütteln"
			},
			effect: {
				'en-us': "This attack does 20 damage times the number of Colorless Pokémon your opponent has in play.",
				'fr-fr': "Cette attaque inflige 20 dégâts multipliés par le nombre de Pokémon Colorless que votre adversaire a en jeu.",
				'es-es': "Este ataque hace 20 puntos de daño por cada carta de Pokémon Colorless que tu rival tenga en juego.",
				'it-it': "Questo attacco infligge 20 danni per ogni Pokémon Colorless che il tuo avversario ha in gioco.",
				'pt-br': "Este ataque causa 20 de danos vezes o número de Pokémon Colorless que o seu oponente tem em jogo.",
				'de-de': "Dieser Angriff fügt 20 Schadenspunkte für jedes Colorless-Pokémon, das dein Gegner im Spiel hat, zu."
			},
			damage: "20×",

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Seed Bomb",
				'fr-fr': "Canon Graine",
				'es-es': "Bomba Germen",
				'it-it': "Semebomba",
				'pt-br': "Bomba de Sementes",
				'de-de': "Samenbomben"
			},

			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "It is called \"The Walking Jungle.\" If a head grows too big, it falls off and becomes an Exeggcute.",
	},

	thirdParty: {
		cardmarket: 282670,
		tcgplayer: 98038
	}
}

export default card
