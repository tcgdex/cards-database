import { Card } from 'models/database/card'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		'en-us': "Lure Ball",
		'fr-fr': "Appât Ball",
		'es-es': "Cebo Ball",
		'it-it': "Esca Ball",
		'pt-br': "Bola Isca",
		'de-de': "Köderball"
	},

	illustrator: "Katsura Tabata",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Lancez 3 pièces. Pour chaque côté face, ajoutez un Pokémon Évolutif de votre pile de défausse à votre main.",
		'en-us': "Flip 3 coins. For each heads, put an Evolution Pokémon from your discard pile into your hand.",
		'es-es': "Lanza 3 monedas. Por cada cara, pon 1 Pokémon Evolución de tu pila de descartes en tu mano.",
		'it-it': "Lancia tre volte una moneta. Ogni volta che esce testa, prendi un Pokémon Evoluzione dalla tua pila degli scarti e aggiungilo alle carte che hai in mano.",
		'pt-br': "Jogue 3 moedas. Para cada cara, coloque 1 Pokémon de Evolução da sua pilha de descarte na sua mão.",
		'de-de': "Wirf 3 Münzen. Nimm pro Kopf 1 Entwicklungs-Pokémon aus deinem Ablagestapel auf deine Hand."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 361376,
		tcgplayer: 170999
	}
}

export default card
