import { Card } from "../../../interfaces"
import Set from "../My First Battle"

const card: Card = {
	dexId: [8],
	set: Set,

	name: {
		en: "Wartortle",
	},

	rarity: "None",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],
	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Water Gun",
		},

		damage: 30
	}, {
		cost: ["Water", "Water", "Water"],

		name: {
			en: "Skull Bash",
		},

		damage: 60
	}],

	variants: [
		{
			type: "normal",
			stamp: ["squirtle-silhouette"]
		},
	],

	illustrator: "Hitoshi Ariga",

	thirdParty: {
		cardmarket: 742013,
		tcgplayer: 524048
	}
}

export default card