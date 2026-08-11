import { Card } from "models/database/card"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Trevenant"
	},

	illustrator: "Hiroyuki Yamamoto",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [709],
	hp: 110,
	types: ["Grass"],

	evolveFrom: {
		'en-us': "Phantump"
	},

	description: {
		'en-us': "Small roots that extend from the tips of this\nPokémon's feet can tie into the trees of the\nforest and give Trevenant control over them."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'en-us': "Horn Leech"
		},

		damage: 60,
		cost: ["Grass", "Grass"],

		effect: {
			'en-us': "Heal 20 damage from this Pokémon."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 2,

	boosters: ["mega-altaria", "mega-blaziken", "mega-gyarados"]
}

export default card