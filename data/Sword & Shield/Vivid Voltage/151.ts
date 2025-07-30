import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Drone Rotom",
		fr: "Motisma Drone",
		es: "Rotom Dron",
		it: "Rotom Drone",
		pt: "Drone Rotom",
		de: "Dronen-Rotom"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		en: "Your opponent reveals their hand. If they do, look at the top card of your opponent's deck.",
		fr: "Votre adversaire dévoile sa main. Dans ce cas, regardez la carte du dessus du deck de votre adversaire.",
		es: "Tu rival enseña las cartas de su mano. Si lo hace, mira la primera carta de la baraja de tu rival.",
		it: "Il tuo avversario mostra le carte che ha in mano. Se lo fa, guarda la prima carta del suo mazzo.",
		pt: "Seu oponente revela a própria mão. Se ele(a) fizer isto, olhe a carta de cima do baralho do seu oponente.",
		de: "Dein Gegner zeigt dir seine Handkarten. Wenn er das macht, schau dir die oberste Karte des Decks deines Gegners an."
	},

	trainerType: "Item",
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 512465
	}
}

export default card
