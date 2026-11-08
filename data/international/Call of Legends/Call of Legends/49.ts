import { Card } from 'models/database/card'
import Set from '../Call of Legends'

const card: Card = {
	name: {
		'en-us': "Quilava",
		'fr-fr': "Feurisson",
		'de-de': "Igelavar"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [156],

	hp: 80,

	types: [
		"Fire"
	],

	evolveFrom: {
		'en-us': "Cyndaquil",
		'fr-fr': "Héricendre"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Flare",
				'fr-fr': "Intimidation",
				'de-de': "Flackern"
			},

			damage: 30,

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Flamethrower",
				'fr-fr': "Lance-flamme",
				'de-de': "Flammenwurf"
			},
			effect: {
				'en-us': "Discard an Energy attached to Quilava.",
				'fr-fr': "Défaussez une carte Énergie attachée à Feurisson.",
				'de-de': "Lege 1 an Igelavar angelegte Energie auf deinen Ablagestapel."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "x2"
		},
	],
	retreat: 1,


	description: {
		'en-us': "This Pokémon is fully covered by nonflammable fur. It can withstand any kind of fire attack.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 88487,
				cardmarket: 279692
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 88487,
				cardmarket: 279692
			},
		},
	],

}

export default card
