import { Card } from "../../../interfaces"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		en: "Lillipup",
		fr: "Ponchiot"
	},

	illustrator: "Mizue",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [506],
	hp: 60,
	types: ["Colorless"],

	description: {
		en: "This Pokémon is courageous but also cautious.\nIt uses the soft fur covering its face to collect\ninformation about its surroundings.",
		fr: "Ce Pokémon est courageux, mais prudent. Les poils doux qui recouvrent son visage lui permettent de sonder les alentours."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Tackle",
			fr: "Charge"
		},

		damage: 20,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card