import { Card } from 'models/database/card'
import Set from '../Dragons Exalted'

const card: Card = {
	name: {
		'en-us': "Cubone",
		'fr-fr': "Osselait",
		'es-es': "Cubone",
		'it-it': "Cubone",
		'pt-br': "Cubone",
		'de-de': "Tragosso"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		104,
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
				'en-us': "Headbutt",
				'fr-fr': "Coup d'Boule",
			},

			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Beat",
				'fr-fr': "Bataille",
			},

			damage: 20,

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

	retreat: 1,

	description: {
		'en-us': "When it thinks of its dead mother, it cries. Its crying makes the skull it wears rattle hollowly.",
	},

	thirdParty: {
		cardmarket: 280499,
		tcgplayer: 84536
	}
}

export default card
