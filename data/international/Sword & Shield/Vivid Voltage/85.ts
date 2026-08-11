import { Card } from 'models/database/card'
import Set from '../Vivid Voltage'

const card: Card = {
	dexId: [213],

	name: {
		'en-us': "Shuckle",
		'fr-fr': "Caratroc",
		'es-es': "Shuckle",
		'it-it': "Shuckle",
		'pt-br': "Shuckle",
		'de-de': "Pottrott"
	},

	illustrator: "Mizue",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,
	hp: 70,

	types: [
		"Fighting",
	],

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Deck Distiller",
				'fr-fr': "Distillateur de Deck",
				'es-es': "Alambique de Barajas",
				'it-it': "Distillamazzo",
				'pt-br': "Destilador de Baralho",
				'de-de': "Deck-Destillateur"
			},
			effect: {
				'en-us': "Flip a coin until you get tails. For each heads, discard the top card of your opponent's deck.",
				'fr-fr': "Lancez une pièce jusqu'à obtenir un côté pile. Pour chaque côté face, défaussez la carte du dessus du deck de votre adversaire.",
				'es-es': "Lanza 1 moneda hasta que salga cruz. Por cada cara, descarta la primera carta de la baraja de tu rival.",
				'it-it': "Lancia una moneta finché non esce croce. Ogni volta che esce testa, scarta la prima carta del mazzo del tuo avversario.",
				'pt-br': "Jogue 1 moeda até sair coroa. Para cada cara, descarte a carta de cima do baralho do seu oponente.",
				'de-de': "Wirf so lange 1 Münze, bis zum ersten Mal das Ergebnis Zahl kommt. Lege pro Kopf die oberste Karte vom Deck deines Gegners auf seinen Ablagestapel."
			},

		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Rock Throw",
				'fr-fr': "Jet-Pierres",
				'es-es': "Lanzarrocas",
				'it-it': "Sassata",
				'pt-br': "Lançamento de Rocha",
				'de-de': "Steinwurf"
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D",


	stage: "Basic",

	description: {
		'en-us': "It stores berries inside its shell. To avoid attacks, it hides beneath rocks and remains completely still."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 511845,
				tcgplayer: 226516
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 511845,
				tcgplayer: 226516
			}
		},
	],
}

export default card
