import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Bug Catcher",
		'fr-fr': "Scout",
		'es-es': "Cazabichos",
		'it-it': "Pigliamosche",
		'pt-br': "Caça-inseto",
		'de-de': "Käfersammler"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'en-us': "Draw 2 cards. Flip a coin. If heads, draw 2 more cards.",
		'fr-fr': "Piochez 2 cartes. Lancez une pièce. Si c'est face, piochez 2 cartes supplémentaires.",
		'es-es': "Roba 2 cartas. Lanza 1 moneda. Si sale cara, roba 2 cartas más.",
		'it-it': "Pesca due carte. Lancia una moneta. Se esce testa, pesca altre due carte.",
		'pt-br': "Compre 2 cartas. Jogue 1 moeda. Se sair cara, compre 2 cartas a mais.",
		'de-de': "Ziehe 2 Karten. Wirf 1 Münze. Ziehe bei Kopf 2 Karten mehr."
	},

	trainerType: "Supporter",
	illustrator: "Yuu Nishida",


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582962,
				tcgplayer: 253093
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582962,
				tcgplayer: 253093
			}
		},
	],
}

export default card
