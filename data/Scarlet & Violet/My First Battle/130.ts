import { Card } from "../../../interfaces"
import Set from "../My First Battle"

const card: Card = {
	dexId: [130],
	set: Set,

	name: {
		en: "Gyarados",
	},

	rarity: "None",
	category: "Pokemon",
	hp: 160,
	types: ["Water"],
	evolveFrom: {
		en: "Magikarp",
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Water", "Water", "Water"],

		name: {
			en: "Tail Smash",
		},

		effect: {
			en: "Flip a coin. If tails, this attack does nothing.",
		},

		damage: 90
		}, {
		cost: ["Water", "Water", "Water", "Water"],

		name: {
			en: "Hyper Beam",
		},

		damage: 120
	}],

	variants: [
		{
			type: "normal"
		},
	],

	illustrator: "NC Empire",

	thirdParty: {
		cardmarket: 742017,
		tcgplayer: 524055
	}
}

export default card