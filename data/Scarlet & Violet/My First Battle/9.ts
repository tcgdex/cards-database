import { Card } from "../../../interfaces"
import Set from "../My First Battle"

const card: Card = {
	dexId: [4],
	set: Set,

	name: {
		en: "Charmander",
	},

	rarity: "None",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			en: "Scratch",
		},

		damage: 10
	}, {
		cost: ["Fire", "Fire"],

		name: {
			en: "Ember",
		},

		damage: 30
	}],

	variants: [
		{
			type: "normal",
			stamp: ["charmander"],

			thirdParty: {
				cardmarket: 741988,
				tcgplayer: 524082
			}
		},
		{
			type: "normal",
			subtype: "blue-border",
			stamp: ["charmander", "pokeball"],

			thirdParty: {
				cardmarket: 741976,
				tcgplayer: 523985
			}
		},
	],

	illustrator: "Kurata So",
}

export default card