import { Card } from 'models/database/card'
import Set from '../Plasma Blast'

const card: Card = {
	name: {
		'en-us': "Caitlin",
		'fr-fr': "Percila",
		'es-es': "Catleya",
		'it-it': "Catlina",
		'pt-br': "Caitlin",
		'de-de': "Kattlea"
	},

	illustrator: "Yusuke Ohmura",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Placez autant de cartes de votre main que vous voulez en dessous de votre deck dans l’ordre de votre choix. Ensuite, piochez une carte pour chaque carte placée en dessous de votre deck.",
		'en-us': "Put as many cards from your hand as you like on the bottom of your deck in any order. Then, draw a card for each card you put on the bottom of your deck.",
		'es-es': "Pon tantas cartas de tu mano como quieras en la parte inferior de tu baraja en el orden que quieras.",
		'it-it': "Prendi tutte le carte che vuoi dalla tua mano e mettile in fondo al tuo mazzo nell’ordine che preferisci. Poi pesca una carta per ogni carta che hai messo in fondo al tuo mazzo.",
		'pt-br': "Coloque quantos cards da sua mão quiser na base de seu baralho, em qualquer ordem. A seguir, compre um card para cada card descartado.",
		'de-de': "Lege beliebig viele Karten von deiner Hand in beliebiger Reihenfolge unter dein Deck. Ziehe anschließend 1 Karte für jede Karte, die du unter dein Deck gelegt hast."
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 281099,
		tcgplayer: 84085
	}
}

export default card
