import { Card } from "../../../interfaces"
import Set from "../My First Battle"

const card: Card = {
	dexId: [100],
	set: Set,

	name: {
		en: "Voltorb",
	},

	rarity: "None",
	category: "Pokemon",
	hp: 50,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Lightning"],

		name: {
			en: "Rollout",
		},

		damage: 10
		}, {
		cost: ["Lightning", "Lightning"],

		name: {
			en: "Spark",
		},

		damage: 30
	}],

	variants: [
		{
			type: "normal",
			stamp: ["pikachu-silhouette"]
		},
	],

	illustrator: "OKACHEKE",

	thirdParty: {
		cardmarket: 742004,
		tcgplayer: 524065
	}
}

export default card