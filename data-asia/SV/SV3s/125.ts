import { Card } from "../../../interfaces"
import Set from "../SV3s"

const card: Card = {
	set: Set,

	name: {
		id: "Bisharp"
	},

	illustrator: "GIDORA",
	category: "Pokemon",
	hp: 110,
	types: ["Metal"],

	description: {
		id: "Bisharp membentuk pasukan dan memimpin para Pawniard. Pasukan yang kalah dalam pertarungan perebutan wilayah akan diserap oleh pasukan pemenang."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			id: "Metal Claw"
		},

		damage: 20,
		cost: ["Metal"]
	}, {
		name: {
			id: "Sabetan Beruntun"
		},

		effect: {
			id: "Lempar koin 3 kali. Jika hasilnya sisi depan 1 kali, kerusakan yang diberikan bertambah sejumlah 20. Jika hasilnya sisi depan 2 kali, kerusakan yang diberikan bertambah sejumlah 60. Jika semuanya sisi depan, kerusakan yang diberikan bertambah sejumlah 120."
		},

		damage: "50+",
		cost: ["Metal", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card