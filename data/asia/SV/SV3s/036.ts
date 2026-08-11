import { Card } from "models/database/card"
import Set from "../SV3s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Cryogonal"
	},

	illustrator: "kirisAki",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	description: {
		'id-id': "Cryogonal muncul saat musim dingin. Dikatakan bahwa Pokémon ini adalah reinkarnasi Pokémon atau manusia yang meninggal di gunung salju."
	},

	stage: "Basic",

	attacks: [{
		name: {
			'id-id': "First Freeze"
		},

		effect: {
			'id-id': "Jika ini adalah giliran pertama Pemain Kedua, ubah kondisi Pokémon Bertarung lawan menjadi Lumpuh."
		},

		damage: 30,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card