import { Card } from 'models/database/card'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		'en-us': "Bill’s Maintenance",
		'fr-fr': "Entretien de Léo",
		'es-es': "Mantenimiento de Bill",
		'it-it': "Sostegno di Bill",
		'pt-br': "Manutenção do Bill",
		'de-de': "Bills Wartung"
	},
	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",

	set: Set,











	effect: {
		'fr-fr': "Mélangez une carte de votre main avec votre deck. Dans ce cas, piochez 3 cartes.",
		'en-us': "Shuffle a card from your hand into your deck. If you do, draw 3 cards.",
		'es-es': "Pon 1 carta de tu mano en tu baraja y barájalas todas. Si lo haces, roba 3 cartas.",
		'it-it': "Rimischia una delle carte che hai in mano nel tuo mazzo. Se lo fai, pesca tre carte.",
		'pt-br': "Embaralhe 1 carta da sua mão no seu baralho. Se fizer isto, compre 3 cartas.",
		'de-de': "Mische 1 Karte aus deiner Hand in dein Deck. Wenn du das machst, ziehe 3 Karten."
	},
	trainerType: "Supporter",

}

export default card
