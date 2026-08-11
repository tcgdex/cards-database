import { Card } from 'models/database/card'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		'en-us': "Professor Birch's Observations",
		'fr-fr': "Observations du Professeur Seko",
		'es-es': "Observaciones del Profesor Abedul",
		'it-it': "Parere del Professor Birch",
		'pt-br': "Observações do Professor Birch",
		'de-de': "Prof. Birks Beobachtungen"
	},

	illustrator: "Hitoshi Ariga",
	rarity: "Ultra Rare",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Mélangez votre main avec votre deck et lancez une pièce. Si c'est face, piochez 7 cartes. Si c'est pile, piochez 4 cartes.",
		'en-us': "Shuffle your hand into your deck and flip a coin. If heads, draw 7 cards. If tails, draw 4 cards.",
		'es-es': "Pon las cartas de tu mano en tu baraja y barájalas todas. Después, lanza 1 moneda. Si sale cara, roba 7 cartas. Si sale cruz, roba 4 cartas.",
		'it-it': "Metti le carte che hai in mano nel tuo mazzo e rimischialo, poi lancia una moneta. Se esce testa, pesca sette carte. Se esce croce, pesca quattro carte.",
		'pt-br': "Embaralhe a mão no seu baralho e jogue uma moeda. Se sair cara, compre 7 cards. Se sair coroa, compre 4 cards.",
		'de-de': "Mische deine Handkarten in dein Deck und wirf 1 Münze. Ziehe bei \"Kopf\" 7 Karten. Ziehe bei \"Zahl\" 4 Karten."
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 273665,
		tcgplayer: 96057
	}
}

export default card
