import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Sandslash"
	},

	illustrator: "Miki Tanaka",
	category: "Pokemon",
	hp: 100,
	types: ["Fighting"],
	stage: "Stage1",
	evolveFrom: {
		en: "Sandshrew"
	},


	attacks: [{
		cost: ["Fighting", "Fighting"],

		name: {
			en: "Slash"
		},

		damage: "70"
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 2,
	rarity: "Two Diamond",

	description: {
		en: "The drier the area Sandslash lives in, the harder and smoother the Pokémon's spikes will feel when touched.",
	}
}

export default card
