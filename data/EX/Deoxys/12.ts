import { Card } from '../../../interfaces'
import Set from '../Deoxys'

const card: Card = {
	name: {
		en: "Mightyena",
		fr: "Grahyena",
		de: "Magnayen"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		262,
	],

	hp: 70,

	types: [
		"Darkness",
	],

	evolveFrom: {
		en: "Poochyena",
		fr: "Medhyena"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Seek Out",
				fr: "À la recherche",
				de: "Seek Out"
			},
			effect: {
				en: "Search your deck for any 1 card and put it into your hand. Shuffle your deck afterward.",
				fr: "Choisissez n'importe quelle carte dans votre deck et placez-la dans votre main. Ensuite, mélangez votre deck.",
				de: "Search your deck for a card and put it into your hand. Shuffle your deck afterward."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Pull Away",
				fr: "Arracher",
				de: "Pull Away"
			},
			effect: {
				en: "If your opponent has 5 or more cards in his or her hand, your opponent discards a number of cards until your opponent has 4 cards left in his or her hand.",
				fr: "Si votre adversaire a 5 cartes ou plus dans sa main, il doit défausser des cartes jusqu'à ce qu'il ne lui reste plus que 4 cartes en main.",
				de: "If your opponent has 5 or more cards in his or her hand, your opponent dicard a number of cards until your opponent has 4 cards left in his or her hand."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],


	retreat: 0,

	thirdParty: {
		tcgplayer: 87445,
		cardmarket: 276415
	},

	variants: [
		{
			type: "holo",
		},
		{
			type: "holo",
			stamp: ["set-logo"]
		}
	]
}

export default card
