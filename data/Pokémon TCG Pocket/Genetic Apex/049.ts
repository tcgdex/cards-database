import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Salandit"
	},

	illustrator: "Kyoko Umemoto",
	category: "Pokemon",
	hp: 60,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			en: "Scratch"
		},

		damage: "20"
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Diamond",

	description: {
		en: "It taunts its prey and lures them into narrow, rocky areas where it then sprays them with toxic gas to make them dizzy and take them down.",
	}
}

export default card
