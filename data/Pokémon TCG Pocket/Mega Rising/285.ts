import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Mega Gyarados ex"
	},

	illustrator: "danciao",
	rarity: "Three Star",
	category: "Pokemon",
	hp: 210,
	types: ["Water"],

	evolveFrom: {
		en: "Magikarp"
	},

	description: {
		en: "Mega Evolution also affects its brain, leaving\nno other function except its destructive instinct\nto burn everything to cinders."
	},

	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Mega Blaster"
		},

		damage: 140,
		cost: ["Water", "Water", "Water", "Colorless"],

		effect: {
			en: "Discard the top 3 cards of your opponent's deck."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 3
}

export default card