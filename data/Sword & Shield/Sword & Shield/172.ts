import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Pal Pad",
		fr: "Registre Ami",
		es: "Bloc Amigos",
		it: "Blocco Amici",
		pt: "Pal Pad",
		de: "Adressbuch"
	},

	illustrator: "Ryo Ueda",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Shuffle up to 2 Supporter cards from your discard pile into your deck.",
		fr: "Mélangez avec votre deck jusqu'à 2 cartes Supporter de votre pile de défausse.",
		es: "Pon hasta 2 cartas de Partidario de tu pila de descartes en tu baraja y barájalas todas.",
		it: "Rimischia fino a due carte Aiuto dalla tua pila degli scarti nel tuo mazzo.",
		pt: "Embaralhe até 2 cartas de Apoiador da sua pilha de descarte no seu baralho.",
		de: "Mische bis zu 2 Unterstützerkarten aus deinem Ablagestapel in dein Deck."
	},

	trainerType: "Item",
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 436954,
		tcgplayer: 208502
	}
}

export default card
