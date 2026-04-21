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
			type: "normal",
			stamp: ["squirtle"],

			thirdParty: {
				cardmarket: 742012,
				tcgplayer: 524047
			}
		},
		{
			type: "normal",
			subtype: "blue-border",
			stamp: ["squirtle", "pokeball"],

			thirdParty: {
				cardmarket: 742011,
				tcgplayer: 524046
			}
		},
	],

	illustrator: "ryoma uratsuka",
}

export default card