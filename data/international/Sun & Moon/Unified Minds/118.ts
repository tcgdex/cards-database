import { Card } from 'models/database/card'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		'en-us': "Drilbur",
		'fr-fr': "Rototaupe",
		'es-es': "Drilbur",
		'it-it': "Drilbur",
		'pt-br': "Drilbur",
		'de-de': "Rotomurf"
	},

	illustrator: "Ken Sugimori",
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
			],
			name: {
				'en-us': "Dig Claws",
				'fr-fr': "Creusogriffes",
				'es-es': "Hundir Garras",
				'it-it': "Scavazanne",
				'pt-br': "Fincar Garras",
				'de-de': "Schaufelkrallen"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It makes its way swiftly through the soil by putting both claws together and rotating at high speed.",
	},

	thirdParty: {
		cardmarket: 388392,
		tcgplayer: 195073
	}
}

export default card
