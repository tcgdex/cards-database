import { Card } from '../../../interfaces'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		en: "Copycat",
		fr: "Copieuse",
		es: "Copiona",
		it: "Copiona",
		pt: "Imitadora",
		de: "Nachahmerin"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		fr: "Mélangez votre main avec votre deck. Ensuite, piochez une carte pour chaque carte dans la main de votre adversaire.",
		en: "Shuffle your hand into your deck. Then, draw a card for each card in your opponent’s hand.",
		es: "Pon las cartas de tu mano en tu baraja y barájalas todas. Después, roba 1 carta por cada carta en la mano de tu rival.",
		it: "Rimischia le carte che hai in mano nel tuo mazzo. Poi pesca una carta per ogni carta nella mano del tuo avversario.",
		pt: "Embaralhe a sua mão no seu baralho. Em seguida, compre 1 carta para cada carta na mão do seu oponente.",
		de: "Mische deine Handkarten in dein Deck. Ziehe anschließend 1 Karte für jede Karte auf der Hand deines Gegners."
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 361365
	}
}

export default card
