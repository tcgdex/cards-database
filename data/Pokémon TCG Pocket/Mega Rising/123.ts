import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Sandslash",
		fr: "Sablaireau"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [28],
	hp: 90,
	types: ["Fighting"],

	evolveFrom: {
		en: "Sandshrew",
		fr: "Sabelette"
	},

	description: {
		en: "It climbs trees by hooking on with its sharp claws.\nSandslash shares the berries it gathers, dropping\nthem down to Sandshrew waiting below the tree."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Cut",
			fr: "Coupe"
		},

		damage: 50,
		cost: ["Fighting"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 1,

	boosters: ["mega-altaria", "mega-blaziken", "mega-gyarados"]
}

export default card