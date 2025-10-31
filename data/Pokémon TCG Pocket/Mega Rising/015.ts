import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Cottonee"
	},

	illustrator: "Yuka Tanaka",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],

	description: {
		en: "It shoots cotton from its body to protect itself.\nIf it gets caught up in hurricane-strength winds,\nit can get sent to the other side of the Earth."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Razor Leaf"
		},

		damage: 20,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1
}

export default card