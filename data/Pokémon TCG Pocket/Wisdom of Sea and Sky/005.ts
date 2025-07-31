import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Tangrowth"
	},

	illustrator: "tetsuya koizumi",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],

	evolveFrom: {
		en: "Tangela"
	},

	description: {
		en: "Tangrowth has two arms that it can extend as it\npleases. Recent research has shown that these\narms are, in fact, bundles of vines."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Grass Knot"
		},

		damage: 10,
		cost: ["Grass", "Grass", "Colorless"],

		effect: {
			en: "This attack does 40 more damage for each Energy in your opponent's Active Pokémon's Retreat Cost."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 4
}

export default card