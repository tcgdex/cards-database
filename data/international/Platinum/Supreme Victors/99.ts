import { Card } from 'models/database/card'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		'en-us': "Combee",
		'fr-fr': "Apitrini",
		'de-de': "Wadribie"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [415],

	hp: 40,

	types: [
		"Grass"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Nap",
				'fr-fr': "Tit'sieste",
				'de-de': "Nickerchen"
			},
			effect: {
				'en-us': "Remove 2 damage counters from Combee.",
				'fr-fr': "Retirez à Apitrini 2 marqueurs de dégât.",
				'de-de': "Entferne 2 Schadensmarken von Wadribie."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Zzzt",
				'fr-fr': "Bzzz",
				'de-de': "Piiieks"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+10"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],
	retreat: 1,

	description: {
		'en-us': "The trio is together from birth. It constantly gathers honey from flowers to please Vespiquen."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 84396,
				cardmarket: 278790
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278790,
				tcgplayer: 84396
			}
		},
	],

}

export default card
