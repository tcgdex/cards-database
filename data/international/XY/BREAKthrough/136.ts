import { Card } from 'models/database/card'
import Set from '../BREAKthrough'

const card: Card = {
	name: {
		'en-us': "Fisherman",
		'fr-fr': "Pêcheur",
		'es-es': "Pescador",
		'it-it': "Pescatore",
		'pt-br': "Pescador",
		'de-de': "Angler"
	},

	illustrator: "Hitoshi Ariga",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Prenez 4 cartes Énergie de base dans votre pile de défausse et ajoutez-les à votre main.",
		'en-us': "Put 4 basic Energy cards from your discard pile into your hand.",
		'es-es': "Pon 4 cartas de Energía Básica de tu pila de descartes en tu mano.",
		'it-it': "Prendi quattro carte Energia base dalla tua pila degli scarti e aggiungile alle carte che hai in mano.",
		'pt-br': "Coloque 4 cards de Energia básica da sua pilha de descarte em sua mão.",
		'de-de': "Nimm 4 Basis-Energiekarten von deinem Ablagestapel auf deine Hand."
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 286382,
		tcgplayer: 107254
	}
}

export default card
