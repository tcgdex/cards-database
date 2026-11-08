import { Card } from 'models/database/card'
import Set from '../XY'

const card: Card = {
	name: {
		'en-us': "Max Revive",
		'fr-fr': "Rappel Max",
		'es-es': "Revivir Máximo",
		'it-it': "Revitalizzante Max",
		'pt-br': "Máximo Reviver",
		'de-de': "Top-Beleber"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Mettez un Pokémon de votre pile de défausse sur le dessus de votre deck.",
		'en-us': "Put a Pokémon from your discard pile on top of your deck.",
		'es-es': "Pon 1 Pokémon de tu pila de descartes en la parte superior de tu baraja.",
		'it-it': "Prendi un Pokémon dalla tua pila degli scarti e mettilo in cima al tuo mazzo.",
		'pt-br': "Coloque um Pokémon da sua pilha de descarte em cima do seu baralho.",
		'de-de': "Lege 1 Pokémon von deinem Ablagestapel auf dein Deck."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 281457,
		tcgplayer: 87269
	}
}

export default card
