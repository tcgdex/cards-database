import { Card } from '../../../interfaces'
import Set from '../Phantom Forces'

const card: Card = {
	name: {
		en: "Roller Skates",
		fr: "Rollers",
		es: "Patines",
		it: "Pattini",
		pt: "Patins",
		de: "Rollerskates"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Lancez une pièce. Si c'est face, piochez 3 cartes.",
		en: "Flip a coin. If heads, draw 3 cards.",
		es: "Lanza 1 moneda. Si sale cara, roba 3 cartas.",
		it: "Lancia una moneta. Se esce testa, pesca tre carte.",
		pt: "Jogue uma moeda. Se sair cara, compre 3 cards.",
		de: "Wirf 1 Münze. Ziehe bei \"Kopf\" 3 Karten."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 281910
	}
}

export default card
