import { Card } from "../../../interfaces"
import Set from "../My First Battle"

const card: Card = {
	dexId: [125],
	set: Set,

	name: {
		en: "Electabuzz",
	},

	rarity: "None",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Lightning"],

		name: {
			en: "Low Kick",
		},

		damage: 20
	}, {
		cost: ["Lightning", "Lightning"],

		name: {
			en: "Electro Punch",
		},

		damage: 50
	}],

	variants: [
		{
			type: "normal",
			stamp: ["pikachu-silhouette"]
		},
	],

	illustrator: "hncl",

	thirdParty: {
		cardmarket: 742006,
		tcgplayer: 524068
	}
}

export default card