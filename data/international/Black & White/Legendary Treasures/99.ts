import { Card } from 'models/database/card'
import Set from '../Legendary Treasures'

const card: Card = {
	name: {
		'en-us': "Hydreigon",
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		635,
	],

	hp: 150,

	types: [
		"Dragon",
	],

	evolveFrom: {
		'en-us': "Zweilous",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Dark Trance",
			},
			effect: {
				'en-us': "As often as you like during your turn (before your attack), you may move a Darkness Energy attached to 1 of your Pokémon to another of your Pokémon.",
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Darkness",
				"Darkness",
				"Colorless",
			],
			name: {
				'en-us': "Dragonblast",
			},
			effect: {
				'en-us': "Discard 2 Darkness Energy attached to this Pokémon.",
			},
			damage: 140,

		},
	],

	weaknesses: [
		{
			type: "Dragon",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "This brutal Pokémon travels the skies on its six wings. Anything that moves seems like a foe to it, triggering its attack.",
	},

	thirdParty: {
		cardmarket: 281250,
		tcgplayer: 86243
	}
}

export default card
