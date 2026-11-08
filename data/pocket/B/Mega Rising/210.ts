import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Corvisquire"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [822],
	hp: 80,
	types: ["Colorless"],

	evolveFrom: {
		'en-us': "Rookidee"
	},

	description: {
		'en-us': "This intelligent Pokémon will quickly learn how to\nuse any tool it can hold in its beak or its talons."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Drill Peck"
		},

		damage: 40,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,

	boosters: ["mega-blaziken"]
}

export default card