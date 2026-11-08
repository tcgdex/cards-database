import { Card } from 'models/database/card'
import Set from '../Legendary Treasures'

const card: Card = {
	name: {
		'en-us': "Samurott",
	},

	illustrator: "Naoki Saito",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		503,
	],

	hp: 140,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Dewott",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Shell Armor",
			},
			effect: {
				'en-us': "Any damage done to this Pokémon by attacks is reduced by 20 (after applying Weakness and Resistance).",
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Hydro Pump",
			},
			effect: {
				'en-us': "Does 10 more damage for each Water Energy attached to this Pokémon.",
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "Part of the armor on its anterior legs becomes a giant sword. Its cry alone is enough to intimidate most enemies.",
	},

	thirdParty: {
		cardmarket: 281190,
		tcgplayer: 88911
	}
}

export default card
