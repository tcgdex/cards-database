import { Card } from 'models/database/card'
import Set from '../Ultra Prism'

const card: Card = {
	name: {
		'en-us': "Cynthia",
		'fr-fr': "Cynthia",
		'es-es': "Cintia",
		'it-it': "Camilla",
		'pt-br': "Cíntia",
		'de-de': "Cynthia"
	},

	illustrator: "nagimiso",
	rarity: "Ultra Rare",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Mélangez votre main avec votre deck. Ensuite, piochez 6 cartes.",
		'en-us': "Shuffle your hand into your deck. Then, draw 6 cards.",
		'es-es': "Pon las cartas de tu mano en tu baraja y barájalas todas. Después, roba 6 cartas.",
		'it-it': "Rimischia le carte che hai in mano nel tuo mazzo. Poi pesca sei carte.",
		'pt-br': "Embaralhe a sua mão no seu baralho. Em seguida, compre 6 cartas.",
		'de-de': "Mische deine Handkarten in dein Deck. Ziehe anschließend 6 Karten."
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 316072,
		tcgplayer: 157764
	}
}

export default card
