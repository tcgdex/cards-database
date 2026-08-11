import { Card } from 'models/database/card'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		'en-us': "Yungoos",
		'fr-fr': "Manglouton",
		'es-es': "Yungoos",
		'it-it': "Yungoos",
		'pt-br': "Yungoos",
		'de-de': "Mangunior"
	},

	illustrator: "Shigenori Negishi",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		734,
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
				'en-us': "Cavernous Chomp",
				'fr-fr': "Mâchoire Caverneuse",
				'es-es': "Mordisco Cavernoso",
				'it-it': "Mandibola Cavernosa",
				'pt-br': "Mastigada Cavernosa",
				'de-de': "Riesiger Biss"
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

	retreat: 1,

	description: {
		'en-us': "Its stomach takes up most of its long torso. It's a big eater, so the amount Trainers have to spend on its food is no laughing matter.",
	},

	thirdParty: {
		cardmarket: 388687,
		tcgplayer: 195183
	}
}

export default card
