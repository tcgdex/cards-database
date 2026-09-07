import { Card } from 'models/database/card'
import Set from '../Base Set'

const card: Card = {
	name: {
		'en-us': "Seel",
		'fr-fr': "Otaria",
		'de-de': "Jurob",
		'it-it': "Seel"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		86,
	],

	hp: 60,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Headbutt",
				'fr-fr': "Coup d'Boule",
				'de-de': "Kopfnuss",
				'it-it': "Bottintesta"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	retreat: 1,


	description: {
		'en-us': "The protruding horn on its head is very hard. This horn is used for bashing through thick ice.",
		'fr-fr': "La corne sur son front est très résistante. Elle lui sert à percer des blocs de glace.",
		'it-it': "Il corno che ha sulla testa è molto resistente e gli permette di sfondare anche le superfici di ghiaccio. LIV 12 N.86",
	},

	variants: [
		{
			type: "normal",
			subtype: "unlimited",
			thirdParty: {
				cardmarket: 273736,
				tcgplayer: 42384
			},
		},
		{
			type: "normal",
			subtype: "shadowless",
			stamp: ["1st-edition"],
			thirdParty: {
				tcgplayer: 107038
			},
		},
		{
			type: "normal",
			subtype: "shadowless",
			thirdParty: {
				tcgplayer: 107038
			},
		},
		{
			type: "normal",
			subtype: "1999-2000-copyright",
		}
	],
}

export default card
