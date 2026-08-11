import { Card } from 'models/database/card'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		'fr-fr': "Pectorius",
		'en-us': "Hala",
		'es-es': "Kaudan",
		'it-it': "Hala",
		'pt-br': "Pandam",
		'de-de': "Hala"
	},

	illustrator: "Naoki Saito",
	rarity: "Ultra Rare",
	category: "Trainer",
	set: Set,

	effect: {
		'en-us': "Shuffle your hand into your deck. If you have used your GX attack, draw 7 cards. If not, draw 4 cards.",
		'fr-fr': "Mélangez votre main avec votre deck. Si vous avez utilisé votre attaque GX, piochez 7 cartes. Sinon, piochez 4 cartes.",
		'es-es': "Pon las cartas de tu mano en tu baraja y barájalas todas. Si has usado tu ataque GX, roba 7 cartas. Si no, roba 4 cartas.",
		'it-it': "Rimischia le carte che hai in mano nel tuo mazzo. Se hai usato un attacco GX, pesca sette carte. Altrimenti, pesca quattro carte.",
		'pt-br': "Embaralhe a sua mão no seu baralho. Se você usou o seu ataque GX, compre 7 cartas. Caso contrário, compre 4 cartas.",
		'de-de': "Mische deine Handkarten in dein Deck. Wenn du deine GX-Attacke eingesetzt hast, ziehe 7 Karten. Wenn nicht, ziehe 4 Karten."
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 296848,
		tcgplayer: 131051
	}
}

export default card
