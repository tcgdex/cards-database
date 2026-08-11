import { Card } from 'models/database/card'
import Set from '../Double Crisis'

const card: Card = {
	name: {
		'en-us': "Team Magma's Aron",
		'fr-fr': "Galekid de la Team Magma",
		'pt-br': "Aron da Equipe Magma",
	},

	illustrator: "Akira Komayama",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		304,
	],

	hp: 60,

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
				'en-us': "Gnaw",
				'fr-fr': "Ronge",
				'pt-br': "Roída",
			},

			damage: 10,

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
		'en-us': "Aron, which even devour metal, can eat and destroy enemy ships in an instant.",
	},

	thirdParty: {
		cardmarket: 282523,
		tcgplayer: 97058
	}
}

export default card
