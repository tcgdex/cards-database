import { Card } from 'models/database/card'
import Set from '../Noble Victories'

const card: Card = {
	name: {
		'en-us': "Zebstrika",
		'fr-fr': "Zéblitz",
		'es-es': "Zebstrika",
		'it-it': "Zebstrika",
		'pt-br': "Zebstrika",
		'de-de': "Zebritz"
	},

	illustrator: "match",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		523,
	],

	hp: 90,

	types: [
		"Lightning",
	],

	evolveFrom: {
		'en-us': "Blitzle",
		'fr-fr': "Zébibron",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Quick Attack",
				'fr-fr': "Vive-Attaque",
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 20 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires.",
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
				'en-us': "Shock Bolt",
				'fr-fr': "Choc'Éclair",
			},
			effect: {
				'en-us': "Flip a coin. If tails, discard all Lightning Energy attached to this Pokémon.",
				'fr-fr': "Lancez une pièce. Si c'est pile, défaussez toutes les Énergies Lightning attachées à ce Pokémon.",
			},
			damage: 90,

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
		'en-us': "They have lightning-like movements. When Zebstrika run at full speed, the sound of thunder reverberates.",
	},

	thirdParty: {
		cardmarket: 280159,
		tcgplayer: 90729
	}
}

export default card
