import { Card } from 'models/database/card'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		'en-us': "Shauna",
		'fr-fr': "Sannah",
		'es-es': "Xana",
		'it-it': "Shana",
		'pt-br': "Shauna",
		'de-de': "Sannah"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Mélangez votre main avec votre deck. Ensuite, piochez 5 cartes.",
		'en-us': "Shuffle your hand into your deck. Then, draw 5 cards.",
		'es-es': "Pon las cartas de tu mano en tu baraja y barájalas todas. Después, roba 5 cartas.",
		'it-it': "Metti le carte che hai in mano nel tuo mazzo e rimischialo. Poi pesca cinque carte.",
		'pt-br': "Embaralhe sua mão em seu baralho. Em seguida, compre 5 cards.",
		'de-de': "Mische deine Handkarten in dein Deck. Ziehe anschließend 5 Karten."
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 289931,
		tcgplayer: 117882
	}
}

export default card
