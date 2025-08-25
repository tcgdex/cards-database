import { Card } from '../../../interfaces'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		en: "Lure Ball",
		fr: "Appât Ball",
		es: "Cebo Ball",
		it: "Esca Ball",
		pt: "Bola Isca",
		de: "Köderball"
	},

	illustrator: "Katsura Tabata",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Lancez 3 pièces. Pour chaque côté face, ajoutez un Pokémon Évolutif de votre pile de défausse à votre main.",
		en: "Flip 3 coins. For each heads, put an Evolution Pokémon from your discard pile into your hand.",
		es: "Lanza 3 monedas. Por cada cara, pon 1 Pokémon Evolución de tu pila de descartes en tu mano.",
		it: "Lancia tre volte una moneta. Ogni volta che esce testa, prendi un Pokémon Evoluzione dalla tua pila degli scarti e aggiungilo alle carte che hai in mano.",
		pt: "Jogue 3 moedas. Para cada cara, coloque 1 Pokémon de Evolução da sua pilha de descarte na sua mão.",
		de: "Wirf 3 Münzen. Nimm pro Kopf 1 Entwicklungs-Pokémon aus deinem Ablagestapel auf deine Hand."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 361376,
		tcgplayer: 170999
	}
}

export default card
