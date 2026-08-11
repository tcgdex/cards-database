import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Dusclops"
	},

	illustrator: "Kazuma Koda",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [356],
	hp: 90,
	types: ["Psychic"],

	evolveFrom: {
		'en-us': "Duskull"
	},

	description: {
		'en-us': "It seeks drifting will-o'-the-wisps and sucks them\ninto its empty body. What happens inside is\na mystery."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Will-O-Wisp"
		},

		damage: 30,
		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 2,

	boosters: ["mega-blaziken"]
}

export default card