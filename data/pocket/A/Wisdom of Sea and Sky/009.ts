import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Bayleef",
		fr: "Macronium"
	},

	illustrator: "Mizue",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [153],
	hp: 90,
	types: ["Grass"],

	evolveFrom: {
		en: "Chikorita"
	},

	description: {
		en: "A spicy aroma emanates from around its neck.\nThe aroma acts as a stimulant to restore health.",
		fr: "Un arôme épicé émane de son cou. Il agit comme un stimulant et lui fait récupérer son énergie."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Vine Whip",
			fr: "Fouet Lianes"
		},

		damage: 40,
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["lugia"]
}

export default card