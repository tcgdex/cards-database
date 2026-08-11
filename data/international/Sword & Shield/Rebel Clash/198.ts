import { Card } from 'models/database/card'
import Set from '../Rebel Clash'

const card: Card = {
	dexId: [687],
	set: Set,

	name: {
		'en-us': "Malamar VMAX",
		'fr-fr': "Sepiatroce VMAX",
		'es-es': "Malamar VMAX",
		'it-it': "Malamar VMAX",
		'pt-br': "Malamar VMAX",
		'de-de': "Calamanero VMAX"
	},

	illustrator: "5ban Graphics",
	rarity: "Secret Rare",
	category: "Pokemon",
	hp: 310,
	types: ["Darkness"],

	evolveFrom: {
		'en-us': "Malamar V",
		'fr-fr': "Sepiatroce-V",
		'es-es': "Malamar V",
		'it-it': "Malamar-V",
		'pt-br': "Malamar V",
		'de-de': "Calamanero-V"
	},

	attacks: [{
		name: {
			'en-us': "Max Jammer",
			'fr-fr': "Bloquomax",
			'es-es': "Maxiobstrucción",
			'it-it': "Dynablocco",
			'pt-br': "Bloqueador Max",
			'de-de': "Dyna-Störer"
		},

		effect: {
			'en-us': "Your opponent reveals their hand. Choose a card you find there and put it on the bottom of their deck.",
			'fr-fr': "Votre adversaire dévoile sa main. Choisissez-y une carte, puis placez-la en dessous de son deck.",
			'es-es': "Tu rival enseña las cartas de su mano. Elige 1 carta que encuentres entre ellas y ponla en la parte inferior de su baraja.",
			'it-it': "Il tuo avversario mostra le carte che ha in mano. Scegline una e mettila in fondo al suo mazzo.",
			'pt-br': "Seu oponente revela a própria mão. Escolha 1 carta que encontrar lá e coloque-a como a carta de baixo do baralho dele(a).",
			'de-de': "Dein Gegner zeigt dir seine Handkarten. Wähle 1 Karte, die du dort findest, und lege sie unter sein Deck."
		},

		damage: 180,
		cost: ["Darkness", "Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D",


	stage: "VMAX",

	variants: [
		{
			type: 'holo',
			foil: 'rainbow',
			thirdParty: {
				cardmarket: 457343,
				tcgplayer: 213218
			}
		},
	],
}

export default card
