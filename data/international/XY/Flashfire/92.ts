import { Card } from 'models/database/card'
import Set from '../Flashfire'

const card: Card = {
	name: {
		'en-us': "Pal Pad",
		'fr-fr': "Registre Ami",
		'es-es': "Bloc Amigos",
		'it-it': "Blocco Amici",
		'pt-br': "Pal Pad",
		'de-de': "Adressbuch"
	},

	illustrator: "PLANETA",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Mélangez 2 cartes Supporter de votre pile de défausse avec votre deck.",
		'en-us': "Shuffle 2 Supporter cards from your discard pile into your deck.",
		'es-es': "Pon 2 cartas de Partidario de tu pila de descartes en tu baraja y barájalas todas.",
		'it-it': "Rimischia due carte Aiuto dalla tua pila degli scarti nel tuo mazzo.",
		'pt-br': "Embaralhe 2 cards de Apoiador da sua pilha de descarte no seu baralho.",
		'de-de': "Mische 2 Unterstützerkarten aus deinem Ablagestapel in dein Deck."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 281575,
		tcgplayer: 91229
	}
}

export default card
