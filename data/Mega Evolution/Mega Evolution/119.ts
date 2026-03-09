import { Card } from "../../../interfaces"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		en: "Lillie's Determination",
		fr: "Détermination de Lilie",
		de: "Lillys Entschlossenheit",
		it: "Determinazione di Lylia",
		es: "Determinación de Lylia",
		pt: "Determinação da Lílian",
		'es-mx': "Determinación de Lillie"
	},

	illustrator: "Atsushi Furusawa",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		en: "Shuffle your hand into your deck. Then, draw 6 cards. If you have exactly 6 Prize cards remaining, draw 8 cards instead.",
		fr: "Mélangez votre main avec votre deck. Ensuite, piochez 6 cartes. S'il vous reste exactement 6 cartes Récompense, piochez 8 cartes à la place.",
		de: "Mische deine Handkarten in dein Deck. Ziehe anschließend 6 Karten. Wenn du genau 6 verbleibende Preiskarten hast, ziehe stattdessen 8 Karten.",
		it: "Rimischia le carte che hai in mano nel tuo mazzo. Poi pesca sei carte. Se hai esattamente sei carte Premio rimanenti, invece pescane otto.",
		es: "Pon las cartas de tu mano en tu baraja y barájalas todas. Después, roba 6 cartas. Si te quedan exactamente 6 cartas de Premio, roba 8 cartas en vez de 6.",
		pt: "Embaralhe a sua mão no seu baralho. Em seguida, compre 6 cartas. Se você tiver exatamente 6 cartas de Prêmio restantes, compre 8 cartas em vez de 6.",
		'es-mx': "Baraja tu mano en tu mazo. Después, roba 6 cartas. Si te quedan exactamente 6 cartas de Premio, roba 8 cartas en lugar de 6."
	},

	trainerType: "Supporter",
	regulationMark: "I",

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		},
		{
			type: "holo",
			stamp: ["player-rewards-program"],
			foil: "cosmos"
		},
		{
			type: "normal",
			stamp: ["player-rewards-program"],
		},
		{
			type: "normal",
			stamp: ["regional-championships"]
		},
		{
			type: "normal",
			stamp: ["regional-championships", "staff"]
		}
	],

	thirdParty: {
		tcgplayer: 654458,
		cardmarket: 851190
	}
}

export default card