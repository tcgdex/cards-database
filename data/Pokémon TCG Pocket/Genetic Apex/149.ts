import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Golem"
	},

	illustrator: "Sumiyoshi Kizuki",
	category: "Pokemon",
	hp: 160,
	types: ["Fighting"],
	stage: "Stage2",
	evolveFrom: {
		en: "Graveler"
	},


	attacks: [{
		cost: ["Fighting", "Colorless", "Colorless", "Colorless"],

		name: {
			en: "Double-Edge"
		},

		effect: {
			en: "This Pokémon also does 50 damage to itself."
		},

		damage: "150"
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 4,
	rarity: "Three Diamond",

	description: {
		en: "When Golem grow old, they stop shedding their shells. Those that have lived a long, long time have shells green with moss.",
	}
}

export default card
