import { Card } from 'models/database/card'
import Set from '../Black & White'

const card: Card = {
	name: {
		'en-us': "Joltik",
		'fr-fr': "Statitik",
		'es-es': "Joltik",
		'it-it': "Joltik",
		'pt-br': "Joltik",
		'de-de': "Wattzapf"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		595,
	],

	hp: 40,

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
				'en-us': "Stun Needle",
				'fr-fr': "Para-Dard",
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c’est face, le Pokémon Défenseur est maintenant Paralysé.",
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

	retreat: 1,

	description: {
		'en-us': "They attach themselves to large-bodied Pokémon and absorb static electricity, which they store in an electric pouch.",
	},

	thirdParty: {
		cardmarket: 279782,
		tcgplayer: 86353
	}
}

export default card
