import { Card } from "../../../interfaces"
import Set from "../My First Battle"

const card: Card = {
	dexId: [123],
	set: Set,

	name: {
		en: "Scyther",
	},

	rarity: "None",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "X-Scissor",
		},

		effect: {
			en: "Flip a coin. If heads, this attack does 40 more damage.",
		},

		damage: "20+"
	}],

	variants: [
		{
			type: "normal"
		},
	],

	illustrator: "Kouki Saitou",

	thirdParty: {
		cardmarket: 741982,
		tcgplayer: 524016
	}
}

export default card