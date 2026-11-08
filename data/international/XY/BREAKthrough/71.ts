import { Card } from 'models/database/card'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		'en-us': "Woobat",
		'fr-fr': "Chovsourir",
		'es-es': "Woobat",
		'it-it': "Woobat",
		'pt-br': "Woobat",
		'de-de': "Fleknoil"
	},

	illustrator: "match",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		527,
	],

	hp: 60,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Odor Sleuth",
				'fr-fr': "Flair",
				'es-es': "Rastreo",
				'it-it': "Segugio",
				'pt-br': "Farejador",
				'de-de': "Schnüffler"
			},
			effect: {
				'en-us': "Flip a coin. If heads, put a card from your discard pile into your hand.",
				'fr-fr': "Lancez une pièce. Si c'est face, ajoutez une carte de votre pile de défausse à votre main.",
				'es-es': "Lanza 1 moneda. Si sale cara, pon 1 carta de tu pila de descartes en tu mano.",
				'it-it': "Lancia una moneta. Se esce testa, prendi una carta dalla tua pila degli scarti e aggiungila a quelle che hai in mano.",
				'pt-br': "Jogue uma moeda. Se sair cara, coloque um card da sua pilha de descarte em sua mão.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" nimm 1 Karte von deinem Ablagestapel auf deine Hand."
			},

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Psyshot",
				'fr-fr': "Piqûre Psy",
				'es-es': "Disparo Psi",
				'it-it': "Psicosparo",
				'pt-br': "Tiro Psíquico",
				'de-de': "Psychoschuss"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "The heart-shaped mark left on a body after a woobat has been attached to it is said to bring good fortune.",
	},

	thirdParty: {
		cardmarket: 286317,
		tcgplayer: 107190
	}
}

export default card
