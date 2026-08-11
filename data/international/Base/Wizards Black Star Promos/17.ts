import { Card } from 'models/database/card'
import Set from '../Wizards Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Dark Persian",
	},
	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		53,
	],
	hp: 60,
	types: [
		"Colorless",
	],
	evolveFrom: {
		'en-us': "Meowth",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Tempt",
			},
			effect: {
				'en-us': "If your opponent has any Benched Pokémon, flip a coin. If heads, choose 1 of your opponent's Benched Pokémon and switch it with the Defending Pokémon.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Poison Claws",
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Poisoned.",
			},

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
			value: "-30"
		},
	],

	description: {
		'en-us': "Popular with women because of its beautiful fur. The leader of the Rockets keeps one as a pet.",
	},

	variants: [
		{
			type: "holo",
			foil: "cosmos",
			thirdParty: {
				tcgplayer: 84638
			},
		},
		{
			type: "holo",
			subtype: "missing-hp"
		}
	]




}

export default card
