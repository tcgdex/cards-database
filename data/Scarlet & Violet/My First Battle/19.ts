import { Card } from "../../../interfaces"
import Set from "../My First Battle"

const card: Card = {
	dexId: [81],
	set: Set,

	name: {
		en: "Magnemite",
	},

	rarity: "None",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Lightning"],

		name: {
			en: "Thunder Shock",
		},

		damage: 20
	}],

	variants: [
		{
			type: "normal",
			stamp: ["pikachu"],

			thirdParty: {
				cardmarket: 742002,
				tcgplayer: 524063
			}
		},
	],

	illustrator: "Shibuzoh",
}

export default card