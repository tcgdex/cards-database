import { Card } from "models/database/card"
import Set from "../Crimson Blaze"

const card: Card = {
	set: Set,

	dexId: [95],

	name: {
		'en-us': "Onix"
	},

	illustrator: "Naoyo Kimura",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],

	description: {
		'en-us': "It rapidly bores through the ground at 50 mph by\nsquirming and twisting its massive, rugged body."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Dig"
		},

		damage: 30,
		cost: ["Colorless", "Colorless", "Colorless"],

		effect: {
			'en-us': "Flip a coin. If heads, during your opponent's next turn, prevent all damage from—and effects of—attacks done to this Pokémon."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 3
}

export default card