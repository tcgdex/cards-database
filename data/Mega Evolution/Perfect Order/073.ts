import { Card } from '../../../interfaces'
import Set from '../Perfect Order'

const card: Card = {
	name: {
		en: "Energy Swatter",
		fr: "Tape-Énergie",
		es: "MataEnergías",
		de: "Energieklatsche",
		it: "Scaccia Energie",
		pt: "Mata-Energia"
	},
	set: Set,
	rarity: "Uncommon",
	category: "Trainer",
	trainerType: "Item",
	regulationMark: "J",
	illustrator: "Toyste Beach",
	effect: {
		en: "Your opponent reveals their hand, and you choose an Energy card you find there and put it on the bottom of their deck.",
		fr: "Votre adversaire montre sa main. Choisissez une carte Énergie que vous y trouvez, puis placez-la en dessous de son deck.",
		es: "Tu rival enseña las cartas de su mano, y tú eliges 1 carta de Energía que encuentres entre ellas y la pones en la parte inferior de su baraja.",
		de: "Dein Gegner zeigt dir seine Handkarten und du wählst 1 Energiekarte, die du dort findest, und legst sie unter sein Deck.",
		it: "Il tuo avversario mostra le carte che ha in mano, e tu scegli una carta Energia presente tra esse e la metti in fondo al suo mazzo.",
		pt: "Seu oponente revela a mão dele, e você escolhe uma carta de Energia que encontrar lá e a coloca como a carta de baixo do baralho dele."
	},
	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	],
	thirdParty: {
		tcgplayer: 684388,
		cardmarket: 877489
	}
}

export default card
