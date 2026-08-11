import { Card } from 'models/database/card'
import Set from '../Arceus'

const card: Card = {
	name: {
		'en-us': "Gastly",
		'de-de': "Nebulak"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [92],
	
	hp: 50,

	types: [
		"Psychic"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Gnaw",
				'de-de': "Nagen"
			},

			damage: 10,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Suffocating Gas",
				'de-de': "Würgegas"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "+10"
		},
	],

	resistances: [
		{
			type: "Colorless",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Born from gases, anyone would faint if engulfed by its gaseous body, which contains poison."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 85655,
				cardmarket: 278908
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278908,
				tcgplayer: 85655
			}
		},
	],

}

export default card
