import { Card } from "../../../interfaces"
import Set from "../My First Battle"

const card: Card = {
	dexId: [82],
	set: Set,

	name: {
		en: "Magneton",
	},

	rarity: "None",
	category: "Pokemon",
	hp: 110,
	types: ["Lightning"],
	evolveFrom: {
		en: "Magnemite",
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Lightning"],

		name: {
			en: "Thunder Shock",
		},

		damage: 20
		}, {
		cost: ["Lightning", "Lightning"],

		name: {
			en: "Magnetic Circle",
		},

		effect: {
			en: "This attack does 20 more damage for each of your Benched lightning Pokémon",
		},

		damage: "20+"
	}],

	variants: [
		{
			type: "normal",
			stamp: ["pikachu-silhouette"]
		},
	],

	illustrator: "GOSSAN",

	thirdParty: {
		cardmarket: 742003,
		tcgplayer: 524064
	}
}

export default card