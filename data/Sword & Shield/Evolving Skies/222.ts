import { Card } from '../../../interfaces'
import Set from '../Evolving Skies'

const card: Card = {
	set: Set,

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	name: {
		en: "Copycat",
		fr: "Copieuse",
		es: "Copiona",
		it: "Copiona",
		pt: "Imitadora",
		de: "Nachahmerin"
	},

	rarity: "Secret Rare",
	category: "Trainer",

	effect: {
		en: "Shuffle your hand into your deck. Then, draw a card for each card in your opponent's hand.",
		fr: "Mélangez votre main avec votre deck. Ensuite, piochez une carte pour chaque carte dans la main de votre adversaire.",
		es: "Pon las cartas de tu mano en tu baraja y barájalas todas. Después, roba 1 carta por cada carta en la mano de tu rival.",
		it: "Rimischia le carte che hai in mano nel tuo mazzo. Poi pesca una carta per ogni carta nella mano del tuo avversario.",
		pt: "Embaralhe a sua mão no seu baralho. Em seguida, compre 1 carta para cada carta na mão do seu oponente.",
		de: "Mische deine Handkarten in dein Deck. Ziehe anschließend 1 Karte für jede Karte auf der Hand deines Gegners."
	},

	trainerType: "Supporter",
	illustrator: "Sanosuke Sakuma"
}

export default card
