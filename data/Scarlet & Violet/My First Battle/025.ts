import { Card } from "../../../interfaces"
import Set from "../My First Battle"

const card: Card = {
	dexId: [25],
	set: Set,

	name: {
		en: "Pikachu",
	},

	rarity: "None",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Lightning"],

		name: {
			en: "Quick Attack",
		},

		damage: 10
	}, {
		cost: ["Lightning", "Lightning"],

		name: {
			en: "Electro Ball",
		},

		damage: 30
	}],

	variants: [
		{
			type: "normal"
		},
	],

	illustrator: "Saino Misaki",

	thirdParty: {
		cardmarket: 742000,
		tcgplayer: 524060
	}
}

export default card