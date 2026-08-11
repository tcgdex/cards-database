import { Card } from 'models/database/card'
import Set from '../Next Destinies'

const card: Card = {
	name: {
		'en-us': "Munna",
		'fr-fr': "Munna",
		'es-es': "Munna",
		'it-it': "Munna",
		'pt-br': "Munna",
		'de-de': "Somniam"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		517,
	],

	hp: 70,

	types: [
		"Psychic",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Ram",
				'fr-fr': "Collision",
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It eats the dreams of people and Pokémon. When it eats a pleasant dream, it expels pink-colored mist.",
	},

	thirdParty: {
		cardmarket: 280283,
		tcgplayer: 87643
	}
}

export default card
