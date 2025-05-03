import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Raticate"
	},

	illustrator: "Shigenori Negishi",
	category: "Pokemon",
	hp: 80,
	types: ["Colorless"],
	stage: "Stage1",
	evolveFrom: {
		en: "Rattata"
	},

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Bite"
		},

		damage: "40"
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Diamond",

	description: {
		en: "People say that it fled from its enemies by using its small webbed hind feet to swim from island to island in Alola.",
	}
}

export default card
