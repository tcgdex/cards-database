import { Card } from 'models/database/card'
import Set from '../Hidden Fates Shiny Vault'

const card: Card = {
	name: {
		'en-us': "Ralts",
		'fr-fr': "Tarsal",
	},
	illustrator: "Kyoko Umemoto",
	rarity: "Shiny rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		280,
	],
	hp: 60,
	types: [
		"Fairy",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Fairy",
			],
			name: {
				'en-us': "Draining Kiss",
				'fr-fr': "Vampibaiser",
			},
			effect: {
				'en-us': "Heal 10 damage from this Pokémon.",
				'fr-fr': "Soignez 10 dégâts à ce Pokémon.",
			},
			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],
	retreat: 1,




	description: {
		'en-us': "If its horns capture the warm feelings of people or Pokémon, its body warms up slightly.",
	},
}

export default card
