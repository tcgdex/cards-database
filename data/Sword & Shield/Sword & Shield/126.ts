import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		en: "Thievul",
		fr: "Roublenard",
		es: "​Thievul",
		it: "Thievul",
		pt: "Thievul",
		de: "Gaunux"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 100,

	types: [
		"Darkness",
	],

	evolveFrom: {
		en: "Nickit",
		fr: "Goupilou",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Thief",
				fr: "Larcin",
				es: "Ladrón",
				it: "Furto",
				pt: "Roubar",
				de: "Raub"
			},
			effect: {
				en: "Your opponent reveals their hand. Choose a card you find there and put it on the bottom of their deck.",
				fr: "Votre adversaire dévoile sa main. Choisissez-y une carte, puis placez-la en dessous de son deck.",
				es: "Tu rival enseña las cartas de su mano. Elige 1 carta que encuentres entre ellas y ponla en la parte inferior de su baraja.",
				it: "Il tuo avversario mostra le carte che ha in mano. Scegline una e mettila in fondo al suo mazzo.",
				pt: "Seu oponente revela a própria mão. Escolha 1 carta que encontrar lá e coloque-a como a carta de baixo do baralho dele(a).",
				de: "Dein Gegner zeigt dir seine Handkarten. Wähle 1 Karte, die du dort findest, und lege sie unter sein Deck."
			},
			damage: 20,

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Darkness Fang",
				fr: "Croc Obscur",
				es: "Colmillo de Oscuridad",
				it: "Oscurizanna",
				pt: "Presa Sombria",
				de: "Fänge der Dunkelheit"
			},

			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card
