import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Golduck"
	},

	illustrator: "Naoki Saito",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],
	stage: "Stage1",
	evolveFrom: {
		en: "Psyduck"
	},


	attacks: [{
		cost: ["Water", "Water"],

		name: {
			en: "Aqua Edge"
		},

		damage: "70"
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	rarity: "Two Diamond",

	description: {
		en: "When it swims at full speed using its long, webbed limbs, its forehead somehow begins to glow.",
	}
}

export default card
