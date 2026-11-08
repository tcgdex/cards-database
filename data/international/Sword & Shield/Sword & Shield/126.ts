import { Card } from 'models/database/card'
import Set from '../Sword & Shield'

const card: Card = {
	name: {
		'en-us': "Thievul",
		'fr-fr': "Roublenard",
		'es-es': "Thievul",
		'it-it': "Thievul",
		'pt-br': "Thievul",
		'de-de': "Gaunux"
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
		'en-us': "Nickit",
		'fr-fr': "Goupilou",
		'es-es': "Nickit",
		'it-it': "Nickit",
		'pt-br': "Nickit",
		'de-de': "Kleptifux"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				'en-us': "Thief",
				'fr-fr': "Larcin",
				'es-es': "Ladrón",
				'it-it': "Furto",
				'pt-br': "Roubar",
				'de-de': "Raub"
			},
			effect: {
				'en-us': "Your opponent reveals their hand. Choose a card you find there and put it on the bottom of their deck.",
				'fr-fr': "Votre adversaire dévoile sa main. Choisissez-y une carte, puis placez-la en dessous de son deck.",
				'es-es': "Tu rival enseña las cartas de su mano. Elige 1 carta que encuentres entre ellas y ponla en la parte inferior de su baraja.",
				'it-it': "Il tuo avversario mostra le carte che ha in mano. Scegline una e mettila in fondo al suo mazzo.",
				'pt-br': "Seu oponente revela a própria mão. Escolha 1 carta que encontrar lá e coloque-a como a carta de baixo do baralho dele(a).",
				'de-de': "Dein Gegner zeigt dir seine Handkarten. Wähle 1 Karte, die du dort findest, und lege sie unter sein Deck."
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
				'en-us': "Darkness Fang",
				'fr-fr': "Croc Obscur",
				'es-es': "Colmillo de Oscuridad",
				'it-it': "Oscurizanna",
				'pt-br': "Presa Sombria",
				'de-de': "Fänge der Dunkelheit"
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
	},

	description: {
		'en-us': "It secretly marks potential targets with a scent. By following the scent, it stalks its targets and steals from them when they least expect it."
	},

	dexId: [828],

	thirdParty: {
		cardmarket: 436739,
		tcgplayer: 208437
	}
}

export default card
