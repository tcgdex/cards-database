import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Gyarados"
	},

	illustrator: "kawayoo",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 140,
	types: ["Water"],

	evolveFrom: {
		en: "Magikarp"
	},

	description: {
		en: "It appears whenever there is world conflict,\nburning down any place it travels through."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Hammering Tail"
		},

		damage: 100,
		cost: ["Water", "Water", "Water", "Colorless"],

		effect: {
			en: "Discard the top card of your opponent's deck."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 3,

	boosters: ["mega-gyarados"]
}

export default card