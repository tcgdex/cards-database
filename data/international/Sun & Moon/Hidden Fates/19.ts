import { Card } from 'models/database/card'
import Set from '../Hidden Fates'

const card: Card = {
	name: {
		'en-us': "Pikachu",
		'fr-fr': "Pikachu",
	},

	illustrator: "Kagemaru Himeno",
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
			],
			name: {
				'en-us': "Quick Attack",
				'fr-fr': "Vive-Attaque",
			},

			damage: 10,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Electro Ball",
				'fr-fr': "Boule Élek",
			},

			damage: 60,

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
		cardmarket: 394592,
		tcgplayer: 197663
	}
}

export default card
