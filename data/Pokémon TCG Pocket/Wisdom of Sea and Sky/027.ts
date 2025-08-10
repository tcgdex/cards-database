import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Cyndaquil"
	},

	illustrator: "kirisAki",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Fire"],

	description: {
		en: "It is timid and always curls itself up in a ball.\nIf attacked, it flares up its back for protection."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Flare"
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