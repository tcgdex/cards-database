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
			type: "normal",
			stamp: ["pikachu"],

			thirdParty: {
				cardmarket: 742000,
				tcgplayer: 524060
			}
		},
		{
			type: "normal",
			subtype: "blue-border",
			stamp: ["pikachu", "pokeball"],

			thirdParty: {
				cardmarket: 741999,
				tcgplayer: 524061
			}
		},
	],

	illustrator: "Saino Misaki",
}

export default card