import { Card } from 'models/database/card'
import Set from '../Shining Fates Shiny Vault'

const card: Card = {
	dexId: [828],
	set: Set,

	name: {
		'fr-fr': "Roublenard",
		'en-us': "Thievul",
		'es-es': "Thievul",
		'it-it': "Thievul",
		'pt-br': "Thievul",
		'de-de': "Gaunux"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 100,
	types: ["Darkness"],

	evolveFrom: {
		'fr-fr': "Goupilou",
		'en-us': "Nickit"
	},

	attacks: [{
		name: {
			'fr-fr': "Larcin",
			'en-us': "Thief",
			'es-es': "Ladrón",
			'it-it': "Furto",
			'pt-br': "Roubar",
			'de-de': "Raub"
		},

		effect: {
			'fr-fr': "Votre adversaire dévoile sa main. Choisissez-y une carte, puis placez-la en dessous de son deck.",
			'en-us': "Your opponent reveals their hand. Choose a card you find there and put it on the bottom of their deck.",
			'es-es': "Tu rival enseña las cartas de su mano. Elige 1 carta que encuentres entre ellas y ponla en la parte inferior de su baraja.",
			'it-it': "Il tuo avversario mostra le carte che ha in mano. Scegline una e mettila in fondo al suo mazzo.",
			'pt-br': "Seu oponente revela a própria mão. Escolha 1 carta que encontrar lá e coloque-a como a carta de baixo do baralho dele(a).",
			'de-de': "Dein Gegner zeigt dir seine Handkarten. Wähle 1 Karte, die du dort findest, und lege sie unter sein Deck."
		},

		damage: 20,
		cost: ["Darkness"]
	}, {
		name: {
			'fr-fr': "Croc Obscur",
			'en-us': "Darkness Fang",
			'es-es': "Colmillo de Oscuridad",
			'it-it': "Oscurizanna",
			'pt-br': "Presa Sombria",
			'de-de': "Fänge der Dunkelheit"
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
		'en-us': "It secretly marks potential targets with a scent. By following the scent, it stalks its targets and steals from them when they least expect it."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 539798,
				tcgplayer: 232462
			}
		},
	],
}

export default card
