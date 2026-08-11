import { Card } from 'models/database/card'
import Set from '../Emerging Powers'

const card: Card = {
	name: {
		'en-us': "Swadloon",
		'fr-fr': "Couverdure",
		'es-es': "Swadloon",
		'it-it': "Swadloon",
		'pt-br': "Swadloon",
		'de-de': "Folikon"
	},

	illustrator: "MAHOU",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		541,
	],

	hp: 70,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Sewaddle",
		'fr-fr': "Larveyette",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Grass Cocooning",
				'fr-fr': "Cocon Vert",
			},
			effect: {
				'en-us': "Heal 40 damage from this Pokémon.",
				'fr-fr': "Soignez 40 dégâts à ce Pokémon.",
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Razor Leaf",
				'fr-fr': "Tranch'Herbe",
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "Forests where Swadloon live have superb foliage because the nutrients they make from fallen leaves nourish the plant life.",
	},

	thirdParty: {
		cardmarket: 279970,
		tcgplayer: 89666
	}
}

export default card
