import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	name: {
		en: "Malamar VMAX",
		fr: "Sepiatroce VMAX",
		es: "Malamar VMAX",
		it: "Malamar VMAX",
		pt: "Malamar VMAX",
		de: "Calamanero VMAX"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	evolveFrom: {
		en: "Malamar V",
		fr: "Sepiatroce-V",
		es: "Malamar V",
		it: "Malamar-V",
		pt: "Malamar V",
		de: "Calamanero-V"
	},

	attacks: [
		{
			cost: [
				"Darkness",
				"Darkness",
				"Colorless",
			],
			name: {
				en: "Max Jammer",
				fr: "Bloquomax",
				es: "Maxiobstrucción",
				it: "Dynablocco",
				pt: "Bloqueador Max",
				de: "Dyna-Störer"
			},
			effect: {
				en: "Your opponent reveals their hand. Choose a card you find there and put it on the bottom of their deck.",
				fr: "Votre adversaire dévoile sa main. Choisissez-y une carte, puis placez-la en dessous de son deck.",
				es: "Tu rival enseña las cartas de su mano. Elige 1 carta que encuentres entre ellas y ponla en la parte inferior de su baraja.",
				it: "Il tuo avversario mostra le carte che ha in mano. Scegline una e mettila in fondo al suo mazzo.",
				pt: "Seu oponente revela a própria mão. Escolha 1 carta que encontrar lá e coloque-a como a carta de baixo do baralho dele(a).",
				de: "Dein Gegner zeigt dir seine Handkarten. Wähle 1 Karte, die du dort findest, und lege sie unter sein Deck."
			},
			damage: 180,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,
	hp: 310,
	types: ["Darkness"],
	regulationMark: "D",

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	stage: "VMAX",

}

export default card
