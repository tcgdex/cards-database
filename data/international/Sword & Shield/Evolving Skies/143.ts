import { Card } from 'models/database/card'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,


	name: {
		'en-us': "Copycat",
		'fr-fr': "Copieuse",
		'es-es': "Copiona",
		'it-it': "Copiona",
		'pt-br': "Imitadora",
		'de-de': "Nachahmerin"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'en-us': "Shuffle your hand into your deck. Then, draw a card for each card in your opponent's hand.",
		'fr-fr': "Mélangez votre main avec votre deck. Ensuite, piochez une carte pour chaque carte dans la main de votre adversaire.",
		'es-es': "Pon las cartas de tu mano en tu baraja y barájalas todas. Después, roba 1 carta por cada carta en la mano de tu rival.",
		'it-it': "Rimischia le carte che hai in mano nel tuo mazzo. Poi pesca una carta per ogni carta nella mano del tuo avversario.",
		'pt-br': "Embaralhe a sua mão no seu baralho. Em seguida, compre 1 carta para cada carta na mão do seu oponente.",
		'de-de': "Mische deine Handkarten in dein Deck. Ziehe anschließend 1 Karte für jede Karte auf der Hand deines Gegners."
	},

	trainerType: "Supporter",
	illustrator: "Sanosuke Sakuma",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 574201,
				tcgplayer: 246768
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 574201,
				tcgplayer: 246768
			}
		},
	],
}

export default card
