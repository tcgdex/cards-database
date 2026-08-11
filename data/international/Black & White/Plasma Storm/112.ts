import { Card } from 'models/database/card'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		'en-us': "Watchog",
		'fr-fr': "Miradar",
		'es-es': "Watchog",
		'it-it': "Watchog",
		'pt-br': "Watchog",
		'de-de': "Kukmarda"
	},

	illustrator: "5ban Graphics",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		505,
	],

	hp: 90,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Patrat",
		'fr-fr': "Ratentif",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Fast Swipe",
				'fr-fr': "Fauchage Éclair",
			},
			effect: {
				'en-us': "Discard a random card from your opponent's hand.",
				'fr-fr': "Défaussez au hasard une carte de la main de votre adversaire.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Biting Fang",
				'fr-fr': "Croc Mordant",
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 20 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires.",
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
		'en-us': "Using luminescent matter, it makes its eyes and body glow and stuns attacking opponents.",
	},

	thirdParty: {
		cardmarket: 280852,
		tcgplayer: 90498
	}
}

export default card
