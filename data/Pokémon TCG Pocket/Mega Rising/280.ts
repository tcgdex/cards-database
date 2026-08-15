import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Mega Absol ex"
	},

	illustrator: "kawayoo",
	rarity: "Two Star",
	category: "Pokemon",

	dexId: [359],
	hp: 170,
	types: ["Darkness"],

	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Darkness Claw"
		},

		damage: 80,
		cost: ["Darkness", "Darkness"],

		effect: {
			en: "Your opponent reveals their hand. Choose a Supporter card you find there and discard it."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["mega-gyarados"]
}

export default card