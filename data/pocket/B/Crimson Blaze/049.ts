import { Card } from "models/database/card"
import Set from "../Crimson Blaze"

const card: Card = {
	set: Set,

	dexId: [568],

	name: {
		'en-us': "Trubbish"
	},

	illustrator: "Shibuzoh.",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	description: {
		'en-us': "Its favorite places are unsanitary ones. If you\nleave trash lying around, you could even find\none of these Pokémon living in your room."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Drool"
		},

		damage: 30,
		cost: ["Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card