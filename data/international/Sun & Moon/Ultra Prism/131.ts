import { Card } from 'models/database/card'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		'en-us': "Order Pad",
		'fr-fr': "Terminal de Commande",
		'es-es': "Dispositivo de Pedidos",
		'it-it': "Schermo Ordini",
		'pt-br': "Tablet de Pedido",
		'de-de': "Bestellpad"
	},

	illustrator: "Eske Yoshinob",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Lancez une pièce. Si c’est face, cherchez une carte Objet dans votre deck, montrez-la, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
		'en-us': "Flip a coin. If heads, search your deck for an Item card, reveal it, and put it into your hand. Then, shuffle your deck.",
		'es-es': "Lanza 1 moneda. Si sale cara, busca en tu baraja 1 carta de Objeto, enséñala y ponla en tu mano. Después, baraja las cartas de tu baraja.",
		'it-it': "Lancia una moneta. Se esce testa, cerca nel tuo mazzo una carta Strumento, mostrala e aggiungila alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
		'pt-br': "Jogue 1 moeda. Se sair cara, procure por 1 carta de Item no seu baralho, revele-a e coloque-a na sua mão. Em seguida, embaralhe o seu baralho.",
		'de-de': "Wirf 1 Münze. Durchsuche bei Kopf dein Deck nach 1 Itemkarte, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 316056,
		tcgplayer: 157747
	}
}

export default card
