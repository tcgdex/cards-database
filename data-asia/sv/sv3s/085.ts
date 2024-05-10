import { Card } from "../../../interfaces"
import Set from "../sv3s"

const card: Card = {
	set: Set,

	name: {
		id: "Gible"
	},

	illustrator: "saino misaki",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	description: {
		id: "Gible menerjang lalu menggigit mangsa dan musuh yang melewati sarangnya. Terkadang giginya terlepas akibat menggigit terlalu kuat."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Menggigit"
		},

		damage: 20,
		cost: ["Fighting"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card