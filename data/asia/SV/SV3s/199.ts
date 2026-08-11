import { Card } from "models/database/card"
import Set from "../SV3s"

const card: Card = {
	set: Set,

	name: {
		'id-id': "Tapu Koko ex"
	},

	illustrator: "PLANETA Igarashi",
	category: "Pokemon",
	hp: 210,
	types: ["Lightning"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			'id-id': "Revenge Shock"
		},

		effect: {
			'id-id': "Jika pada giliran lawan sebelumnya, ada Pokémon sendiri yang KO karena kerusakan akibat serangan, kerusakan yang diberikan bertambah sejumlah 90, lalu ubah kondisi Pokémon Bertarung lawan menjadi Lumpuh."
		},

		damage: "30+",
		cost: ["Lightning", "Colorless"]
	}, {
		name: {
			'id-id': "Aliran Listrik Ekstrem"
		},

		effect: {
			'id-id': "Pilih 1 Energi yang dikenakan pada Pokémon ini, lalu buang ke Trash."
		},

		damage: 180,
		cost: ["Lightning", "Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card