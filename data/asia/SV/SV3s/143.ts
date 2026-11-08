import { Card } from "models/database/card"
import Set from "../SV3s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Linoone"
	},

	illustrator: "Nagomi Nijo",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],

	description: {
		'id-id': "Linoone menghabisi mangsa dengan kecepatan seketikanya yang luar biasa dan kukunya yang tajam. Tidak ahli dalam berlari di jalan berbelok."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'id-id': "Jet Head"
		},

		damage: 40,
		cost: ["Colorless"]
	}, {
		name: {
			'id-id': "Menyerang"
		},

		effect: {
			'id-id': "Pokémon ini juga menerima kerusakan sejumlah 30."
		},

		damage: 150,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 0,
	regulationMark: "G"
}

export default card