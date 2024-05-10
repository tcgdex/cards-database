import { Card } from "../../../interfaces"
import Set from "../sv5s"

const card: Card = {
	set: Set,

	name: {
		id: "Vikavolt"
	},

	illustrator: "Hitoshi Ariga",
	category: "Pokemon",
	hp: 160,
	types: ["Lightning"],

	description: {
		id: "Vikavolt menghimpun listrik yang dibuat di dalam perut ke rahangnya yang besar dan menembakkan sinar laser berkekuatan tinggi."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			id: "Mach Bolt"
		},

		damage: 50,
		cost: ["Lightning"]
	}, {
		name: {
			id: "Meriam Koneksi Seri"
		},

		effect: {
			id: "Kerusakan yang diberikan bertambah sejumlah 80 untuk tiap Charjabug di Cadangan sendiri."
		},

		damage: "120+",
		cost: ["Lightning", "Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card