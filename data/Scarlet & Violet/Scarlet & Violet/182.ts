import { Card } from "../../../interfaces"
import Set from "../Scarlet & Violet"

const card: Card = {
	set: Set,

	name: {
		en: "Pal Pad",
		fr: "Registre Ami",
		es: "Bloc de Amigos",
		it: "Blocco amici",
		pt: "Pal Pad",
		de: "Adressbuch"
	},

	rarity: "Common",
	category: "Trainer",

	effect: {
		en: "Shuffle up to 2 Supporter cards from your discard pile into your deck.",
		fr: "Mélangez avec votre deck jusqu'à 2 cartes Supporter de votre pile de défausse.",
		es: "Pon hasta 2 cartas de Partidario de tu pila de descartes en tu baraja y barájalas todas.",
		it: "Rimischia fino a due carte Aiuto dalla tua pila degli scarti nel tuo mazzo.",
		pt: "Embaralhe até 2 cartas de Apoiador da sua pilha de descarte no seu baralho.",
		de: "Mische bis zu 2 Unterstützerkarten aus deinem Ablagestapel in dein Deck."
	},

	trainerType: "Item",
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "Studio Bora Inc."
}

export default card