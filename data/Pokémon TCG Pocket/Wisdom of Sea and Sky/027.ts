import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Cyndaquil",
		fr: "Héricendre"
	},

	illustrator: "kirisAki",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [155],
	hp: 60,
	types: ["Fire"],

	description: {
		en: "It is timid and always curls itself up in a ball.\nIf attacked, it flares up its back for protection.",
		fr: "Il est timide et se roule en boule pour se protéger. Attaqué, il s'enflamme le dos pour riposter."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Flare",
			fr: "Flamboiement"
		},

		damage: 20,
		cost: ["Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["lugia"]
}

export default card