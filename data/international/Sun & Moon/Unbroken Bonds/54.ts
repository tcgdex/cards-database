import { Card } from 'models/database/card'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		'en-us': "Pikachu",
		'fr-fr': "Pikachu",
		'es-es': "Pikachu",
		'it-it': "Pikachu",
		'pt-br': "Pikachu",
		'de-de': "Pikachu"
	},

	illustrator: "nagimiso",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		25,
	],

	hp: 70,

	types: [
		"Lightning",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Pika Ball",
				'fr-fr': "Pika Ball",
				'es-es': "Pika Ball",
				'it-it': "Pikasfera",
				'pt-br': "Bola Pikachu",
				'de-de': "Pikaball"
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

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Its nature is to store up electricity. Forests where nests of Pikachu live are dangerous, since the trees are so often struck by lightning.",
	},

	thirdParty: {
		cardmarket: 372345,
		tcgplayer: 189153
	}
}

export default card
