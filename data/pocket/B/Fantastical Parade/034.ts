import { Card } from "models/database/card"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	dexId: [259],

	name: {
		'en-us': "Marshtomp"
	},

	illustrator: "sui",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	evolveFrom: {
		'en-us': "Mudkip"
	},

	description: {
		'en-us': "It is at its best when on muddy ground that offers\npoor footing. It quickly overwhelms opponents\nthat are bogged down and unable to move."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Surf"
		},

		damage: 40,
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 2
}

export default card