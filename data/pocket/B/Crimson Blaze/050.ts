import { Card } from "models/database/card"
import Set from "../Crimson Blaze"

const card: Card = {
	set: Set,

	dexId: [569],

	name: {
		'en-us': "Garbodor"
	},

	illustrator: "Aya Kusube",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 130,
	types: ["Darkness"],

	evolveFrom: {
		'en-us': "Trubbish"
	},

	description: {
		'en-us': "This Pokémon eats trash, which turns into poison\ninside its body. The main component of the\npoison depends on what sort of trash was eaten."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Acid Spray"
		},

		damage: 70,
		cost: ["Darkness", "Darkness", "Colorless"],

		effect: {
			'en-us': "Flip a coin. If heads, discard a random Energy from your opponent's Active Pokémon."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 3
}

export default card