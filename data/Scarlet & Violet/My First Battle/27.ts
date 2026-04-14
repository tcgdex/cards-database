import { Card } from "../../../interfaces"
import Set from "../My First Battle"

const card: Card = {
	dexId: [60],
	set: Set,

	name: {
		en: "Poliwag",
	},

	rarity: "None",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Pound",
		},

		damage: 20
	}],

	variants: [
		{
			type: "normal",
			stamp: ["squirtle-silhouette"]
		},
	],

	illustrator: "0313",

	thirdParty: {
		cardmarket: 742014,
		tcgplayer: 524052
	}
}

export default card