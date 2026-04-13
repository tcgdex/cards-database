import { Card } from "../../../interfaces"
import Set from "../My First Battle"

const card: Card = {
	dexId: [130],
	set: Set,

	name: {
		en: "Electrode",
	},

	rarity: "None",
	category: "Pokemon",
	hp: 80,
	types: ["Lightning"],
	evolveFrom: {
		en: "Voltorb",
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Lightning"],

		name: {
			en: "Speed Attack",
		},

		damage: 40
		}, {
		cost: ["Lightning", "Lightning", "Lightning"],

		name: {
			en: "Single Shot Blast",
		},

		effect: {
			en: "Flip a coin. If tails, this attack does nothing.",
		},

		damage: 120
	}],

	variants: [
		{
			type: "normal"
		},
	],

	illustrator: "miki kudo",

	thirdParty: {
		cardmarket: 742005,
		tcgplayer: 524066
	}
}

export default card