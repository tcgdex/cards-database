import { Card } from 'models/database/card'
import Set from '../Dragons Exalted'

const card: Card = {
	name: {
		'en-us': "Throh",
		'fr-fr': "Judokrak",
		'es-es': "Throh",
		'it-it': "Throh",
		'pt-br': "Throh",
		'de-de': "Jiutesto"
	},

	illustrator: "Midori Harada",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		538,
	],

	hp: 100,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Squeeze",
				'fr-fr': "Compression",
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 20 more damage and the Defending Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires et le Pokémon Défenseur est maintenant Paralysé.",
			},
			damage: 40,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Superpower",
				'fr-fr': "Surpuissance",
			},
			effect: {
				'en-us': "You may do 20 more damage. If you do, this Pokémon does 20 damage to itself.",
				'fr-fr': "Vous pouvez infliger 20 dégâts supplémentaires. Dans ce cas, ce Pokémon s'inflige 20 dégâts.",
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "When they encounter foes bigger than themselves, they try to throw them. They always travel in packs of five.",
	},

	thirdParty: {
		cardmarket: 280507,
		tcgplayer: 89901
	}
}

export default card
