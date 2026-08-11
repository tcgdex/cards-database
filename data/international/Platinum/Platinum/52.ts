import { Card } from 'models/database/card'
import Set from '../Platinum'

const card: Card = {
	name: {
		'en-us': "Lombre",
		'fr-fr': "Lombre",
		'de-de': "Lombrero"
	},

	illustrator: "Midori Harada",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [271],

	hp: 80,

	types: [
		"Grass"
	],

	evolveFrom: {
		'en-us': "Lotad",
		'fr-fr': "Nénupiot"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Interrupt",
				'fr-fr': "Interruption",
				'de-de': "Interrupt"
			},
			effect: {
				'en-us': "Flip a coin. If heads, look at your opponent's hand and choose 1 card, then have your opponent shuffle that card into his or her deck.",
				'fr-fr': "Lancez une pièce. Si c'est face, regardez la main de votre adversaire et choisissez-y une carte. Ensuite, demandez à votre adversaire de la mélanger à son deck.",
				'de-de': "Flip a coin. If heads, look at your opponent's hand and choose 1 card, then have your opponent shuffle that card into his or her deck."
			},
			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Gentle Slap",
				'fr-fr': "Gifle douce",
				'de-de': "Gentle Slap"
			},

			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It has a mischievous spirit. If it spots an angler, it will tug on the fishing line to interfere."
	},

	variants: [
		{
			type:"normal",
			thirdParty: {
				tcgplayer: 86820,
				cardmarket: 278473
			}
		},
		{
			type:"reverse",
			thirdParty: {
				cardmarket: 278473,
				tcgplayer: 86820
			}
		}
	],

}

export default card
