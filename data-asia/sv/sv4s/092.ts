import { Card } from "../../../interfaces"
import Set from "../sv4s"

const card: Card = {
	set: Set,

	name: {
		id: "Lokix"
	},

	illustrator: "Souichirou Gunjima",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],

	description: {
		id: "Lokix berdiri dengan kakinya yang terlipat dan menjadi mode bertarung jika menjadi serius dalam pertarungan. Pokémon ini akan mengalahkan lawannya dalam waktu singkat."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			id: "Memantul"
		},

		effect: {
			id: "Tukar Pokémon ini dengan Pokémon Cadangan."
		},

		damage: 30,
		cost: ["Darkness"]
	}, {
		name: {
			id: "Punish Kick"
		},

		effect: {
			id: "Kerusakan yang diberikan bertambah sejumlah 40 untuk tiap Token Kerusakan yang dimiliki Pokémon Bertarung lawan."
		},

		damage: "10+",
		cost: ["Darkness", "Darkness"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card