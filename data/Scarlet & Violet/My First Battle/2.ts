import { Card } from "../../../interfaces"
import Set from "../My First Battle"

const card: Card = {
	dexId: [2],
	set: Set,

	name: {
		en: "Ivysaur",
	},

	rarity: "None",
	category: "Pokemon",
	hp: 100,
	types: ["Grass"],
	stage: "Stage1",

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Vine Whip",
		},

		damage: 30
	}, {
		cost: ["Grass", "Grass", "Grass"],

		name: {
			en: "Razor Leaf",
		},

		damage: 60
	}],

	variants: [
		{
			type: "normal",
			stamp: ["bulbasaur-silhouette"]
		},
	],

	illustrator: "Narumi Sato",

	thirdParty: {
		cardmarket: 741977,
		tcgplayer: 524007
	}
}

export default card