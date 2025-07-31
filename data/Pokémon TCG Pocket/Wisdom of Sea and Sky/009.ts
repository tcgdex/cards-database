import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Bayleef"
	},

	illustrator: "Mizue",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	evolveFrom: {
		en: "Chikorita"
	},

	description: {
		en: "A spicy aroma emanates from around its neck.\nThe aroma acts as a stimulant to restore health."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Vine Whip"
		},

		damage: 40,
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 2
}

export default card