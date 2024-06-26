import { Card } from "../../../interfaces"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		id: "Scolipede"
	},

	illustrator: "Shiburingaru",
	category: "Pokemon",
	hp: 170,
	types: ["Darkness"],

	description: {
		id: "Scolipede menangkap mangsa menggunakan cakar di lehernya, lalu menghantamkan mereka ke permukaan tanah begitu saja, dan menusukkan duri beracunnya."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			id: "Satu Tikaman Kejam"
		},

		effect: {
			id: "Letakkan Token Kerusakan hingga sisa HP Pokémon Bertarung lawan menjadi sejumlah 10."
		},

		cost: ["Darkness", "Colorless"]
	}, {
		name: {
			id: "Bom Limbah"
		},

		damage: 160,
		cost: ["Darkness", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card