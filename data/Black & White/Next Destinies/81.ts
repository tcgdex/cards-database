import { Card } from '../../../interfaces'
import Set from '../Next Destinies'

const card: Card = {
	name: {
		en: "Persian",
		fr: "Persian",
		es: "Persian",
		it: "Persian",
		pt: "Persian",
		de: "Snobilikat"
	},

	illustrator: "Shigenori Negishi",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		53,
	],

	hp: 90,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Meowth",
		fr: "Miaouss",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Nasty Plot",
				fr: "Machination",
			},
			effect: {
				en: "Search your deck for a card and put it into your hand. Shuffle your deck afterward.",
				fr: "Cherchez une carte dans votre deck puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Shadow Claw",
				fr: "Griffe Ombre",
			},
			effect: {
				en: "Flip a coin. If heads, discard a random card from your opponent's hand.",
				fr: "Lancez une pièce. Si c'est face, défaussez au hasard une carte de la main de votre adversaire.",
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

	retreat: 1,

	thirdParty: {
		cardmarket: 280306,
		tcgplayer: 87988
	}
}

export default card
