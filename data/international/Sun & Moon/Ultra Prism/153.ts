import { Card } from 'models/database/card'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		'en-us': "Lusamine",
		'fr-fr': "Elsa-Mina",
		'es-es': "Samina",
		'it-it': "Samina",
		'pt-br': "Samina",
		'de-de': "Samantha"
	},

	illustrator: "You Iribi",
	rarity: "Ultra Rare",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Placez une combinaison de 2 cartes Supporter et cartes Stade de votre pile de défausse dans votre main.",
		'en-us': "Put 2 in any combination of Supporter and Stadium cards from your discard pile into your hand.",
		'es-es': "Pon 2 cartas de Partidario y de Estadio, en cualquier combinación, de tu pila de descartes en tu mano.",
		'it-it': "Prendi due carte Aiuto o Stadio in qualsiasi combinazione dalla tua pila degli scarti e aggiungile a quelle che hai in mano.",
		'pt-br': "Coloque 2 cartas de Apoiador e de Estádio da sua pilha de descarte na sua mão em qualquer combinação.",
		'de-de': "Nimm eine beliebige Kombination aus 2 Unterstützer- und Stadionkarten aus deinem Ablagestapel auf deine Hand."
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 316077,
		tcgplayer: 157769
	}
}

export default card
