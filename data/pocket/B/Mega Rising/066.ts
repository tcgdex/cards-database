import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Tirtouga"
	},

	illustrator: "HYOGONOSUKE",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [564],
	hp: 90,
	types: ["Water"],

	evolveFrom: {
		'en-us': "Cover Fossil"
	},

	description: {
		'en-us': "Tirtouga is considered to be the ancestor of\nmany turtle Pokémon. It was restored to life\nfrom a fossil."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Shell Attack"
		},

		damage: 50,
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 2,

	boosters: ["mega-gyarados"]
}

export default card