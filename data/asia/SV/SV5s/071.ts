import { Card } from "models/database/card"
import Set from "../SV5s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Medicham"
	},

	illustrator: "Masako Tomii",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],

	description: {
		'id-id': "Medicham menghindari serangan lawannya dengan gerakan elegan yang seperti tarian, lalu ia memberikan serangan tunggal yang dahsyat ke lawannya."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'id-id': "Low Kick"
		},

		damage: 40,
		cost: ["Fighting"]
	}, {
		name: {
			'id-id': "Tendangan Lutut Melompat"
		},

		damage: 110,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card