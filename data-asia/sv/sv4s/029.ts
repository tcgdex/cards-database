import { Card } from "../../../interfaces"
import Set from "../sv4s"

const card: Card = {
	set: Set,

	name: {
		id: "Horsea"
	},

	illustrator: "HYOGONOSUKE",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		id: "Horsea berenang bagaikan menari di dalam air dan membuat pusaran. Mereka bermain dengan bertanding siapa yang membuat pusaran paling besar."
	},

	stage: "Basic",

	attacks: [{
		name: {
			id: "Mengait"
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