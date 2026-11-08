import { Card } from 'models/database/card'
import Set from '../Legendary Treasures'

const card: Card = {
	name: {
		'en-us': "Reshiram",
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		643,
	],

	hp: 130,

	types: [
		"Fire",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Outrage",
			},
			effect: {
				'en-us': "Does 10 more damage for each damage counter on this Pokémon.",
			},
			damage: 20,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Blue Flare",
			},
			effect: {
				'en-us': "Discard 2 Fire Energy attached to this Pokémon.",
			},
			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],
	retreat: 2,


	description: {
		'en-us': "This legendary Pokémon can scorch the world with fire. It helps those who want to build a world of truth.",
	},

	thirdParty: {
		cardmarket: 281139
	}
}

export default card
