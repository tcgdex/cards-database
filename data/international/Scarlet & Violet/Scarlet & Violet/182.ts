import { Card } from "models/database/card"
import Set from "../Scarlet & Violet"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Pal Pad",
		'fr-fr': "Registre Ami",
		'es-es': "Bloc de Amigos",
		'it-it': "Blocco amici",
		'pt-br': "Pal Pad",
		'de-de': "Adressbuch"
	},

	rarity: "Common",
	category: "Trainer",

	effect: {
		'en-us': "Shuffle up to 2 Supporter cards from your discard pile into your deck.",
		'fr-fr': "Mélangez avec votre deck jusqu'à 2 cartes Supporter de votre pile de défausse.",
		'es-es': "Pon hasta 2 cartas de Partidario de tu pila de descartes en tu baraja y barájalas todas.",
		'it-it': "Rimischia fino a due carte Aiuto dalla tua pila degli scarti nel tuo mazzo.",
		'pt-br': "Embaralhe até 2 cartas de Apoiador da sua pilha de descarte no seu baralho.",
		'de-de': "Mische bis zu 2 Unterstützerkarten aus deinem Ablagestapel in dein Deck."
	},

	trainerType: "Item",
	regulationMark: "G",

	variants: [
		{
			type: "reverse"
		},
		{
			type: "normal"
		}
	],

	illustrator: "Studio Bora Inc.",

	thirdParty: {
        cardmarket: 702478,
        tcgplayer: 488088
    }
}

export default card