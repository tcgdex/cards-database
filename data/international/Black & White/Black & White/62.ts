import { Card } from 'models/database/card'
import Set from '../Black & White'

const card: Card = {
	name: {
		'en-us': "Sawk",
		'fr-fr': "Karaclée",
		'es-es': "Sawk",
		'it-it': "Sawk",
		'pt-br': "Sawk",
		'de-de': "Karadonis"
	},

	illustrator: "Naoki Saito",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		539,
	],

	hp: 90,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Low Sweep",
				'fr-fr': "Balayette",
			},

			damage: 20,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				'en-us': "Beatdown",
				'fr-fr': "Dérouillée",
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

	retreat: 1,

	description: {
		'en-us': "The sound of Sawk punching boulders and trees can be heard all the way from the mountains where they train.",
	},

	thirdParty: {
		cardmarket: 279800,
		tcgplayer: 88937
	}
}

export default card
