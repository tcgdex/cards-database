import { Card } from "models/database/card"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	dexId: [38],

	name: {
		'en-us': "Alolan Ninetales ex"
	},

	illustrator: "PLANETA CG Works",
	rarity: "Four Diamond",
	category: "Pokemon",
	hp: 150,
	types: ["Water"],

	evolveFrom: {
		'en-us': "Alolan Vulpix"
	},

	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		name: {
			'en-us': "Binding Snow"
		},

		damage: 80,
		cost: ["Water", "Water"],

		effect: {
			'en-us': "During your opponent's next turn, they can't take any Energy from their Energy Zone to attach to their Active Pokémon."
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 2
}

export default card