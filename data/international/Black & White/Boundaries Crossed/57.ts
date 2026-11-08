import { Card } from 'models/database/card'
import Set from '../Boundaries Crossed'

const card: Card = {
	name: {
		'en-us': "Zebstrika",
		'fr-fr': "Zéblitz",
		'es-es': "Zebstrika",
		'it-it': "Zebstrika",
		'pt-br': "Zebstrika",
		'de-de': "Zebritz"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		523,
	],

	hp: 100,

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
				'en-us': "Flame Charge",
				'fr-fr': "Nitrocharge",
			},
			effect: {
				'en-us': "Search your deck for a Fire Energy card and attach it to this Pokémon. Shuffle your deck afterward.",
				'fr-fr': "Cherchez une carte Énergie Fire dans votre deck et attachez-la à ce Pokémon. Mélangez ensuite votre deck.",
			},

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Thunder",
				'fr-fr': "Fatal-Foudre",
			},
			effect: {
				'en-us': "Flip a coin. If tails, this Pokémon does 30 damage to itself.",
				'fr-fr': "Lancez une pièce. Si c'est pile, ce Pokémon s'inflige 30 dégâts.",
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
		'en-us': "When this ill-tempered Pokémon runs wild, it shoots lightning from its mane in all directions.",
	},

	thirdParty: {
		cardmarket: 280644,
		tcgplayer: 90731
	}
}

export default card
