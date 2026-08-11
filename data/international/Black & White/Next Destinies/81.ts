import { Card } from 'models/database/card'
import Set from '../Next Destinies'

const card: Card = {
	name: {
		'en-us': "Persian",
		'fr-fr': "Persian",
		'es-es': "Persian",
		'it-it': "Persian",
		'pt-br': "Persian",
		'de-de': "Snobilikat"
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
		'en-us': "Meowth",
		'fr-fr': "Miaouss",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Nasty Plot",
				'fr-fr': "Machination",
			},
			effect: {
				'en-us': "Search your deck for a card and put it into your hand. Shuffle your deck afterward.",
				'fr-fr': "Cherchez une carte dans votre deck puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Shadow Claw",
				'fr-fr': "Griffe Ombre",
			},
			effect: {
				'en-us': "Flip a coin. If heads, discard a random card from your opponent's hand.",
				'fr-fr': "Lancez une pièce. Si c'est face, défaussez au hasard une carte de la main de votre adversaire.",
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

	description: {
		'en-us': "A very haughty Pokémon. Among fans, the size of the jewel in its forehead is a topic of much talk.",
	},

	thirdParty: {
		cardmarket: 280306,
		tcgplayer: 87988
	}
}

export default card
