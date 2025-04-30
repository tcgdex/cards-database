import { Card } from "../../../interfaces"
import Set from "../Journey Together"

const card: Card = {
	set: Set,

	name: {
		en: "N's Purrloin",
		fr: "Chacripan de N",
		es: "Purrloin de N",
		de: "Ns Felilou",
		it: "Purrloin di N",
		pt: "Purrloin do N",
		'es-mx': "Purrloin de N"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness", "Colorless"],

		name: {
			en: "Thieving Swipe",
			fr: "Chat-Pardeur",
			es: "Zarpazo Ladrón",
			de: "Stibitzen",
			it: "Sgraffignacolpo",
			pt: "Gatunar",
			'es-mx': "Zarpazo Ladrón"
		},

		effect: {
			en: "Your opponent reveals their hand, and you choose a card you find there and put it on the bottom of their deck.",
			fr: "Votre adversaire montre sa main. Choisissez-y une carte, puis placez-la en dessous de son deck.",
			es: "Tu rival enseña las cartas de su mano. Elige 1 carta que encuentres entre ellas y ponla en la parte inferior de su baraja.",
			de: "Dein Gegner zeigt dir seine Handkarten und du wählst 1 Karte, die du dort findest, und legst sie unter sein Deck.",
			it: "Il tuo avversario mostra le carte che ha in mano, e tu ne scegli una e la metti in fondo al suo mazzo.",
			pt: "Seu oponente revela a mão dele, e você escolhe uma carta que encontrar lá e a coloca como a carta de baixo do baralho dele.",
			'es-mx': "Tu rival muestra las cartas de su mano. Elige 1 carta que encuentres entre ellas y ponla en la parte inferior de su mazo."
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "I",

	variants: {
		"firstEdition": false,
		"holo": false,
		"normal": true
		"reverse": true,
		"wPromo": false,
		}
}

export default card
