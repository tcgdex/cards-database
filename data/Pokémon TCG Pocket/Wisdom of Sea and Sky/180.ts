import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Scizor"
	},

	illustrator: "danciao",
	rarity: "One Star",
	category: "Pokemon",
	hp: 100,
	types: ["Metal"],

	evolveFrom: {
		en: "Scyther"
	},

	description: {
		en: "This Pokémon's pincers, which contain steel, can\ncrush any hard object they get ahold of into bits."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Gale Thrust"
		},

		damage: 50,
		cost: ["Metal", "Metal"],

		effect: {
			en: "If this Pokémon moved from your Bench to the Active Spot this turn, this attack does 50 more damage."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1
}

export default card