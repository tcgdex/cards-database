import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Linoone"
	},

	illustrator: "match",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [264],
	hp: 100,
	types: ["Colorless"],

	evolveFrom: {
		'en-us': "Zigzagoon"
	},

	description: {
		'en-us': "It uses its explosive speed and razor-sharp claws\nto bring down prey. Running along winding\npaths is not its strong suit."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Jet Headbutt"
		},

		damage: 40,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,

	boosters: ["mega-altaria", "mega-blaziken", "mega-gyarados"]
}

export default card