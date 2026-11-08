import { Card } from 'models/database/card'
import Set from '../Phantom Forces'

const card: Card = {
	name: {
		'en-us': "Roller Skates",
		'fr-fr': "Rollers",
		'es-es': "Patines",
		'it-it': "Pattini",
		'pt-br': "Patins",
		'de-de': "Rollerskates"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Lancez une pièce. Si c'est face, piochez 3 cartes.",
		'en-us': "Flip a coin. If heads, draw 3 cards.",
		'es-es': "Lanza 1 moneda. Si sale cara, roba 3 cartas.",
		'it-it': "Lancia una moneta. Se esce testa, pesca tre carte.",
		'pt-br': "Jogue uma moeda. Se sair cara, compre 3 cards.",
		'de-de': "Wirf 1 Münze. Ziehe bei \"Kopf\" 3 Karten."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 281910,
		tcgplayer: 94671
	}
}

export default card
