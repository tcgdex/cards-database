import { Card } from 'models/database/card'
import Set from '../Plasma Freeze'

const card: Card = {
	name: {
		'en-us': "Dratini",
		'fr-fr': "Minidraco",
		'es-es': "Dratini",
		'it-it': "Dratini",
		'pt-br': "Dratini",
		'de-de': "Dratini"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		147,
	],

	hp: 50,

	types: [
		"Dragon",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Shed Skin",
				'fr-fr': "Mue",
			},
			effect: {
				'en-us': "Heal 20 damage from this Pokémon.",
				'fr-fr': "Soignez 20 dégâts à ce Pokémon.",
			},

		},
		{
			cost: [
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Tail Smack",
				'fr-fr': "Coup de Queue",
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Dragon",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It is called the \"Mirage Pokémon\" because so few have seen it. Its shed skin has been found.",
	},

	thirdParty: {
		cardmarket: 280959,
		tcgplayer: 84939
	}
}

export default card
