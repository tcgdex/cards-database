import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Sentret",
		fr: "Fouinette"
	},

	illustrator: "saino misaki",
	rarity: "One Star",
	category: "Pokemon",

	dexId: [161],
	hp: 60,
	types: ["Colorless"],

	description: {
		en: "When acting as a lookout, it warns others of danger\nby screeching and hitting the ground with its tail.",
		fr: "S'il fait le guet, il prévient les autres d'un danger en criant et en frappant le sol de sa queue."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Scratch",
			fr: "Griffe"
		},

		damage: 20,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["ho-oh"]
}

export default card