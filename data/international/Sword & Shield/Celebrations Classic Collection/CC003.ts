import { Card } from 'models/database/card'
import Set from '../Celebrations Classic Collection'

const card: Card = {
	dexId: [3],
	set: Set,

	name: {
		'en-us': "Venusaur",
		'fr-fr': "Florizarre",
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Classic Collection",
	category: "Pokemon",
	hp: 100,
	types: ["Grass"],
	stage: "Stage2",

	attacks: [
		{
			name: {
				'en-us': "Solarbeam",
				'fr-fr': "Lance-Soleil",
			},
			damage: 60,
			cost: [
				"Grass",
				"Grass",
				"Grass",
				"Grass",
			],
		},
	],

	weaknesses: [{
		type: "Fire",
		value: ""
	}],

	retreat: 2,


	description: {
		'en-us': "This plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight.",
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 576773,
				tcgplayer: 250321
			}
		},
	],
}

export default card
