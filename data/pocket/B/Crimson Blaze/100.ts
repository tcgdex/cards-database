import { Card } from "models/database/card"
import Set from "../Crimson Blaze"

const card: Card = {
	set: Set,

	dexId: [799],

	name: {
		'en-us': "Guzzlord ex"
	},

	illustrator: "PLANETA Yamashita",
	rarity: "Two Shiny",
	category: "Pokemon",
	hp: 170,
	types: ["Darkness"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			'en-us': "Grindcore"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"],

		effect: {
			'en-us': "Flip a coin until you get tails. For each heads, discard a random Energy from your opponent's Active Pokémon."
		}
	}, {
		name: {
			'en-us': "Tyrannical Hole"
		},

		damage: 120,
		cost: ["Darkness", "Darkness", "Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 4
}

export default card