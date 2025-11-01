import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Togetic",
		fr: "Togetic"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	evolveFrom: {
		en: "Togepi"
	},

	description: {
		en: "They say that it will appear before kindhearted,\ncaring people and shower them with happiness.",
		fr: "On dit qu'il se montre aux personnes dotées d'un cœur pur pour leur apporter joie et bonheur."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Speed Dive",
			fr: "Plongée Rapide"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["ho-oh"]
}

export default card