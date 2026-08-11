import { Card } from 'models/database/card'
import Set from '../Vivid Voltage'

const card: Card = {
	dexId: [5],

	name: {
		'en-us': "Charmeleon",
		'fr-fr': "Reptincel",
		'es-es': "Charmeleon",
		'it-it': "Charmeleon",
		'pt-br': "Charmeleon",
		'de-de': "Glutexo"
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
		'en-us': "Charmander",
		'fr-fr': "Salamèche",
		'es-es': "Charmander",
		'it-it': "Charmander",
		'pt-br': "Charmander",
		'de-de': "Glumanda"
	},

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				'en-us': "Slash",
				'fr-fr': "Tranche",
				'es-es': "Cuchillada",
				'it-it': "Lacerazione",
				'pt-br': "Talho",
				'de-de': "Schlitzer"
			},

			damage: 20,

		},
		{
			cost: [
				"Fire",
				"Fire",
			],
			name: {
				'en-us': "Raging Flames",
				'fr-fr': "Flammes Ardentes",
				'es-es': "Llamas Rabiosas",
				'it-it': "Fiamme Furiose",
				'pt-br': "Chamas Furiosas",
				'de-de': "Wütende Flammen"
			},
			effect: {
				'en-us': "Discard the top 3 cards of your deck.",
				'fr-fr': "Défaussez les 3 cartes du dessus de votre deck.",
				'es-es': "Descarta las 3 primeras cartas de tu baraja.",
				'it-it': "Scarta le prime tre carte del tuo mazzo.",
				'pt-br': "Descarte as 3 cartas de cima do seu baralho.",
				'de-de': "Lege die obersten 3 Karten deines Decks auf deinen Ablagestapel."
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


	stage: "Stage1",

	description: {
		'en-us': "It has a barbaric nature. In battle, it whips its fiery tail around and slashes away with sharp claws."
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 511540,
				tcgplayer: 226394
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 511540,
				tcgplayer: 226394
			}
		},
	],
}

export default card
