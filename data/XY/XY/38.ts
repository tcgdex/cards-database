import { Card } from '../../../interfaces'
import Set from '../XY'

const card: Card = {
	name: {
		en: "Simipour",
		fr: "Flotoutan",
		es: "Simipour",
		it: "Simipour",
		pt: "Simipour",
		de: "Sodachita"
	},
	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		516,
	],
	hp: 90,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Panpour",
		fr: "Flotajou",
		es: "Panpour",
		it: "Panpour",
		pt: "Panpour",
		de: "Sodamak"
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Recycle",
				fr: "Recyclage",
				es: "Reciclaje",
				it: "Riciclo",
				pt: "Reciclagem",
				de: "Aufbereitung"
			},
			effect: {
				en: "Put a card from your discard pile on top of your deck.",
				fr: "Mettez une carte de votre pile de défausse sur le dessus de votre deck.",
				es: "Pon 1 carta de tu pila de descartes en la parte superior de tu baraja.",
				it: "Prendi una carta qualsiasi dalla tua pila degli scarti e mettila in cima al tuo mazzo.",
				pt: "Coloque um card da sua pilha de descarte em cima do seu baralho.",
				de: "Lege 1 beliebige Karte von deinem Ablagestapel auf dein Deck."
			},

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Surf",
				fr: "Surf",
				es: "Surf",
				it: "Surf",
				pt: "Surfar",
				de: "Surfer"
			},

			damage: 70,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
