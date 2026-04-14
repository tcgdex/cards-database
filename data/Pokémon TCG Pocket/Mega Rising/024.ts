import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Trevenant"
	},

	illustrator: "Hiroyuki Yamamoto",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [709],
	hp: 110,
	types: ["Grass"],

	evolveFrom: {
		en: "Phantump"
	},

	description: {
		en: "Small roots that extend from the tips of this\nPokémon's feet can tie into the trees of the\nforest and give Trevenant control over them."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Horn Leech"
		},

		damage: 60,
		cost: ["Grass", "Grass"],

		effect: {
			en: "Heal 20 damage from this Pokémon."
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