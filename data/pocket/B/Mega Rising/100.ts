import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Mismagius"
	},

	illustrator: "NC Empire",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [429],
	hp: 90,
	types: ["Psychic"],

	evolveFrom: {
		'en-us': "Misdreavus"
	},

	description: {
		'en-us': "Its cries sound like incantations to torment the\nfoe. It appears where you least expect it."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Spooky Shot"
		},

		damage: 70,
		cost: ["Psychic", "Psychic"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1,

	boosters: ["mega-altaria", "mega-blaziken", "mega-gyarados"]
}

export default card