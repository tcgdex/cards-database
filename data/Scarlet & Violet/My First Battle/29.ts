import { Card } from "../../../interfaces"
import Set from "../My First Battle"

const card: Card = {
	dexId: [129],
	set: Set,

	name: {
		en: "Magikarp",
	},

	rarity: "None",
	category: "Pokemon",
	hp: 30,
	types: ["Water"],
	evolveFrom: {
		en: "Magikarp",
	},
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Splash",
		},

		damage: 10
	}],

	variants: [
		{
			type: "normal",
			stamp: ["squirtle-silhouette"]
		},
	],

	illustrator: "Amelicart",

	thirdParty: {
		cardmarket: 742016,
		tcgplayer: 524054
	}
}

export default card