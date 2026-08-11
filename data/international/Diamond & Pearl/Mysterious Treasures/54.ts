import { Card } from 'models/database/card'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		'en-us': "Magmar",
		'fr-fr': "Magmar",
		'de-de': "Magmar"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		126,
	],

	hp: 70,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				'en-us': "Flare",
				'fr-fr': "Intimidation",
				'de-de': "Flackern"
			},

			damage: 20,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Flamethrower",
				'fr-fr': "Lance-flamme",
				'de-de': "Flammenwurf"
			},
			effect: {
				'en-us': "Discard an Energy attached to Magmar.",
				'fr-fr': "Défaussez une Énergie attachée à Magmar.",
				'de-de': "Lege 1 an Magmar angelegte Energie auf deinen Ablagestapel."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "+20"
		},
	],
	retreat: 2,


	description: {
		'en-us': "Born in the spout of a volcano, its body is covered by flames that shimmer like the sun.",
		'fr-fr': "Il est né au milieu d'un volcan. Son corps est couvert de flammes qui flambent comme un soleil."
	},

	thirdParty: {
		cardmarket: 277683,
		tcgplayer: 87047
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		}
	]
}

export default card
