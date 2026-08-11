import { Card } from 'models/database/card'
import Set from '../Crimson Invasion'

const card: Card = {
	name: {
		'en-us': "Houndour",
		'fr-fr': "Malosse",
		'es-es': "Houndour",
		'it-it': "Houndour",
		'pt-br': "Houndour",
		'de-de': "Hunduster"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		228,
	],

	hp: 60,

	types: [
		"Darkness",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				'en-us': "Rear Kick",
				'fr-fr': "Ruade",
				'es-es': "Patada Trasera",
				'it-it': "Retrocalcio",
				'pt-br': "Chute Traseiro",
				'de-de': "Rückwärtskick"
			},

			damage: 10,

		},
		{
			cost: [
				"Darkness",
				"Colorless",
			],
			name: {
				'en-us': "Darkness Fang",
				'fr-fr': "Croc Obscur",
				'es-es': "Colmillo de Oscuridad",
				'it-it': "Oscurizanna",
				'pt-br': "Presa Sombria",
				'de-de': "Fänge der Dunkelheit"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Around dawn, its ominous howl echoes through the area to announce that this is its territory.",
	},

	thirdParty: {
		cardmarket: 311907,
		tcgplayer: 149081
	}
}

export default card
