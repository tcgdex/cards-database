import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		en: "Shauna",
		fr: "Sannah",
		es: "Xana",
		it: "Shana",
		pt: "Shauna",
		de: "Sannah"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		en: "Shuffle your hand into your deck. Then, draw 5 cards.",
		fr: "Mélangez votre main avec votre deck. Ensuite, piochez 5 cartes.",
		es: "Pon las cartas de tu mano en tu baraja y barájalas todas. Después, roba 5 cartas.",
		it: "Rimischia le carte che hai in mano nel tuo mazzo. Poi pesca cinque carte.",
		pt: "Embaralhe a sua mão no seu baralho. Em seguida, compre 5 cartas.",
		de: "Mische deine Handkarten in dein Deck. Ziehe anschließend 5 Karten."
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
		cardmarket: 582976,
		tcgplayer: 253117
	}
}

export default card