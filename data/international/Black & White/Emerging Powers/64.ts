import { Card } from 'models/database/card'
import Set from '../Emerging Powers'

const card: Card = {
	name: {
		'en-us': "Purrloin",
		'fr-fr': "Chacripan",
		'es-es': "Purrloin",
		'it-it': "Purrloin",
		'pt-br': "Purrloin",
		'de-de': "Felilou"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		509,
	],

	hp: 60,

	types: [
		"Darkness",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				'en-us': "Knock Off",
				'fr-fr': "Sabotage",
			},
			effect: {
				'en-us': "Flip a coin. If heads, discard a random card from your opponent's hand.",
				'fr-fr': "Lancez une pièce. Si c'est face, défaussez au hasard une carte de la main de votre adversaire.",
			},
			damage: 20,

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
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "They steal from people for fun, but their victims can't help but forgive them. Their deceptively cute act is perfect.",
	},

	thirdParty: {
		cardmarket: 280029,
		tcgplayer: 88458
	}
}

export default card
