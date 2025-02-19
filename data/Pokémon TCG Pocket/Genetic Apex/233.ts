import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Gyarados"
	},

	illustrator: "Nurikabe",
	category: "Pokemon",
	hp: 150,
	types: ["Water"],
	stage: "Stage1",
	evolveFrom: {
		en: "Magikarp"
	},

	attacks: [{
		cost: ["Water", "Water", "Water", "Water"],

		name: {
			en: "Hyper Beam"
		},

		effect: {
			en: "Discard a random Energy from your opponent's Active Pokémon."
		},

		damage: "100"
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 0,
	rarity: "One Star",

	description: {
		en: "Once it appears, it goes on a rampage. It remains enraged until it demolishes everything around it.",
	}
}

export default card
