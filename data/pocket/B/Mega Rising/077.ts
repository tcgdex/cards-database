import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Drednaw"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [834],
	hp: 130,
	types: ["Water"],

	evolveFrom: {
		'en-us': "Chewtle"
	},

	description: {
		'en-us': "Drednaw lurks along the shoreline. When prey\ncome to drink water, Drednaw stretches its neck\nout and chomps down on them."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Jaw Lock"
		},

		damage: 70,
		cost: ["Water", "Water", "Colorless"],

		effect: {
			'en-us': "During your opponent's next turn, the Defending Pokémon can't retreat."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 3,

	boosters: ["mega-gyarados"]
}

export default card