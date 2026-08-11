import { Card } from 'models/database/card'
import Set from '../Dark Explorers'

const card: Card = {
	name: {
		'en-us': "Drilbur",
		'fr-fr': "Rototaupe",
		'es-es': "Drilbur",
		'it-it': "Drilbur",
		'pt-br': "Drilbur",
		'de-de': "Rotomurf"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		529,
	],

	hp: 70,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				'en-us': "Scratch",
				'fr-fr': "Griffe"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Lightning",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It makes its way swiftly through the soil by putting both claws together and rotating at high speed.",
	},

	thirdParty: {
		cardmarket: 280383,
		tcgplayer: 84966
	}
}

export default card
