import { Card } from 'models/database/card'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		'en-us': "Espurr",
		'fr-fr': "Psystigri",
		'es-es': "Espurr",
		'it-it': "Espurr",
		'pt-br': "Espurr",
		'de-de': "Psiau"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		677,
	],

	hp: 60,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
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

			damage: 10,

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
		'en-us': "It has enough psychic energy to blast everything within 300 feet of itself, but it has no control over its power.",
	},

	thirdParty: {
		cardmarket: 288233,
		tcgplayer: 111599
	}
}

export default card
