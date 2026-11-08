import { Card } from "models/database/card"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	dexId: [830],

	name: {
		'en-us': "Eldegoss"
	},

	illustrator: "kodama",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	evolveFrom: {
		'en-us': "Gossifleur"
	},

	description: {
		'en-us': "The cotton on the head of this Pokémon can be\nspun into a glossy, gorgeous yarn—a Galar\nregional specialty."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Float Up"
		},

		damage: 40,
		cost: ["Grass"],

		effect: {
			'en-us': "You may shuffle this Pokémon and all attached cards into your deck."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1
}

export default card