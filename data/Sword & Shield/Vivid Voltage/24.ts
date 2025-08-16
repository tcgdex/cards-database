import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	dexId: [5],

	name: {
		en: "Charmeleon",
		fr: "Reptincel",
		es: "Charmeleon",
		it: "Charmeleon",
		pt: "Charmeleon",
		de: "Glutexo"
	},

	illustrator: "SATOSHI NAKAI",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,
	hp: 90,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Charmander",
		fr: "Salamèche",
		es: "Charmander",
		it: "Charmander",
		pt: "Charmander",
		de: "Glumanda"
	},

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Slash",
				fr: "Tranche",
				es: "Cuchillada",
				it: "Lacerazione",
				pt: "Talho",
				de: "Schlitzer"
			},

			damage: 20,

		},
		{
			cost: [
				"Fire",
				"Fire",
			],
			name: {
				en: "Raging Flames",
				fr: "Flammes Ardentes",
				es: "Llamas Rabiosas",
				it: "Fiamme Furiose",
				pt: "Chamas Furiosas",
				de: "Wütende Flammen"
			},
			effect: {
				en: "Discard the top 3 cards of your deck.",
				fr: "Défaussez les 3 cartes du dessus de votre deck.",
				es: "Descarta las 3 primeras cartas de tu baraja.",
				it: "Scarta le prime tre carte del tuo mazzo.",
				pt: "Descarte as 3 cartas de cima do seu baralho.",
				de: "Lege die obersten 3 Karten deines Decks auf deinen Ablagestapel."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Stage1",

	description: {
		en: "It has a barbaric nature. In battle, it whips its fiery tail around and slashes away with sharp claws."
	},

	thirdParty: {
		cardmarket: 511540,
		tcgplayer: 226394
	}
}

export default card
