import { Card } from 'models/database/card'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		'en-us': "Bug Catcher",
		'fr-fr': "Scout",
		'es-es': "Cazabichos",
		'it-it': "Pigliamosche",
		'pt-br': "Caça-inseto",
		'de-de': "Käfersammler"
	},

	illustrator: "kirisAki",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Piochez 2 cartes. Lancez une pièce. Si c’est face, piochez 2 cartes supplémentaires.",
		'en-us': "Draw 2 cards. Flip a coin. If heads, draw 2 more cards.",
		'es-es': "Roba 2 cartas. Lanza 1 moneda. Si sale cara, roba 2 cartas más.",
		'it-it': "Pesca due carte. Lancia una moneta. Se esce testa, pesca altre due carte.",
		'pt-br': "Compre 2 cartas. Jogue 1 moeda. Se sair cara, compre 2 cartas a mais.",
		'de-de': "Ziehe 2 Karten. Wirf 1 Münze. Ziehe bei Kopf 2 Karten mehr."
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 388732,
		tcgplayer: 195219
	}
}

export default card
