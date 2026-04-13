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
			type: "normal"
		},
	],

	illustrator: "Kurata So",

	thirdParty: {
		cardmarket: 741988,
		tcgplayer: 524082
	}
}

export default card