import { Card } from 'models/database/card'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		'en-us': "Lucario",
		'fr-fr': "Lucario",
		'es-es': "Lucario",
		'it-it': "Lucario",
		'pt-br': "Lucario",
		'de-de': "Lucario"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		448,
	],

	hp: 110,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Riolu",
		'fr-fr': "Riolu",
		'es-es': "Riolu",
		'it-it': "Riolu",
		'pt-br': "Riolu",
		'de-de': "Riolu"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
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
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Magnum Kick",
				'fr-fr': "Coup d'Pied Magnum",
				'es-es': "Patada Mágnum",
				'it-it': "Supercalcio",
				'pt-br': "Chute Magnum",
				'de-de': "Magnumtritt"
			},

			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "By reading the auras of all things, it can tell how others are feeling from over half a mile away.",
	},

	thirdParty: {
		cardmarket: 289869,
		tcgplayer: 117807
	}
}

export default card
