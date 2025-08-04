import { Card } from '../../../interfaces'
import Set from '../XY'

const card: Card = {
	name: {
		en: "Shauna",
		fr: "Sannah",
		es: "Xana",
		it: "Shana",
		pt: "Shauna",
		de: "Sannah"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Mélangez votre main avec votre deck. Ensuite, piochez 5 cartes.",
		en: "Shuffle your hand into your deck. Then, draw 5 cards.",
		es: "Pon las cartas de tu mano en tu baraja y barájalas todas. Después, roba 5 cartas.",
		it: "Metti le carte che hai in mano nel tuo mazzo e rimischialo. Poi pesca cinque carte.",
		pt: "Embaralhe sua mão em seu baralho. Em seguida, compre 5 cards.",
		de: "Mische deine Handkarten in dein Deck. Ziehe anschließend 5 Karten."
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 281464,
		tcgplayer: 89105
	}
}

export default card
