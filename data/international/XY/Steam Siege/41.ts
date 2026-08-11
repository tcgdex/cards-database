import { Card } from 'models/database/card'
import Set from '../Steam Siege'

const card: Card = {
	name: {
		'en-us': "Joltik",
		'fr-fr': "Statitik",
		'es-es': "Joltik",
		'it-it': "Joltik",
		'pt-br': "Joltik",
		'de-de': "Wattzapf"
	},

	illustrator: "Ayaka Yoshida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		595,
	],

	hp: 30,

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
				'en-us': "Attach",
				'fr-fr': "Accrochage",
				'es-es': "Pegarse",
				'it-it': "Appiccicoso",
				'pt-br': "Conectar",
				'de-de': "Festkleben"
			},

			damage: 10,

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

	retreat: 0,

	description: {
		'en-us': "They attach themselves to large-bodied Pokémon and absorb static electricity, which they store in an electric pouch.",
	},

	thirdParty: {
		cardmarket: 291534,
		tcgplayer: 121130
	}
}

export default card
