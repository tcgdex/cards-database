import { Card } from "models/database/card"
import Set from "../SV4s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Horsea"
	},

	illustrator: "HYOGONOSUKE",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		'id-id': "Horsea berenang bagaikan menari di dalam air dan membuat pusaran. Mereka bermain dengan bertanding siapa yang membuat pusaran paling besar."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "Mengait"
		},

		damage: 20,
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card