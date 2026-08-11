import { Card } from "models/database/card"
import Set from "../SV3s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Gible"
	},

	illustrator: "saino misaki",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	description: {
		'id-id': "Gible menerjang lalu menggigit mangsa dan musuh yang melewati sarangnya. Terkadang giginya terlepas akibat menggigit terlalu kuat."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Menggigit"
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