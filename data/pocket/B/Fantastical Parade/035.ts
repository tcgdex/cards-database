import { Card } from "models/database/card"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	dexId: [260],

	name: {
		'en-us': "Swampert"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 150,
	types: ["Water"],

	evolveFrom: {
		'en-us': "Marshtomp"
	},

	description: {
		'en-us': "Swampert's arms are rock-hard. With one swing,\nthey can batter down Swampert's foes. This\nPokémon makes its nest on beautiful beaches."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'en-us': "Large Whirlpool"
		},

		damage: 100,
		cost: ["Water", "Water", "Water"],

		effect: {
			'en-us': "Discard a random Energy from among the Energy attached to all Pokémon (both yours and your opponent's)."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 3
}

export default card