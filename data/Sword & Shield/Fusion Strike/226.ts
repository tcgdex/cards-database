import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		en: "Bug Catcher",
		fr: "Scout",
		es: "Cazabichos",
		it: "Pigliamosche",
		pt: "Caça-inseto",
		de: "Käfersammler"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		en: "Draw 2 cards. Flip a coin. If heads, draw 2 more cards.",
		fr: "Piochez 2 cartes. Lancez une pièce. Si c'est face, piochez 2 cartes supplémentaires.",
		es: "Roba 2 cartas. Lanza 1 moneda. Si sale cara, roba 2 cartas más.",
		it: "Pesca due carte. Lancia una moneta. Se esce testa, pesca altre due carte.",
		pt: "Compre 2 cartas. Jogue 1 moeda. Se sair cara, compre 2 cartas a mais.",
		de: "Ziehe 2 Karten. Wirf 1 Münze. Ziehe bei Kopf 2 Karten mehr."
	},

	trainerType: "Supporter",
	illustrator: "Yuu Nishida",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 582962,
		tcgplayer: 253093
	}
}

export default card