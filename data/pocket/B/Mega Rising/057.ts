import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Wailord"
	},

	illustrator: "KIYOTAKA OSHIYAMA",
	rarity: "Three Diamond",
	category: "Pokemon",

	dexId: [321],
	hp: 200,
	types: ["Water"],

	evolveFrom: {
		'en-us': "Wailmer"
	},

	description: {
		'en-us': "The biggest of all Pokémon. It can dive to a depth\nof almost 10,000 feet on only one breath."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Whale Pump"
		},

		damage: 60,
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"],

		effect: {
			'en-us': "This attack does 10 more damage for each {W} Energy attached to this Pokémon."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 4,

	boosters: ["mega-gyarados"]
}

export default card