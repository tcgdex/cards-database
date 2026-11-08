import { Card } from 'models/database/card'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		'en-us': "Machoke",
		'fr-fr': "Machopeur",
		'es-es': "Machoke",
		'it-it': "Machoke",
		'pt-br': "Machoke",
		'de-de': "Maschock"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		67,
	],

	hp: 90,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Machop",
		'fr-fr': "Machoc",
		'es-es': "Machop",
		'it-it': "Machop",
		'pt-br': "Machop",
		'de-de': "Machollo"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				'en-us': "Beatdown",
				'fr-fr': "Dérouillée",
				'es-es': "Derrumbar",
				'it-it': "Batosta",
				'pt-br': "Abater",
				'de-de': "Niederprügler"
			},

			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "Its muscular body is so powerful, it must wear a power-save belt to be able to regulate its motions.",
	},

	thirdParty: {
		cardmarket: 281709,
		tcgplayer: 92222
	}
}

export default card
