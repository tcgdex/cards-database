import { Card } from 'models/database/card'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		'en-us': "Mienshao",
		'fr-fr': "Shaofouine",
		'es-es': "Mienshao",
		'it-it': "Mienshao",
		'pt-br': "Mienshao",
		'de-de': "Wie-Shu"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		620,
	],

	hp: 90,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Mienfoo",
		'fr-fr': "Kungfouine",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Knock Off",
				'fr-fr': "Sabotage",
			},
			effect: {
				'en-us': "Discard a random card from your opponent's hand.",
				'fr-fr': "Défaussez au hasard une carte de la main de votre adversaire.",
			},
			damage: 20,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Double Whip",
				'fr-fr': "Double Fouet",
			},
			effect: {
				'en-us': "Flip 2 coins. This attack does 70 damage times the number of heads.",
				'fr-fr': "Lancez 2 pièces. Cette attaque inflige 70 dégâts multipliés par le nombre de côtés face.",
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Using the long fur on its arms like whips, it launches into combo attacks that, once started, no one can stop.",
	},

	thirdParty: {
		cardmarket: 280675,
		tcgplayer: 87442
	}
}

export default card
