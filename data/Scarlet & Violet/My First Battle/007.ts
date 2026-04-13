import { Card } from "../../../interfaces"
import Set from "../My First Battle"

const card: Card = {
	dexId: [7],
	set: Set,

	name: {
		en: "Squirtle",
	},

	rarity: "None",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Tackle",
		},

		damage: 10
	}, {
		cost: ["Water", "Water"],

		name: {
			en: "Water Gun",
		},

		damage: 30
	}],

	variants: [
		{
			type: "normal"
		},
	],

	illustrator: "ryoma uratsuka",

	thirdParty: {
		cardmarket: 742012,
		tcgplayer: 524047
	}
}

export default card