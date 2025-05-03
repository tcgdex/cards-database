import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Dewgong"
	},

	illustrator: "Kanako Eo",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],
	stage: "Stage1",
	evolveFrom: {
		en: "Seel"
	},


	attacks: [{
		cost: ["Water", "Water", "Water"],

		name: {
			en: "Surf"
		},

		damage: "90"
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 3,
	rarity: "Two Diamond",

	description: {
		en: "It sunbathes on the beach after meals. The rise in its body temperature helps its digestion.",
	}
}

export default card
