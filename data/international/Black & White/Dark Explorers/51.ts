import { Card } from 'models/database/card'
import Set from '../Dark Explorers'

const card: Card = {
	name: {
		'en-us': "Yamask",
		'fr-fr': "Tutafeh",
		'es-es': "Yamask",
		'it-it': "Yamask",
		'pt-br': "Yamask",
		'de-de': "Makabaja"
	},

	illustrator: "Aya Kusube",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		562,
	],

	hp: 60,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Astonish",
				'fr-fr': "Étonnement"
			},
			effect: {
				'en-us': "Flip a coin. If heads, choose a card at random from your opponent's hand. Your opponent reveals that card and shuffles it into his or her deck.",
				'fr-fr': "Lancez une pièce. Si c'est face, choisissez une carte au hasard de la main de votre adversaire. Votre adversaire montre la carte choisie et la mélange avec son deck."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Each of them carries a mask that used to be its face when it was human. Sometimes they look at it and cry.",
	},

	thirdParty: {
		cardmarket: 280379,
		tcgplayer: 90677
	}
}

export default card
