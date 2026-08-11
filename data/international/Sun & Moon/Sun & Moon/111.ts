import { Card } from 'models/database/card'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		'en-us': "Stufful",
		'fr-fr': "Nounourson",
		'es-es': "Stufful",
		'it-it': "Stufful",
		'pt-br': "Stufful",
		'de-de': "Velursi"
	},

	illustrator: "Sanosuke Sakuma",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		759,
	],

	hp: 70,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Tackle",
				'fr-fr': "Charge",
				'es-es': "Placaje",
				'it-it': "Azione",
				'pt-br': "Investida",
				'de-de': "Tackle"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "Despite its adorable appearance, when it gets angry and flails about, its arms and legs could knock a pro wrestler sprawling.",
	},

	thirdParty: {
		cardmarket: 295423,
		tcgplayer: 126983
	}
}

export default card
