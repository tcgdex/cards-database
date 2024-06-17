import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	dexId: [828],
	set: Set,

	name: {
		fr: "Roublenard",
		en: "Thievul",
		es: "Thievul",
		it: "Thievul",
		pt: "Thievul",
		de: "Gaunux"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 100,
	types: ["Darkness"],

	evolveFrom: {
		fr: "Goupilou",
		en: "Nickit"
	},

	attacks: [{
		name: {
			fr: "Larcin",
			en: "Thief",
			es: "Ladrón",
			it: "Furto",
			pt: "Roubar",
			de: "Raub"
		},

		effect: {
			fr: "Votre adversaire dévoile sa main. Choisissez-y une carte, puis placez-la en dessous de son deck.",
			en: "Your opponent reveals their hand. Choose a card you find there and put it on the bottom of their deck.",
			es: "Tu rival enseña las cartas de su mano. Elige 1 carta que encuentres entre ellas y ponla en la parte inferior de su baraja.",
			it: "Il tuo avversario mostra le carte che ha in mano. Scegline una e mettila in fondo al suo mazzo.",
			pt: "Seu oponente revela a própria mão. Escolha 1 carta que encontrar lá e coloque-a como a carta de baixo do baralho dele(a).",
			de: "Dein Gegner zeigt dir seine Handkarten. Wähle 1 Karte, die du dort findest, und lege sie unter sein Deck."
		},

		damage: 20,
		cost: ["Darkness"]
	}, {
		name: {
			fr: "Croc Obscur",
			en: "Darkness Fang",
			es: "Colmillo de Oscuridad",
			it: "Oscurizanna",
			pt: "Presa Sombria",
			de: "Fänge der Dunkelheit"
		},

		damage: 90,
		cost: ["Darkness", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D",
	stage: "Stage1",

	description: {
		en: "It secretly marks potential targets with a scent. By following the scent, it stalks its targets and steals from them when they least expect it."
	}
}

export default card