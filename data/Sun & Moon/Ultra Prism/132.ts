import { Card } from '../../../interfaces'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		en: "Pal Pad",
		fr: "Registre Ami",
		es: "Bloc Amigos",
		it: "Blocco Amici",
		pt: "Pal Pad",
		de: "Adressbuch"
	},

	illustrator: "Toyste Beach",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Mélangez 2 cartes Supporter de votre pile de défausse avec votre deck.",
		en: "Shuffle 2 Supporter cards from your discard pile into your deck.",
		es: "Pon 2 cartas de Partidario de tu pila de descartes en tu baraja y barájalas todas.",
		it: "Rimischia due carte Aiuto dalla tua pila degli scarti nel tuo mazzo.",
		pt: "Embaralhe 2 cartas de Apoiador da sua pilha de descarte no seu baralho.",
		de: "Mische 2 Unterstützerkarten aus deinem Ablagestapel in dein Deck."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 316057,
		tcgplayer: 157748
	}
}

export default card
