import { Card } from 'models/database/card'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Psyduck",
		'fr-fr': "Psykokwak",
		'es-es': "Psyduck",
		'it-it': "Psyduck",
		'pt-br': "Psyduck",
		'de-de': "Enton"
	},

	illustrator: "Framestore",
	rarity: "Promo",
	category: "Pokemon",
	set: Set,

	dexId: [
		54,
	],

	hp: 70,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Scratch",
				'fr-fr': "Griffe",
				'es-es': "Arañazo",
				'it-it': "Graffio",
				'pt-br': "Arranhão",
				'de-de': "Kratzer"
			},

			damage: 30,

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
		'en-us': "Using psychokinesis gives it a headache, so it normally passes the time spacing out and doing as little as possible.",
	},
}

export default card
