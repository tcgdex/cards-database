import { Card } from 'models/database/card'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		'en-us': "Mallow",
		'fr-fr': "Barbara",
		'es-es': "Lulú",
		'it-it': "Ibis",
		'pt-br': "Lulú",
		'de-de': "Maho"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Cherchez 2 cartes dans votre deck. Mélangez votre deck, puis placez ces cartes, dans n’importe quel ordre, sur le dessus de votre deck.",
		'en-us': "Search your deck for 2 cards, shuffle your deck, then put those cards on top of it in any order.",
		'es-es': "Busca en tu baraja 2 cartas, baraja las cartas de tu baraja y, después, pon esas cartas en la parte superior de tu baraja en el orden que quieras.",
		'it-it': "Cerca due carte nel tuo mazzo, rimischia le carte del tuo mazzo, poi rimetti quelle due carte in cima al tuo mazzo nell’ordine che preferisci.",
		'pt-br': "Procure por 2 cartas no seu baralho, embaralhe-o e então coloque-as no topo em qualquer ordem.",
		'de-de': "Durchsuche dein Deck nach 2 Karten, mische dein Deck und lege jene Karten anschließend in beliebiger Reihenfolge auf dein Deck."
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 297579,
		tcgplayer: 131047
	}
}

export default card
