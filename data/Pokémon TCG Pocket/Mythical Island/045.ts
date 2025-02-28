import { Card } from "../../../interfaces"
import Set from "../Mythical Island"

const card: Card = {
	set: Set,

	name: {
		en: "Golem"
	},

	illustrator: "Masakazu Fukuda",
	category: "Pokemon",
	hp: 160,
	types: ["Fighting"],

	evolveFrom: {
		en: "Graveler"
	},

	description: {
		en: "When Golem grow old, they stop shedding their shells. Those that have lived a long, long time have shells green with moss."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			en: "Guard Press"
		},

		damage: 120,
		cost: ["Fighting", "Fighting", "Fighting", "Colorless"],

		effect: {
			en: "During your opponent's next turn, this Pokémon takes −30 damage from attacks."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 3,
	rarity: "Three Diamond"
}

export default card
