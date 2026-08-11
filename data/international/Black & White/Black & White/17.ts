import { Card } from 'models/database/card'
import Set from '../Black & White'

const card: Card = {
	name: {
		'en-us': "Pignite",
		'fr-fr': "Grotichon",
		'es-es': "Pignite",
		'it-it': "Pignite",
		'pt-br': "Pignite",
		'de-de': "Ferkokel"
	},

	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		499,
	],

	hp: 100,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Tepig",
		'fr-fr': "Gruikui",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Flame Charge",
				'fr-fr': "Nitrocharge",
			},
			effect: {
				'en-us': "Search your deck for a Fire Energy card and attach it to this Pokémon. Shuffle your deck afterward.",
				'fr-fr': "Cherchez une carte Énergie Fire dans votre deck et attachez-la à ce Pokémon. Mélangez ensuite votre deck.",
			},

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Heat Crash",
				'fr-fr': "Tacle Feu",
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "When its internal fire flares up, its movements grow sharper and faster. When in trouble, it emits smoke.",
	},

	thirdParty: {
		cardmarket: 279755,
		tcgplayer: 88060
	}
}

export default card
