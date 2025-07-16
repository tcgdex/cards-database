import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Emcee's Hype",
		fr: "Engouement de la MC",
		de: "MCs Hype",
		it: "Entusiasmo di Emcee",
		es: "Entusiasmo de Emcee",
		pt: "Hype da Emcee",
		'es-mx': "Emoción de Comentarista"
	},

	rarity: "Common",
	category: "Trainer",

	effect: {
		en: "Draw 2 cards. If your opponent has 3 or fewer Prize cards remaining, draw 2 more cards.",
		fr: "Piochez 2 cartes. S'il reste 3 cartes Récompense ou moins à votre adversaire, piochez 2 cartes supplémentaires.",
		de: "Ziehe 2 Karten. Wenn dein Gegner 3 oder weniger verbleibende Preiskarten hat, ziehe 2 Karten mehr.",
		it: "Pesca due carte. Se il tuo avversario ha tre o meno carte Premio rimanenti, pesca altre due carte.",
		es: "Roba 2 cartas. Si a tu rival le quedan 3 cartas de Premio o menos, roba 2 cartas más.",
		pt: "Compre 2 cartas. Se o seu oponente tiver 3 ou menos cartas de Prêmio restantes, compre 2 cartas a mais.",
		'es-mx': "Roba 2 cartas. Si a tu rival le quedan 3 cartas de Premio o menos, roba 2 cartas más."
	},

	trainerType: "Supporter",
	regulationMark: "I",

	variants: [
		{
			type: 'normal'
		},
		{
			type: 'reverse'
		},
	]
}

export default card
