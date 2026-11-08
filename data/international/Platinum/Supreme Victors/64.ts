import { Card } from 'models/database/card'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		'en-us': "Loudred",
		'fr-fr': "Ramboum",
		'de-de': "Krakeelo"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [294],

	hp: 80,

	types: [
		"Colorless"
	],

	evolveFrom: {
		'en-us': "Whismur",
		'fr-fr': "Chuchmur"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Smash Kick",
				'fr-fr': "Coud'pattes",
				'de-de': "Schmetterkick"
			},

			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Stomp Off",
				'fr-fr': "Trépignement",
				'de-de': "Davonstapfen"
			},
			effect: {
				'en-us': "Discard the top card from your opponent's deck.",
				'fr-fr': "Défaussez la carte du dessus du deck de votre adversaire.",
				'de-de': "Lege die oberste Karte vom Deck deines Gegners auf seinen Ablagestapel."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+20"
		},
	],
	retreat: 2,

	description: {
		'en-us': "The shock waves from its cries can tip over trucks. It stamps its feet to power up."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 86844,
				cardmarket: 278755
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278755,
				tcgplayer: 86844
			}
		},
	],

}

export default card
