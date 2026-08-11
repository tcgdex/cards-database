import { Card } from "models/database/card"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Lillie's Determination",
		'fr-fr': "Détermination de Lilie",
		'es-es': "Determinación de Lylia",
		'es-mx': "Determinación de Lillie",
		'de-de': "Lillys Entschlossenheit",
		'it-it': "Determinazione di Lylia",
		'pt-br': "Determinação da Lílian"
	},

	illustrator: "Atsushi Furusawa",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'en-us': "Shuffle your hand into your deck. Then, draw 6 cards. If you have exactly 6 Prize cards remaining, draw 8 cards instead.",
		'fr-fr': "Mélangez votre main avec votre deck. Ensuite, piochez 6 cartes. S'il vous reste exactement 6 cartes Récompense, piochez 8 cartes à la place.",
		'es-es': "Pon las cartas de tu mano en tu baraja y barájalas todas. Después, roba 6 cartas. Si te quedan exactamente 6 cartas de Premio, roba 8 cartas en vez de 6.",
		'es-mx': "Baraja tu mano en tu mazo. Después, roba 6 cartas. Si te quedan exactamente 6 cartas de Premio, roba 8 cartas en lugar de 6.",
		'de-de': "Mische deine Handkarten in dein Deck. Ziehe anschließend 6 Karten. Wenn du genau 6 verbleibende Preiskarten hast, ziehe stattdessen 8 Karten.",
		'it-it': "Rimischia le carte che hai in mano nel tuo mazzo. Poi pesca sei carte. Se hai esattamente sei carte Premio rimanenti, invece pescane otto.",
		'pt-br': "Embaralhe a sua mão no seu baralho. Em seguida, compre 6 cartas. Se você tiver exatamente 6 cartas de Prêmio restantes, compre 8 cartas em vez de 6."
	},

	trainerType: "Supporter",
	regulationMark: "I",

	variants: [
	{
		type: "normal",
		thirdParty: {
			cardmarket: 869803,
			tcgplayer: 676004
		}
	},
	{
		type: "reverse",
		thirdParty: {
			cardmarket: 869803,
			tcgplayer: 676004
		}
	},
],
}

export default card