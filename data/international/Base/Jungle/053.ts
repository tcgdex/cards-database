import { Card } from 'models/database/card'
import Set from '../Jungle'

const card: Card = {
	name: {
		'en-us': "Goldeen",
		'fr-fr': "Poissirène",
		'de-de': "Goldini"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		118,
	],

	hp: 40,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Horn Attack",
				'fr-fr': "Koud'korne",
				'de-de': "Kopfnuss"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	description: {
		'en-us': "Its tail fin billows like an elegant ballroom dress, giving it the nickname \"Water Queen.\"",
		'fr-fr': "Sa queue ondule gracieusement comme un voile. On l'appelle: \"Reine des Océans\"."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 273850,
				tcgplayer: 45156
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 273850,
				tcgplayer: 45156
			}
		}
	],
}

export default card
