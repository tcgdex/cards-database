import { Card } from 'models/database/card'
import Set from '../Legendary Treasures'

const card: Card = {
	name: {
		'en-us': "Serperior",
	},

	illustrator: "hatachu",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		497,
	],

	hp: 130,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Servine",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Royal Heal",
			},
			effect: {
				'en-us': "At any time between turns, heal 10 damage from each of your Pokémon.",
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Leaf Tornado",
			},
			effect: {
				'en-us': "Move as many Grass Energy attached to your Pokémon to your other Pokémon in any way you like.",
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "They raise their heads to intimidate opponents but only give it their all when fighting a powerful opponent.",
	},

	thirdParty: {
		cardmarket: 281151,
		tcgplayer: 89074
	}
}

export default card
