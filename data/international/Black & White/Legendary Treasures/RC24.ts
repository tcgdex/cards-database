import { Card } from 'models/database/card'
import Set from '../Legendary Treasures'

const card: Card = {
	name: {
		'en-us': "Mew-EX",
	},
	illustrator: "MAHOU",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		151,
	],
	hp: 120,
	types: [
		"Psychic",
	],


	suffix: "EX",
	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Versatile",
			},
			effect: {
				'en-us': "This Pokémon can use the attacks of any Pokémon in play (both yours and your opponent's). (You still need the necessary Energy to use each attack.)",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Replace",
			},
			effect: {
				'en-us': "Move as many Energy attached to your Pokémon to your other Pokémon in any way you like.",
			},

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],
	retreat: 1,



	thirdParty: {
		cardmarket: 281148
	}


}

export default card
