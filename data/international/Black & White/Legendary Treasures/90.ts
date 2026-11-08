import { Card } from 'models/database/card'
import Set from '../Legendary Treasures'

const card: Card = {
	name: {
		'en-us': "Zoroark",
	},

	illustrator: "match",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		571,
	],

	hp: 100,

	types: [
		"Darkness",
	],

	evolveFrom: {
		'en-us': "Zorua",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Brutal Bash",
			},
			effect: {
				'en-us': "Does 20 damage times the number of Darkness Pokémon you have in play.",
			},
			damage: 20,

		},
		{
			cost: [
				"Darkness",
				"Darkness",
			],
			name: {
				'en-us': "Dark Rush",
			},
			effect: {
				'en-us': "Does 20 damage times the number of damage counters on this Pokémon.",
			},
			damage: 20,

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
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "Bonds between these Pokémon are very strong. It protects the safety of its pack by tricking its opponents.",
	},

	thirdParty: {
		cardmarket: 281241,
		tcgplayer: 90755
	}
}

export default card
