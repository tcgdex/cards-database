import { Card } from '../../../interfaces'
import Set from '../Celebrations'

const card: Card = {
	dexId: [3],
	set: Set,

	name: {
		en: "Venusaur",
		fr: "Florizarre",
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
				en: "Solarbeam",
				fr: "Lance-Soleil",
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

	variants: {
		normal: false,
		reverse: false
	},

	description: {
		en: "This plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight.",
	},

	thirdParty: {
		cardmarket: 576773
	}
}

export default card
