import { Card } from "models/database/card"
import Set from "../SV6s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Scolipede"
	},

	illustrator: "Shiburingaru",
	category: "Pokemon",
	hp: 170,
	types: ["Darkness"],

	description: {
		'id-id': "Scolipede menangkap mangsa menggunakan cakar di lehernya, lalu menghantamkan mereka ke permukaan tanah begitu saja, dan menusukkan duri beracunnya."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			'id-id': "Satu Tikaman Kejam"
		},

		effect: {
			'id-id': "Letakkan Token Kerusakan hingga sisa HP Pokémon Bertarung lawan menjadi sejumlah 10."
		},

		cost: ["Darkness", "Colorless"]
	}, {
		name: {
			'id-id': "Bom Limbah"
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